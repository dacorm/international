import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from '../../axios';
import { Post } from '../../@types/serverType';

type PostsState = {
    posts: {
        items: Post[] | null,
        status: 'loading' | 'loaded' | 'error'
    }
}

export const fetchPosts = createAsyncThunk<Post[], undefined>('posts/fetchPosts', async () => {
    const { data } = await axios.get('/posts');
    return data;
});

export const fetchRemovePost = createAsyncThunk<Post[], string>(
    'posts/fetchRemovePosts',
    async (id) => axios.delete(`/posts/${id}`),
);

const initialState: PostsState = {
    posts: {
        items: [],
        status: 'loading',
    },
};

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchPosts.pending.toString()]: (state) => {
            state.posts.status = 'loading';
        },
        [fetchPosts.fulfilled.toString()]: (state, action: PayloadAction<Post[]>) => {
            state.posts.items = action.payload;
            state.posts.status = 'loaded';
        },
        [fetchPosts.rejected.toString()]: (state) => {
            state.posts.items = [];
            state.posts.status = 'error';
        },
        [fetchRemovePost.pending.toString()]: (state, action) => {
            state.posts.items = state!.posts!.items!.filter((obj) => obj._id !== action.meta.arg);
        },
    },
});

export const postsReducer = postsSlice.reducer;
