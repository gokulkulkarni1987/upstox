import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from 'redux-persist';
import {fetchUserHoldingAPI} from '../features/stock-holding/redux/StockHoldingService';
import {reduxStorage} from '../utils/StorageService';

const reducers = combineReducers({
  [fetchUserHoldingAPI.reducerPath]: fetchUserHoldingAPI.reducer,
});

const persistConfig = {
  key: 'root',
  version: 1,
  storage: reduxStorage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      // Redux persist
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(fetchUserHoldingAPI.middleware),
});

export let persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
