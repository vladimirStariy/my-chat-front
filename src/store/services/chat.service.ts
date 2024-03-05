import { ILoginRequest, ILoginResponse, IRegisterRequest, IRegisterResponse } from "../models/auth";
import { IMessagesRequest, IMessagesResponse } from "../models/chat";
import { apiSlice } from "../slices/apiSlice";

export const chatAPI = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getMessages: build.query<IMessagesResponse[], IMessagesRequest>({
      query: ({chatRoomId, page, limit}) => ({
        url: `chat/messages?chatRoomId=${chatRoomId}&page=${page}&limit=${limit}`,
        method: 'GET',
      })
    }),
  })
})

export const {
  useGetMessagesQuery
} = chatAPI;