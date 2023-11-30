import Sidebar from "../layout/sidebar/sidebar";
import ChatScreen from "./chat.screen";

const MainScreen = () => {
    return (
        <>
            <div className="w-full h-full px-0 md:px-4 lg:px-0 flex flex-row gap-4">
                <div className="max-w-xs w-full relative hidden md:block">
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