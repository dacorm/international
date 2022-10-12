import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./slices/auth";
import {postsReducer} from "./slices/posts";
import {playersReducer} from "./slices/players";

const store = configureStore({
    reducer: {
        auth: authReducer,
        posts: postsReducer,
        players: playersReducer
    }
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;