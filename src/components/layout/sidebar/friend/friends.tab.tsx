import { Button, Input } from "@nextui-org/react";
import FriendsCard from "./friend.card";
import { useAddFriendMutation } from "../../../../store/services/profile.service";

const FriendsTab = () => {
    const [addFriend] = useAddFriendMutation();

    const handleAddFriend = async () => {
        addFriend({usertag: 'tag'});
    }

    return (
        <>
            <div className="flex flex-col gap-4">
                <Button onClick={handleAddFriend}>Kek</Button>
                <div className="flex flex-col gap-4 overflow-y-auto">
                    <FriendsCard />
                    <FriendsCard />
                    <FriendsCard />
                    <FriendsCard />
                    <FriendsCard />
                    <FriendsCard />
                    <FriendsCard />
                    <FriendsCard />
                    <FriendsCard />
                    <FriendsCard />
                    <FriendsCard />
                    <FriendsCard />
                    <FriendsCard />
                    <FriendsCard />
                    <FriendsCard />
                    <FriendsCard />
                    <FriendsCard />
                    <FriendsCard />
                    <FriendsCard />
                    <FriendsCard />
                </div>
            </div>
        </>
    );
}

export default FriendsTab;