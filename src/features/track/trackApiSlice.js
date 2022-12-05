import { apiSlice } from '../api/apiSlice'

export const trackApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllTracks: builder.query({
      query: () => '/catalog/track/all/',
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
  useGetCompilationByIdQuery,
  useGetFavoriteTracksQuery,
  useAddFavoriteTrackMutation,
  useDeleteFavoriteTrackMutation,
} = trackApiSlice
