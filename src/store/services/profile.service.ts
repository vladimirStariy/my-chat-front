import { AddFriendRequest } from "../models/profile";
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
    })
})

export const {
    useAddFriendMutation
} = profileAPI;