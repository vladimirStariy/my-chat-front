export interface AddFriendRequest {
    usertag: string;
}
export interface FriendRequests {
    usertag: string;
    name: string;
}
export interface FriendSolution {
    usertag: string;
}
export interface ProfileUserData {
  usertag: string;
  username: string;
}
export interface MyFriends {
  usertag: string;
  username: string;
  friendId: string;
  roomId: string;
}