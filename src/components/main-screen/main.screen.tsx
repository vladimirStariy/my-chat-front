import { Avatar, Button, Card, CardBody, CardHeader, Input } from "@nextui-org/react";
import Sidebar from "../layout/sidebar/sidebar";

const MainScreen = () => {

    return (
        <>
            <div className="w-full flex flex-row gap-4">
                <div className="max-w-xs w-full relative">
                    <Sidebar />
                </div>
                <div className="w-full relative">
                    <Card className="w-full overflow-y-auto absolute top-0 bottom-0 pt-4 ">
                        <CardBody className="px-0 pt-0">
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
                            <div className="overflow-y-auto">
                                
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