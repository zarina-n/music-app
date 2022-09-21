import { apiSlice } from "../api/apiSlice";

export const trackApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllTracks: builder.query({
      query: () => "/catalog/track/all/",
    }),
  }),
});

export const { useGetAllTracksQuery } = trackApiSlice;
