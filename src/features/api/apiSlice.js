import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { setAccessToken, logOut } from '../auth/authSlice'

const BASE_URL = 'https://painassasin.online/'

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  prepareHeaders: (headers, { getState }) => {
    const accessToken = getState().auth.access
    if (accessToken) {
      headers.set('authorization', `Bearer ${accessToken}`)
    }
    return headers
  },
})

const baseQueryWithReAuth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions)

  if (result?.error?.status === 401) {
    console.log('sending refresh token')
    const refreshToken = api.getState().auth.refresh

    const refreshResult = await baseQuery(
      {
        url: 'user/token/refresh/',
        method: 'POST',
        body: { refresh: refreshToken },
      },
      api,
      extraOptions
    )
    if (refreshResult?.data) {
      api.dispatch(setAccessToken(refreshResult.data.access))
      localStorage.setItem('access', refreshResult.data.access)

      result = await baseQuery(args, api, extraOptions)
    } else {
      api.dispatch(logOut())
    }
  }

  return result
}

export const apiSlice = createApi({
  baseQuery: baseQueryWithReAuth,
  refetchOnMountOrArgChange: true,
  endpoints: (builder) => ({}),
})
