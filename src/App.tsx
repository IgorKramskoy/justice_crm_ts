import React, {useEffect} from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import {fetchBeers} from "./actions/beerActions";
import {useAppDispatch, useAppSelector} from "./app/hooks";
import { Wrapper } from './Components/Common/Wrapper';
import { routes } from './routes';

function App() {
    const dispatch = useAppDispatch();
    const {beers} = useAppSelector(state => state.beer);
    console.log(beers);
    useEffect(() => {
        dispatch(fetchBeers())
    }, [])
    return (
        <div className="App">
            <Wrapper>
                <Routes>
                    {routes.map(({path, element}) => (
                        <Route key={path} path={path} element={element}/>
                    ))}
                </Routes>
            </Wrapper>
        </div>
    )
}

export default App;
