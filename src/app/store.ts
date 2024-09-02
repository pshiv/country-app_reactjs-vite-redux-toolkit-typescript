import { configureStore } from "@reduxjs/toolkit";
import countrySlice from "../features/countryDashboardSlice"

const store = configureStore({
    reducer:{
        countryData: countrySlice
    }
})

export default store
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch