import {createSlice, PayloadAction} from "@reduxjs/toolkit";

import {Beer} from "../models/Beer";

interface BeerState {
    beers: Beer[];
    isLoading: boolean;
    error: string;
}

const initialState: BeerState = {
    beers: [],
    isLoading: false,
    error: '',
};

export const beerSlice = createSlice({
    name: 'beer',
    initialState,
    reducers: {
        fetching(state) {
            state.isLoading = true
        },
        fetchSuccess(state, action: PayloadAction<Beer[]>) {
            state.isLoading = false
            state.beers = action.payload
        },
        fetchError(state, action: PayloadAction<Error>) {
            state.isLoading = false
            state.error = action.payload.message
        }
    }
});

export default beerSlice.reducer;