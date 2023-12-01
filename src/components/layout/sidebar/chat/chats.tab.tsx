import { FC, useState } from "react";
import ChatCard from "./chat.card";

interface ChatsTabProps {
    handleChangeRoom: (room: string) => void;
}

const ChatsTab:FC<ChatsTabProps> = (props) => {
    return (
        <>
            <div className="flex flex-col  gap-4">
                <ChatCard 
                    room="room 1" 
                    handleChangeRoom={props.handleChangeRoom}
                />
                <ChatCard 
                    room="room 2" 
                    handleChangeRoom={props.handleChangeRoom}
                />
                <ChatCard 
                    room="room 3" 
                    handleChangeRoom={props.handleChangeRoom}
                />
            </div>
        </>
    );
}

export default ChatsTab;