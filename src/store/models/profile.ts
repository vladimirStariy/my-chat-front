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

export interface MyFriends {
    usertag: string;
    name: string;
    room: string;
}