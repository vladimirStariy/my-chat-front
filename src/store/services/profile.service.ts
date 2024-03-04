import { AddFriendRequest, FriendRequests, FriendSolution, MyFriends } from "../models/profile";
import { apiSlice } from "../slices/apiSlice";

export const profileAPI = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        addFriend: build.mutation<void, AddFriendRequest>({
            query: (credentials) => ({
                url: 'profile/add-friend',
                method: 'POST',
                body: {...credentials}
            }),
        }),
        getFriendsRequests: build.query<FriendRequests[], void>({
            query: () => ({
                url: 'profile/friend-requests',
                method: 'GET',
            })
        }),
        acceptFriendsRequest: build.mutation<string, FriendSolution>({
            query: (credentials) => ({
                url: 'profile/accept-friend',
                method: 'POST',
                body: {...credentials}
            }),
        }),
        rejectFriendsRequest: build.mutation<string, FriendSolution>({
            query: (credentials) => ({
                url: 'profile/reject-friend',
                method: 'POST',
                body: {...credentials}
            }),
        }),
        getFriends: build.query<MyFriends[], void>({
            query: () => ({
                url: 'profile/my-friends',
                method: 'GET',
            })
        }),
    })
})

export const {
    useAddFriendMutation,
    useGetFriendsRequestsQuery,
    useAcceptFriendsRequestMutation,
    useRejectFriendsRequestMutation,
    useGetFriendsQuery
} = profileAPI;