import {Dispatch} from "@reduxjs/toolkit";
import axios from "axios";

import {Beer} from "../models/Beer";
import {beerSlice} from "../slices/BearSlice";

export const fetchBeers = () => {
    return async (dispatch: Dispatch) => {
        try {
            dispatch(beerSlice.actions.fetching);
            const response = await axios.get<Beer[]>('https://api.punkapi.com/v2/beers');
            dispatch(beerSlice.actions.fetchSuccess(response.data));
        } catch (e) {
            dispatch(beerSlice.actions.fetchError(e as Error))
        }
    }
}