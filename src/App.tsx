import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from 'react-router-dom';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";


function App() {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Nav/>
                <div className='app-wrapper-content'>

                    <Route component={Profile} path='/profile'/>
                    <Route component={Dialogs} path='/dialogs'/>
                    <Route component={News} path='/news'/>
                    <Route component={Music} path='/music'/>
                    <Route component={Settings} path='/settings'/>

                </div>

            </div>
        </BrowserRouter>
    );
}

export default App;
