import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {UserHoldingResponse} from '../stockHoldingTypes';
import {BASE_URL} from '../../../constants';

export const fetchUserHoldingAPI = createApi({
  reducerPath: 'fetchUserHoldingAPI',
  baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
  endpoints: builder => ({
    fetchHoldingsForUser: builder.query<UserHoldingResponse, string>({
      query: id => `${id}`,
    }),
  }),
});

export const {useFetchHoldingsForUserQuery} = fetchUserHoldingAPI;
