import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./slices/auth";
import {postsReducer} from "./slices/posts";

const store = configureStore({
    reducer: {
        auth: authReducer,
        posts: postsReducer,
    }
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;