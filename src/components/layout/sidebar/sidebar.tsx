import { Card, CardBody, CardHeader, Input, Tab, Tabs } from "@nextui-org/react";
import ChatsTab from "./chat/chats.tab";
import FriendsTab from "./friend/friends.tab";

const Sidebar = () => {
    return (
        <>
            <Card>
                <CardBody>
                    <Tabs size="lg" variant="underlined" aria-label="Options" className="pb-0 px-0 w-full">
                        <Tab key="chats" title="Chats">
                            <ChatsTab />
                        </Tab>
                        <Tab key="friends" title="Friends">
                            <FriendsTab />
                        </Tab>
                    </Tabs>
                </CardBody>
            </Card>
        </>
    );
}

export default Sidebar;