import { createSlice } from '@reduxjs/toolkit'

const initialState = { tracks: null, favorites: null }

const trackSlice = createSlice({
  name: 'tracks',
  initialState: initialState,
  reducers: {
    getTrackData(state, action) {
      state.tracks = action.payload
    },
    setFavoriteTrack(state, action) {
      const { favoriteTrack } = action.payload
      state.favorites = { favoriteTrack }
    },
  },
})

export const { getTrackData, setFavoriteTrack } = trackSlice.actions

export default trackSlice.reducer

export const selectAllTracks = (state) => state.track.tracks
