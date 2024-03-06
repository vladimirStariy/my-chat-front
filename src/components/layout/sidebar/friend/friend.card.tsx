import { Avatar, Button, Card, CardBody, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Input } from "@nextui-org/react";
import { DotsIcon } from "../../../icons/icons";
import { FC } from "react";
import { useAddFriendMutation } from "../../../../store/services/profile.service";

interface FriendsCardProps {
  username: string;
  usertag: string;
}

const FriendsCard: FC<FriendsCardProps> = (props) => {
  const [addFriend, {isSuccess}] = useAddFriendMutation();

  const handleAddFriend = async () => {
    const response = await addFriend({friendUsertag: props.usertag})
  } 

  return (
    <>
      <Card shadow='none'>
        <CardBody className="p-0">
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row gap-4 items-center">
              <Avatar 
                name="friend"
                size="lg"
              />
              <div className="flex flex-col gap-1 items-start justify-center">
                <h4 className="font-semibold leading-none text-default-600">{props.username}</h4>
                <h5 className="text-small tracking-tight text-default-400">@tag</h5>
              </div>
            </div>
            <Button onClick={handleAddFriend}>Add</Button>                    
          </div>
        </CardBody>
      </Card>
    </>
  );
}
export default FriendsCard;