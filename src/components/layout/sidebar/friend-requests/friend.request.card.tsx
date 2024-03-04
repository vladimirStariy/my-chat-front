import { Avatar, Button, Card, CardBody, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Input } from "@nextui-org/react";
import { AcceptIcon, CrossIcon, DotsIcon } from "../../../icons/icons";
import { FC } from "react";
import { useAcceptFriendsRequestMutation, useRejectFriendsRequestMutation } from "../../../../store/services/profile.service";

interface FriendRequestCardProps {
    usertag: string;
    username: string;
    refetch: () => void;
}

const FriendRequestCard: FC<FriendRequestCardProps> = (props) => {
    const [acceptFriend] = useAcceptFriendsRequestMutation();
    const [rejectFriend] = useRejectFriendsRequestMutation();

    const handleAcceptRequest = async () => {
        const response = await acceptFriend({usertag: props.usertag}).unwrap()
        props.refetch();
    }

    const handleRejectRequest = async () => {
        const response = await rejectFriend({usertag: props.usertag}).unwrap()
        props.refetch();
    }

    return (
        <>
        <Card shadow='none'>
            <CardBody className="p-0">
                <div className="flex flex-row items-center justify-between overflow-hidden ">
                    <div className="flex flex-row relative w-full gap-4 items-center justify-between ">
                        <div className="flex flex-row gap-4">
                            <Avatar 
                                name={props.username}
                                size="lg"
                            />
                            <div className="flex flex-col gap-1 items-start justify-center">
                                <h4 className="font-semibold leading-none text-default-600">{props.username}</h4>
                            </div>
                        </div>
                        <div className="flex flex-row items-center gap-2">
                            <Button onClick={handleAcceptRequest} className="p-0 min-w-8 w-8 h-8" radius='full' variant='light'>
                                <AcceptIcon />
                            </Button>
                            <Button onClick={handleRejectRequest} className="p-0 min-w-8 w-8 h-8" radius='full' variant='light'>
                                <CrossIcon />
                            </Button>
                        </div>
                    </div>
                </div>
            </CardBody>
        </Card>
        </>
    );
}

export default FriendRequestCard;