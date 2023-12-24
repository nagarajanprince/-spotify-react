import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam.p.rapidapi.com/',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key','f1b0c9914emsh699513a5908e55dp1543e3jsn784bbfb0960f');
            return headers
        }
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({ query: () =>  '/charts/track' }),
        getSongDetails: builder.query({ query: ({ songid }) => `/shazam-songs/get-details?id=${songid}`})
    })
});

export const {
    useGetTopChartsQuery,
    useGetSongDetailsQuery
} = shazamCoreApi;