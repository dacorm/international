import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from '../../axios';

export type dataType = {
    fullName?: string,
    email: string,
    password: string,
}

type AuthState = {
    data: dataType | null,
    status: 'loading' | 'loaded' | 'error'
}

export const fetchAuth = createAsyncThunk<dataType, dataType>('auth/fetchAuth', async (params) => {
    const { data } = await axios.post('/auth/login', params);
    return data;
});

export const fetchAuthMe = createAsyncThunk<dataType, undefined>('auth/fetchAuthMe', async (params) => {
    const { data } = await axios.get('/auth/me');
    return data;
});

export const fetchRegister = createAsyncThunk<dataType, dataType>('auth/fetchRegister', async (params) => {
    const { data } = await axios.post('/auth/register', params);
    return data;
});

const initialState: AuthState = {
    data: null,
    status: 'loading',
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.data = null;
        },
    },
    extraReducers: {
        [fetchAuth.pending.toString()]: (state) => {
            state.status = 'loading';
            state.data = null;
        },
        [fetchAuth.fulfilled.toString()]: (state, action: PayloadAction<dataType>) => {
            state.status = 'loaded';
            state.data = action.payload;
        },
        [fetchAuth.rejected.toString()]: (state) => {
            state.status = 'error';
            state.data = null;
        },
        [fetchAuthMe.pending.toString()]: (state) => {
            state.status = 'loading';
            state.data = null;
        },
        [fetchAuthMe.fulfilled.toString()]: (state, action: PayloadAction<dataType>) => {
            state.status = 'loaded';
            state.data = action.payload;
        },
        [fetchAuthMe.rejected.toString()]: (state) => {
            state.status = 'error';
            state.data = null;
        },
        [fetchRegister.pending.toString()]: (state) => {
            state.status = 'loading';
            state.data = null;
        },
        [fetchRegister.fulfilled.toString()]: (state, action: PayloadAction<dataType>) => {
            state.status = 'loaded';
            state.data = action.payload;
        },
        [fetchRegister.rejected.toString()]: (state) => {
            state.status = 'error';
            state.data = null;
        },

    },
});

export const selectIsAuth = (state: any) => Boolean(state.auth.data);
export const selectName = (state: any) => state.auth.data;

export const authReducer = authSlice.reducer;

export const { logout } = authSlice.actions;
