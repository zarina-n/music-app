import { createSlice } from '@reduxjs/toolkit'

const initialState = { user: null, access: null, refresh: null }

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    signUp: (state, action) => {
      const { email, username } = action.payload
      state.user = { email, username }
    },
    setUser: (state, action) => {
      const { email, username } = action.payload
      state.user = { email, username }
    },
    setAccessToken: (state, action) => {
      state.access = action.payload
    },
    setRefreshToken: (state, action) => {
      state.refresh = action.payload
    },
    logOut: (state, action) => {
      state.user = null
      state.token = null
    },
  },
})

export const { setUser, logOut, signUp, setAccessToken, setRefreshToken } =
  authSlice.actions

export default authSlice.reducer

export const selectCurrentUser = (state) => state.auth.user
