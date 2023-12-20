import { configureStore } from '@reduxjs/toolkit';
import generalReducer from './slices/general';
import authReducer from './slices/auth';

const reducer = {
  general: generalReducer,
  auth: authReducer,
}

export const store = configureStore({
  reducer: reducer,
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
    }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch