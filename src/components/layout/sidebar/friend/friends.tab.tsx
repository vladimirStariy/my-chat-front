import { Button, Input } from "@nextui-org/react";
import FriendsCard from "./friend.card";
import { useAddFriendMutation, useGetFriendsQuery } from "../../../../store/services/profile.service";

const FriendsTab = () => {
    const [addFriend] = useAddFriendMutation();
    const {data: friends} = useGetFriendsQuery();

    const handleAddFriend = async () => {
        addFriend({usertag: 'tag'});
    }

    return (
        <>
            <div className="flex flex-col gap-4">
                <Input variant="bordered" placeholder="Search by usertag..." />
                <div className="flex flex-col gap-4 overflow-y-auto">
                    {friends && friends.length > 0 ? friends.map((item, index) => (
                        <FriendsCard 
                            key={index} 
                            username={item.name}
                            room={item.room}
                            usertag={item.usertag}
                        />
                    )) : <>

                    </>}
                </div>
            </div>
        </>
    );
}

export default FriendsTab;