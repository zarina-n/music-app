import { apiSlice } from "../api/apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    signUserUp: builder.mutation({
      query: (credentials) => ({
        url: "/user/signup/",
        method: "POST",
        body: { ...credentials },
      }),
    }),
    getUser: builder.mutation({
      query: (credentials) => ({
        url: "/user/login/",
        method: "POST",
        body: { ...credentials },
      }),
    }),
    getToken: builder.mutation({
      query: (credentials) => ({
        url: "/user/token/",
        method: "POST",
        body: { ...credentials },
      }),
    }),
  }),
});

export const {
  useGetUserMutation,
  useGetTokenMutation,
  useSignUserUpMutation,
} = authApiSlice;
