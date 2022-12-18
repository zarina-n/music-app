import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { setUser, logOut } from '../auth/authSlice'

const BASE_URL = 'https://painassasin.online/'

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token?.access
    if (token) {
      headers.set('authorization', `Bearer ${token}`)
    }
    return headers
  },
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
  refetchOnMountOrArgChange: true,
  endpoints: (builder) => ({}),
})
