import { createSlice } from '@reduxjs/toolkit'

const trackSlice = createSlice({
  name: 'tracks',
  initialState: { track: null },
  reducers: {
    getTrackData(state, action) {
      state.track = action.payload
    },
  },
})

export const { getTrackData } = trackSlice.actions

export default trackSlice.reducer

export const selectCurrentTrack = (state) => state.track.track
