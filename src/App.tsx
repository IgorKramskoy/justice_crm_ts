import React, {useEffect} from 'react';
import './App.css';
import {fetchBeers} from "./actions/beerActions";
import {useAppDispatch, useAppSelector} from "./app/hooks";


function App() {
    const dispatch = useAppDispatch();
    const {beers} = useAppSelector(state => state.beer)
    useEffect(() => {
        dispatch(fetchBeers())
    }, [])
    return (
        <>
            {JSON.stringify(beers)}
        </>
    )
}

export default App;
