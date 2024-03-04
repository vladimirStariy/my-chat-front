import { AddFriendRequest } from "../models/profile";
import { apiSlice } from "../slices/apiSlice";

export const roomAPI = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        addFriend: build.mutation<void, AddFriendRequest>({
            query: (credentials) => ({
                url: 'profile/add-friend',
                method: 'POST',
                body: {...credentials}
            }),
        }),
    })
})

export const {
    useAddFriendMutation
} = roomAPI;