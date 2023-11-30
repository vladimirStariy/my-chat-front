import { Avatar, Button, Card, CardBody, CardHeader, Input } from "@nextui-org/react";
import Sidebar from "../layout/sidebar/sidebar";
import MessageBubble from "./message.buble";
import NavigationBar from "../layout/navbar/navbar";
import ChatScreen from "./chat.screen";

const MainScreen = () => {
    return (
        <>
            <div className="w-full h-full flex flex-row gap-4">
                <div className="max-w-xs w-full relative">
                    <Sidebar />
                </div>
                <div className="w-full relative">
                    <ChatScreen />
                </div>
            </div>
        </>
    );
}

export default MainScreen;