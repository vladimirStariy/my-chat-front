import { Avatar, Button, Card, CardBody, Input } from "@nextui-org/react";
import MessageBubble from "./message.buble";
import { FC, FormEvent, useCallback, useEffect, useRef, useState } from "react";
import { Socket, io } from "socket.io-client";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentToken, selectCurrentUsertag, setCredentials } from "../../store/slices/authSlice";
import { RefreshSocketHelper } from "../../store/helpers/socket.refresh.helper";
import { useRefreshMutationMutation } from "../../store/services/auth.service";
import { useGetMessagesQuery } from "../../store/services/chat.service";
import { socketEmit } from "../../store/helpers/socket.emitter";

interface Message {
  date?: Date;
  isMine: boolean;
  text: string;
}

interface ChatScreen {
  room: string;
  socket: Socket;
  otherFocused?: boolean;
}

const ChatScreen: FC<ChatScreen> = (props) => {
  const [socket, setSocket] = useState(props.socket);

  const token = useSelector(selectCurrentToken);
  const usertag = useSelector(selectCurrentUsertag);
  const [messages, setMessages] = useState<Message[]>([]); 
  const [messageInputValue, setMessageInputValue] = useState<string>('')
  const inputRef = useRef<HTMLInputElement>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const handleChangeValue = (text: string) => { setMessageInputValue(text) }
  
  const {data: fetchedMessages, refetch} = useGetMessagesQuery({chatRoomId: props.room, page: 1, limit: 20})

  const handleMessage = async (e: FormEvent<HTMLButtonElement> | FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(messageInputValue !== undefined && messageInputValue.split(" ").join("") !== '' && token) {
      await socketEmit(props.socket, 'messageToServer', token, {room: props.room, text: messageInputValue})
      setMessageInputValue('');
    }
    inputRef.current?.focus()
  };

  const scrollToBottom = () => { messagesEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' }) }
  useEffect(() => { scrollToBottom() }, [messages.length])
  useEffect(() => { document.addEventListener('keydown', detectKeyPressed, true) }, [])
  const detectKeyPressed = () => { inputRef.current?.focus() }

  useEffect(() => {
    setMessages([]);
    refetch();
  }, [props.room])

  useEffect(() => {
    if(fetchedMessages)
      fetchedMessages?.map((message) => {
        if(message.usertag === usertag) setMessages((prev) => [...prev, {text: message.text, isMine: true, date: message.messageDate}])
        else setMessages((prev) => [...prev, {text: message.text, isMine: false}])
      })
  }, [fetchedMessages])

  useEffect(() => {
    props.socket.on('messageToServer', async (e) => {
      console.log("не получает с сервера месседж на сюда и не")
      if(e.client === props.socket.id) setMessages((prev) => [...prev, {text: e.message, isMine: true}])
      else setMessages((prev) => [...prev, {text: e.message, isMine: false}]) 
    });
    return () => {
      if(props.socket) {
        props.socket.off('messageToServer');
      }
    }
  }, [props.socket]);

  useEffect(() => {
    props.socket.emit('joinChat', props.room)
    return () => {
      props.socket.emit("leaveChat", props.room)
    };
  }, [props.socket, props.room])

    return (
        <>
            <Card className="w-full rounded-none md:rounded-lg bg-white absolute top-0 bottom-0 pt-4 ">
                <CardBody className="px-0 pt-0 relative">
                    <div className="drop-shadow-lg w-full pb-3 px-8 border-b-1 absolute z-30 bg-white flex items-center justify-between">
                        <div>
                            User name
                        </div>
                        <div>
                            <Avatar 
                                name="Junior"
                                size='md'
                            />
                        </div>
                    </div>
                    <div className="w-full overflow-y-auto absolute bottom-0 top-0 mt-[3.3rem] mb-20">
                        <div className="px-8 pt-4 w-full flex flex-col gap-2">
                            {messages.map((item) => (
                                <>
                                    <MessageBubble
                                        isMine={item.isMine}
                                        text={item.text}
                                    />
                                </>
                            ))}
                        </div>
                        <div className="pb-4" ref={messagesEndRef} />
                    </div>
                    <form onSubmit={handleMessage} className="w-full px-8 py-4 border-t-1 absolute bottom-0">
                        <div className="flex gap-4">
                            <Input 
                                ref={inputRef}
                                size='sm' 
                                variant='bordered'
                                placeholder='Write your message...'
                                autoFocus
                                value={messageInputValue}
                                onChange={(e) => handleChangeValue(e.target.value)}
                            />
                            <Button 
                                type='submit'
                                className="h-12"
                                size='md'
                                variant='bordered'
                                onSubmit={handleMessage}
                            >
                                Send 
                            </Button>
                        </div>
                    </form>
                </CardBody>
            </Card>
        </>
    );
}

export default ChatScreen;