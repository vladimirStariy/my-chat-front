import { ILoginRequest, ILoginResponse, IRegisterRequest, IRegisterResponse } from "../models/auth";
import { apiSlice } from "../slices/apiSlice";

export const authAPI = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        signin: build.mutation<ILoginResponse, ILoginRequest>({
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
        refresh: build.query<ILoginResponse, void>({
            query: () => ({
                url: 'auth/refresh',
                method: 'GET',
            })
        }),
        logout: build.mutation<void, void>({
            query: () => ({
                url: 'auth/logout',
                method: 'GET'
            })
        })
    })
})

export const {
    useSigninMutation,
    useSignupMutation,
    useRefreshQuery,
    useLogoutMutation
} = authAPI;