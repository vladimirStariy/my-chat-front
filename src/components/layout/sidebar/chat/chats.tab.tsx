import { FC, useEffect, useState } from "react";
import ChatCard from "./chat.card";
import { useGetFriendsQuery } from "../../../../store/services/profile.service";

interface ChatsTabProps {
  handleChangeRoom: (room: string) => void;
}

const ChatsTab:FC<ChatsTabProps> = (props) => {
  const {data: friends} = useGetFriendsQuery({page: 1, limit: 10});
  
  return (
    <>
      <div className="flex flex-col gap-4">
        {friends && friends.length > 0 ? friends.map((item, index) => (
          <ChatCard 
            key={index} 
            username={item.username}
            room={item.roomId}
            usertag={item.usertag}
            handleChangeRoom={props.handleChangeRoom}
          />
        )) : <></>}
      </div>
    </>
  );
}

export default ChatsTab;