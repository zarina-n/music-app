import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setLogin, logOut } from "../auth/authSlice";

const BASE_URL = "http://178.154.207.247:8000/";

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token;
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithReAuth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result?.error?.originalStatus === 403) {
    console.log("sending refresh token");

    const refreshResult = await baseQuery(
      "user/token/refresh",
      api,
      extraOptions
    );
    console.log(refreshResult);
    if (refreshResult?.data) {
      const user = api.getState().auth.user;
      api.dispatch(setLogin({ ...refreshResult, user }));

      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logOut);
    }
  }

  return result;
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithReAuth,
  endpoints: (builder) => ({}),
});

//     "id": 7,
//     "username": "zarina",
//     "first_name": "zarina",
//     "last_name": "z",
//     "email": "zarina.nnugmanova@gmail.com"
