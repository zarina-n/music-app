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
  }),
})

export const {
  useGetAllTracksQuery,
  useGetTrackByIdMutation,
  useGetCompilationByIdQuery,
} = trackApiSlice

// setFavoriteTrack:builder.mutation({
//   query: (id) =>
// })
