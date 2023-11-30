import { Avatar, Button, Card, CardBody, Input } from "@nextui-org/react";
import MessageBubble from "./message.buble";
import { FC, useEffect, useState } from "react";
import { Socket, io } from "socket.io-client";

interface ChatScreen {
    room?: string;
}

let socket: Socket;

const ChatScreen:FC<ChatScreen> = (props) => {

    const [messages, setMessages] = useState<string[]>([]); 
    const [messageInputValue, setMessageInputValue] = useState<string>('')

    const handleChangeValue = (text: string) => {
        setMessageInputValue(text)
    }

    const handleMessage = async () => {
        await socket.emit('messageToServer', {room: 'room 1', text: messageInputValue})
        setMessageInputValue('');
    };

    useEffect(() => {
        if(socket) {
            socket.on('messageToServer', (e) => setMessages((prev) => [...prev, e]));
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
        socket.emit('joinChat', "chat 1")
        return () => {
            socket.emit("leaveChat", "chat 1")
            socket.disconnect();
        };
    }, [])

    return (
        <>
            <Card className="w-full bg-white absolute top-0 bottom-0 pt-4 ">
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
                    <div className="w-full max-h-full overflow-y-auto absolute bottom-0 top-0 mt-[3.3rem] mb-20">
                        <div className="px-8 pt-4 w-full max-h-full flex flex-col gap-2 pb-4 overflow-y-auto">
                            <MessageBubble
                                isMine={true}
                                text="Hello how a you?"
                            />
                            {messages.map((item) => (
                                <>
                                    <MessageBubble
                                        isMine
                                        text={item}
                                    />
                                </>
                            ))}
                        </div>
                    </div>
                    <div className="w-full px-8 py-4 border-t-1 absolute bottom-0">
                        <div className="flex gap-4">
                            <Input 
                                size='sm' 
                                variant='bordered'
                                placeholder='Write your message...'
                                value={messageInputValue}
                                onChange={(e) => handleChangeValue(e.target.value)}
                            />
                            <Button 
                                className="h-12"
                                size='md'
                                variant='bordered'
                                onClick={handleMessage}
                            >
                                Send 
                            </Button>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </>
    );
}

export default ChatScreen;