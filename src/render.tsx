import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


export const rerenderEntireTree = () => {
    ReactDOM.render(
        <App/>,
        document.getElementById('root')
    );
}




