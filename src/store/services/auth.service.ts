import { ILoginRequest, ILoginResponse, IRegisterRequest, IRegisterResponse } from "../models/auth";
import { apiSlice } from "../slices/apiSlice";

export const authAPI = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    signin: build.mutation<string, ILoginRequest>({
      query: (credentials) => ({
        url: 'auth/login',
        method: 'POST',
        body: {...credentials}
      }),
    }),
    signup: build.mutation<IRegisterResponse, IRegisterRequest>({
      query: (credentials) => ({
        url: 'auth/register',
        method: 'POST',
        body: {...credentials}
      }),
    }),
    refresh: build.query<string, void>({
      query: () => ({
        url: 'auth/refresh',
        method: 'GET',
      })
    }),
    refreshMutation: build.mutation<string, void>({
      query: () => ({
        url: 'auth/refresh',
        method: 'GET',
      })
    }),
    logout: build.mutation<void, void>({
      query: () => ({
        url: 'auth/logout',
        method: 'POST'
      })
    })
  })
})

export const {
  useSigninMutation,
  useSignupMutation,
  useRefreshQuery,
  useLogoutMutation,
  useRefreshMutationMutation
} = authAPI;