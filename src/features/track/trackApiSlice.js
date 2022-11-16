import { apiSlice } from '../api/apiSlice'

export const trackApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllTracks: builder.query({
      query: () => '/catalog/track/all/',
    }),
    getTrackById: builder.mutation({
      query: (id) => `/catalog/track/${id}`,
    }),
    getCompilationById: builder.query({
      query: (id) => `/catalog/selection/${id}`,
    }),
    getFavoriteTracks: builder.query({
      query: () => `catalog/track/favorite/all/`,
    }),
    addFavoriteTrack: builder.mutation({
      query: (id) => ({
        url: `catalog/track/${id}/favorite/`,
        method: 'POST',
      }),
    }),
    deleteFavoriteTrack: builder.mutation({
      query: (id) => ({
        url: `catalog/track/${id}/favorite/`,
        method: 'DELETE',
      }),
    }),
  }),
})

export const {
  useGetAllTracksQuery,
  useGetTrackByIdMutation,
  useGetCompilationByIdQuery,
  useGetFavoriteTracksQuery,
  useAddFavoriteTrackMutation,
  useDeleteFavoriteTrackMutation,
} = trackApiSlice
