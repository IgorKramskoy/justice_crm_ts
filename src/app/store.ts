import {configureStore, combineReducers} from '@reduxjs/toolkit';
import beerReducer from '../slices/BearSlice';

const rootReducer = combineReducers({
  beer: beerReducer
});

export function setupStore() {
  return configureStore({
    reducer: rootReducer
  })
}


export  type  RootState = ReturnType<typeof rootReducer>;
export  type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];