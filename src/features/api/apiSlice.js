import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { setUser, logOut } from '../auth/authSlice'

const BASE_URL = 'http://51.250.95.23:8000/'

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
})

const baseQueryWithReAuth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions)

  if (result?.error?.originalStatus === 403) {
    console.log('sending refresh token')

    const refreshResult = await baseQuery(
      'user/token/refresh',
      api,
      extraOptions
    )
    console.log(refreshResult)
    if (refreshResult?.data) {
      const user = api.getState().auth.user
      api.dispatch(setUser({ ...refreshResult, user }))

      result = await baseQuery(args, api, extraOptions)
    } else {
      api.dispatch(logOut)
    }
  }

  return result
}

export const apiSlice = createApi({
  baseQuery: baseQueryWithReAuth,
  endpoints: (builder) => ({}),
})
