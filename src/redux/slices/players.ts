import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { PlayerI } from '../../@types/serverType';

type playersState = {
    players: {
        items: PlayerI[] | null,
        status: 'loading' | 'loaded' | 'error'
    }
}

export const fetchPlayers = createAsyncThunk<PlayerI[], number>('players/fetchPlayers', async (id: number) => {
    const { data } = await axios
        .get(`https://api.opendota.com/api/players/${id}?api_key=de6dcb55-631f-474f-9c19-f98d5d016e96`);
    return data;
});

const initialState: playersState = {
    players: {
        items: [],
        status: 'loading',
    },
};

const playersSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchPlayers.pending.toString()]: (state) => {
            state.players.status = 'loading';
        },
        [fetchPlayers.fulfilled.toString()]: (state, action: PayloadAction<PlayerI[]>) => {
            state.players.items = state!.players!.items!.concat(action.payload);
            state.players.status = 'loaded';
        },
        [fetchPlayers.rejected.toString()]: (state) => {
            state.players.items = [];
            state.players.status = 'error';
        },
    },
});

export const selectPlayers = (state: any) => state.players.items;
export const playersReducer = playersSlice.reducer;
