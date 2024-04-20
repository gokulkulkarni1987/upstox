import {configureStore} from '@reduxjs/toolkit';
import {fetchUserHoldingAPI} from '../features/stock-holding/redux/StockHoldingService';

export const store = configureStore({
  reducer: {
    [fetchUserHoldingAPI.reducerPath]: fetchUserHoldingAPI.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(fetchUserHoldingAPI.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
