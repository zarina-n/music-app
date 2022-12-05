import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  tracks: null,
  currentTrack: null,
  favoriteTracks: null,
  playlistTracks: null,
  filteredTracks: null,
  filter: null,
  options: null,
  search: null,

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
    getFilteredTracks(state, action) {
      state.filteredTracks = action.payload
    },
    getCurrentTrack(state, action) {
      state.currentTrack = action.payload
    },
    getFavoriteTracks(state, action) {
      state.favoriteTracks = action.payload
    },
    getPlaylistTracks(state, action) {
      state.playlistTracks = action.payload
    },
    setFavoriteTrack(state, action) {
      state.tracks = state.tracks.map((track) =>
        track.id === action.payload
          ? { ...track, favorite: !track.favorite }
          : track
      )
    },
    setFilter(state, action) {
      const { option, filterBy } = action.payload
      state.filter = { option, filterBy }
    },
    setFilterOptions(state, action) {
      state.options = action.payload
    },

    setChosenFilterOption(state, action) {
      state.options = state.options.map((option) =>
        option.option === action.payload
          ? { ...option, chosen: true }
          : { ...option, chosen: false }
      )
    },
    resetFilter(state, action) {
      state.filter = null
    },
    setSearchedValue(state, action) {
      state.search = action.payload
    },
    resetSearchedValue(state, action) {
      state.search = null
    },
    shuffleFilteredTracks(state, action) {
      state.filteredTracks = [...state.filteredTracks].sort(
        () => Math.random() - 0.5
      )
    },
  },
})

export const {
  getTrackData,
  getFavoriteTracks,
  getCurrentTrack,
  getPlaylistTracks,
  setFavoriteTrack,
  setFilter,
  resetFilter,
  setFilterOptions,
  setSearchedValue,
  resetSearchedValue,
  setChosenFilterOption,
  setIsPlayingTrack,
  setIsNotPlayingTrack,
  getFilteredTracks,
  shuffleFilteredTracks,
} = trackSlice.actions

export default trackSlice.reducer

export const allTracks = (state) => state.track.tracks
