import { useState } from "react";
import Sidebar from "../layout/sidebar/sidebar";
import ChatScreen from "./chat.screen";
import { Card } from "@nextui-org/react";
import { Socket, io } from "socket.io-client";

let socket: Socket;

const MainScreen = () => {
    const [currentChatRoom, setCurrentChatRoom] = useState<string>("NONE");

    const handleSetChatRoom = (room: string) => {
        setCurrentChatRoom(room);
    }

    return (
        <>
            <div className="w-full h-full px-0 md:px-4 lg:px-0 flex flex-row gap-4">
                <div className="max-w-xs w-full relative hidden md:block">
                    <Sidebar
                        handleChangeRoom={handleSetChatRoom}
                    />
                </div>
                <div className="w-full relative">
                    {currentChatRoom !== "NONE" ? <>
                        <ChatScreen room={currentChatRoom} />
                    </> : <>
                        <Card className="h-full justify-center items-center">
                            Select chat
                        </Card>
                    </>
                    }
                </div>
            </div>
        </>
    );
}

export default MainScreen;