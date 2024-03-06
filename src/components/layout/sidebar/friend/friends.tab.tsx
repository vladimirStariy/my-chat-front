import { Button, Input } from "@nextui-org/react";
import FriendsCard from "./friend.card";
import { useAddFriendMutation, useGetFriendsQuery, useSearchProfileByUsertagMutation } from "../../../../store/services/profile.service";
import { useEffect, useState } from "react";
import { ProfileUserData } from "../../../../store/models/profile";

interface SearchDto {
  username: string;
  usertag: string;
}

const FriendsTab = () => {
  const [searchByUsertag] = useSearchProfileByUsertagMutation();
  const [searchInput, setSearchInput] = useState<string>("");
  const [searchResulsts, setSearchResults] = useState<ProfileUserData[]>([]);

  const handleSearchByUsertag = async () => {
    if(searchInput.length > 0) {
      const users = await searchByUsertag(searchInput).unwrap();
      setSearchResults([users]);
    }
  }

  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="flex flex-row gap-2">
          <Input onChange={(e) => setSearchInput(e.target.value)} variant="bordered" placeholder="Search by usertag..." />
          <Button onClick={handleSearchByUsertag} variant="bordered">search</Button>
        </div>
        <div className="flex flex-col gap-4 overflow-y-auto">
          {searchResulsts ? searchResulsts.map((item, index) => (
            <FriendsCard 
              key={index} 
              username={item.username}
              usertag={item.usertag}
            />
          )) : <></>}
        </div>
      </div>
    </>
  );
}
export default FriendsTab;