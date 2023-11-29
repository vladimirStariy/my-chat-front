import { Card, CardBody, CardHeader, Input, Avatar } from "@nextui-org/react";

const ChatCard = () => {
    return (
        <>
            <Card shadow="sm" className="overflow-y-hidden">
                <CardBody>
                    <div className="flex flex-row gap-4">
                        <Avatar 
                            name="friend"
                            size="lg"
                        />
                        <div>
                            Chat name
                        </div>
                    </div>
                </CardBody>
            </Card>
        </>
    );
}

export default ChatCard;