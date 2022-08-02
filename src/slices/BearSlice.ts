import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from '../app/store';
import {Bear} from "../models/Bear";


interface BearState {
    bears: Bear[];
    isLoading: boolean;
    error: string;
}

const initialState: BearState = {
    bears: [],
    isLoading: false,
    error: '',
}

export const bearSlice = createSlice({
    name: 'bear',
    initialState,
    reducers: {
        fetching(state) {
            state.isLoading = true
        },
        fetchSuccess(state, action: PayloadAction<Bear[]>) {
            state.isLoading = false
            state.bears = action.payload
        },
        fetchError(state, action: PayloadAction<Error>) {
            state.isLoading = false
            state.error = action.payload.message
        }
    }
})

export const {fetching, fetchSuccess, fetchError} = bearSlice.actions;
export const selectBear = (state: RootState) => state.bear.bears;
export default bearSlice.reducer;