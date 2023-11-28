import { Avatar, Button, Card, CardBody, CardHeader, Input } from "@nextui-org/react";
import { DotsIcon } from "../../../icons/icons";

const FriendsCard = () => {
    return (
        <>
        <Card shadow='none'>
            <CardBody className="p-0">
                <div className="flex flex-row justify-between">
                    <div className="flex flex-row gap-4 items-center">
                        <Avatar 
                            name="friend"
                            size="lg"
                        />
                        <div className="flex flex-col gap-1 items-start justify-center">
                            <h4 className="font-semibold leading-none text-default-600">Friend name</h4>
                            <h5 className="text-small tracking-tight text-default-400">@tag</h5>
                        </div>
                    </div>
                    <Button className="p-0 w-8" variant="light">
                        <DotsIcon />
                    </Button>
                </div>
            </CardBody>
        </Card>
        </>
    );
}

export default FriendsCard;