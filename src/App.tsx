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
import state, {addPost, addMessage} from './redux/state'


function App() {


    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Nav/>
                <div className='app-wrapper-content'>
                    <Route path='/profile' render={() => <Profile posts={state.profilePage.posts} addPost={addPost}/> } />
                    <Route path='/dialogs' render={() => <Dialogs dialogs={state.dialogsPage.dialogs} messages={state.dialogsPage.messages} addMessage={addMessage}/> } />
                    <Route path='/news' render={() => <News/> } />
                    <Route path='/music' render={() => <Music/> } />
                    <Route path='/settings' render={() => <Settings/> } />
                </div>

            </div>
        </BrowserRouter>
    );
}

export default App;
