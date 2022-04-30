import './App.css';
import NavBar from './NavBar'
import React from 'react';
import Home from './Home';
import Socials from './Socials';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
const App = () => {
return (
    <div class="App">
        <NavBar/>
        <div className="bodycon">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
        <Socials/>
    </div>
)
}

export default App;
