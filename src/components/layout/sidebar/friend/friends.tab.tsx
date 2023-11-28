import { Input } from "@nextui-org/react";
import FriendsCard from "./friend.card";

const FriendsTab = () => {
    return (
        <>
            <div className="flex flex-col gap-4">
                <Input 
                    variant="bordered"
                    placeholder="Search..."

                />
                <FriendsCard />
                <FriendsCard />
                <FriendsCard />
                <FriendsCard />
            </div>
        </>
    );
}

export default FriendsTab;