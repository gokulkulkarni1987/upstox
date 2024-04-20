import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {UserHoldingResponse} from '../stockHoldingTypes';

export const fetchUserHoldingAPI = createApi({
  reducerPath: 'fetchUserHoldingAPI',
  baseQuery: fetchBaseQuery({baseUrl: 'https://run.mocky.io/v3/'}),
  endpoints: builder => ({
    fetchHoldingsForUser: builder.query<UserHoldingResponse, string>({
      query: id => `${id}`,
    }),
  }),
});

export const {useFetchHoldingsForUserQuery} = fetchUserHoldingAPI;
