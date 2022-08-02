import React from 'react';
import './App.css';
import {
    useAppSelector,
    // useAppDispatch
} from './app/hooks';
// import {
//   fetching,
//   fetchSuccess,
//   fetchError,
//   selectBear,
// } from './slices/BearSlice';


function App() {
  const {bears, error, isLoading} = useAppSelector(state => state.bear);
  // const dispatch = useAppDispatch();
  console.log(bears, error, isLoading)
  return (
      <>
      </>
  )


}

export default App;
