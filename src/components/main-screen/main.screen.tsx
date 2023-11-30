import { Avatar, Button, Card, CardBody, CardHeader, Input } from "@nextui-org/react";
import Sidebar from "../layout/sidebar/sidebar";
import MessageBubble from "./message.buble";
import NavigationBar from "../layout/navbar/navbar";

const MainScreen = () => {

    return (
        <>
            <div className="w-full h-full flex flex-row gap-4">
                <div className="max-w-xs w-full relative">
                    <Sidebar />
                </div>
                <div className="w-full relative">
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
                                    <MessageBubble
                                        isMine={false}
                                        text="Im fine"
                                    />
                                    <MessageBubble
                                        isMine={false}
                                        text="Wannd go home and drink some beer today, dont you?"
                                    />
                                    <MessageBubble
                                        isMine={true}
                                        text="Nah, i dont like beer, better call Tikhomirova"
                                    />
                                    <MessageBubble
                                        isMine={false}
                                        text="Fuck you asshole"
                                    />
                                    <MessageBubble
                                        isMine={false}
                                        text="Fuck you asshole"
                                    />
                                    <MessageBubble
                                        isMine={false}
                                        text="Fuck you asshole"
                                    />
                                    <MessageBubble
                                        isMine={false}
                                        text="Fuck you asshole"
                                    />
                                    <MessageBubble
                                        isMine={false}
                                        text="Fuck you asshole"
                                    />
                                    <MessageBubble
                                        isMine={false}
                                        text="Fuck you asshole"
                                    />
                                    <MessageBubble
                                        isMine={true}
                                        text="No, fuck you"
                                    />
                                    <MessageBubble
                                        isMine={true}
                                        text="Fuck you"
                                    />
                                    <MessageBubble
                                        isMine={true}
                                        text="Fuck you"
                                    />
                                    <MessageBubble
                                        isMine={true}
                                        text="Fuck you"
                                    />
                                </div>
                            </div>
                            <div className="w-full px-8 py-4 border-t-1 absolute bottom-0">
                                <div className="flex gap-4">
                                    <Input 
                                        size='sm' 
                                        variant='bordered'
                                        placeholder='Write your message...'
                                    />
                                    <Button 
                                        className="h-12"
                                        size='md'
                                        variant='bordered'
                                    >
                                        Send 
                                    </Button>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </>
    );
        
}

export default MainScreen;