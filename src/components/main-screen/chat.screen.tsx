import { Avatar, Button, Card, CardBody, Input } from "@nextui-org/react";
import MessageBubble from "./message.buble";
import { FC, FormEvent, useCallback, useEffect, useRef, useState } from "react";
import { Socket, io } from "socket.io-client";

interface Message {
    isMine: boolean;
    text: string;
}

interface ChatScreen {
    room?: string;
}

let socket: Socket;

const ChatScreen: FC<ChatScreen> = (props) => {

    const [messages, setMessages] = useState<Message[]>([]); 
    const [messageInputValue, setMessageInputValue] = useState<string>('')

    const inputRef = useRef<HTMLInputElement>(null)
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const handleChangeValue = (text: string) => {
        setMessageInputValue(text)
    }

    const handleMessage = async (e: FormEvent<HTMLButtonElement> | FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(messageInputValue !== undefined && messageInputValue.split(" ").join("") !== '') {
            await socket.emit('messageToServer', {room: props.room, text: messageInputValue})
            console.log(socket.id)
            setMessageInputValue('');
        }
        inputRef.current?.focus()
    };

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' })
    }

    useEffect(() => {
        scrollToBottom();
    }, [messages.length])

    useEffect(() => {
        document.addEventListener('keydown', detectKeyPressed, true);
    }, [])

    const detectKeyPressed = () => {
        inputRef.current?.focus()
    }

    useEffect(() => {
        if(socket) {
            socket.on('messageToServer', (e) => {
                if(e.client === socket.id) setMessages((prev) => [...prev, {text: e.message, isMine: true}])
                else setMessages((prev) => [...prev, {text: e.message, isMine: false}]) 
            });
        }
        return () => {
            if(socket) {
                socket.off('messageToClient');
            }
        }
    }, [socket]);

    useEffect(() => {
        const connect = async () => {
            socket = io(`${process.env.REACT_APP_BASE_URL}`);
        }
        connect();
        socket.on('connect', () => {
            socket.emit('room', props.room)
        })
        socket.emit('joinChat', props.room)
        return () => {
            socket.emit("leaveChat", props.room)
            socket.disconnect();
        };
    }, [props.room])

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