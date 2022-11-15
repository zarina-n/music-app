import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  tracks: null,
  currentTrack: null,
  // genres: null,
  // // genres: { filterBy: 'исполнителю', id: 1, options: [], clicked: false },
  // filtered: [
  //   { filterBy: 'исполнителю', id: 1, authors: [], clicked: false },
  //   {
  //     filterBy: 'году выпуска',
  //     id: 2,
  //     years: ['Более новые', 'Более старые'],
  //     clicked: false,
  //   },
  //   { filterBy: 'жанру', id: 3, genres: [], clicked: false },
  // ],

  playlists: [
    {
      imgSrc: '/img/playlist01.png',
      alt: "day's playlist",
      id: 1,
      name: 'Плейлист дня',
    },
    {
      imgSrc: '/img/playlist02.png',
      alt: "day's playlist",
      id: 2,
      name: '100 танцевальных хитов',
    },
    {
      imgSrc: '/img/playlist03.png',
      alt: "day's playlist",
      id: 3,
      name: 'Инди заряд',
    },
  ],
}

const trackSlice = createSlice({
  name: 'tracks',
  initialState: initialState,
  reducers: {
    getTrackData(state, action) {
      state.tracks = action.payload
    },
    getCurrentTrack(state, action) {
      state.currentTrack = action.payload
    },
    getFavoriteTracks(state, action) {
      state.favorites = action.payload
    },
    getFilteredTracksByGenre(state, action) {
      state.genres = action.payload
    },
  },
})

export const {
  getTrackData,
  getFavoriteTracks,
  getFilteredTracksByGenre,
  getCurrentTrack,
} = trackSlice.actions

export default trackSlice.reducer

export const allTracks = (state) => state.track.tracks
