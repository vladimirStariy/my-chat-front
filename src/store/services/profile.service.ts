import { AddFriendRequest, FriendRequests, FriendSolution, MyFriends, ProfileUserData } from "../models/profile";
import { apiSlice } from "../slices/apiSlice";

export const profileAPI = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        getProfileUserData: build.mutation<ProfileUserData, void>({
          query: () => ({
            url: 'profile/profile',
            method: 'GET'
          }),
        }), 
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
        getFriends: build.query<MyFriends[], {page: number, limit: number}>({
          query: ({page, limit}) => ({
            url: `profile/friends?page=${page}&limit=${limit}`,
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
  useGetFriendsQuery,
  useGetProfileUserDataMutation
} = profileAPI;