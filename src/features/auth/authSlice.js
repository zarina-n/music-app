import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { user: null, token: null, id: null },
  reducers: {
    signUp: (state, action) => {
      const { email, username, id } = action.payload;
      state.user = { email, username };
      state.id = id;
    },
    setLogin: (state, action) => {
      const { email, username } = action.payload;
      state.user = { email, username };
    },
    setToken: (state, action) => {
      const { access, refresh } = action.payload;
      state.token = { access, refresh };
    },
    logOut: (state, action) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setLogin, setToken, logOut, signUp } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentUser = (state) => state.auth.user;
export const selectCurrentToken = (state) => state.auth.token;
