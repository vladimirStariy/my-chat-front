import { useGetFriendsRequestsQuery } from "../../../../store/services/profile.service";
import FriendRequestCard from "./friend.request.card";

const FriendsRequestTab = () => {
    const { data: friendsRequests, refetch } = useGetFriendsRequestsQuery();

    return (
        <>
            <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-4 overflow-y-auto">
                    {friendsRequests && friendsRequests.length > 0 ? friendsRequests.map((item, index) => (
                        <FriendRequestCard 
                            username={item.name}
                            usertag={item.usertag}
                            refetch={refetch}
                        />
                    )) : <div className="w-full text-center tracking-tight text-default-400">
                        Theres no friend requests
                    </div>}
                </div>
            </div>
        </>
    );
}

export default FriendsRequestTab;