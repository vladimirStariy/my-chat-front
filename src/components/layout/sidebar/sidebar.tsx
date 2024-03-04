import { Card, CardBody, CardHeader, Input, Tab, Tabs } from "@nextui-org/react";
import ChatsTab from "./chat/chats.tab";
import FriendsTab from "./friend/friends.tab";
import { FC } from "react";
import FriendsRequestTab from "./friend-requests/friend.requests.tab";

interface SidebarProps {
    handleChangeRoom: (room: string) => void;
}

const Sidebar: FC<SidebarProps> = (props) => {
    return (
        <>
            <Card className="w-full overflow-y-auto absolute top-0 bottom-0 pt-4">
                <CardBody className="px-0 overflow-y-auto bg-white relative">
                    <Tabs 
                        size='lg'
                        variant="underlined" 
                        aria-label="Options" 
                        className="overflow-x-hidden overflow-y-auto absolute z-30 bg-white border-b-1 px-4 w-full drop-shadow-lg"
                        classNames={{
                            tabList: "pb-0 px-0",
                            panel: "mt-10 pt-10 px-4",
                            tab: "overflow-x-hidden"
                        }}
                    >
                        <Tab className="overflow-y-auto" key="chats" title="Chats">
                            <ChatsTab 
                                handleChangeRoom={props.handleChangeRoom}
                            />
                        </Tab>
                        <Tab className="overflow-y-auto" key="friends" title="Friends">
                            <FriendsTab />
                        </Tab>
                        <Tab className="overflow-y-auto" key="friendsReq" title="Requests">
                            <FriendsRequestTab />
                        </Tab>
                    </Tabs>
                </CardBody>
            </Card>
        </>
    );
}

export default Sidebar;