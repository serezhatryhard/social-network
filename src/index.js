import reportWebVitals from './reportWebVitals';
<<<<<<< HEAD
<<<<<<< HEAD
import state, { subscribe } from './redux/state'
=======
import state, {subscribe} from './redux/state'
>>>>>>> test
=======
import store from './redux/state'
>>>>>>> test
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
<<<<<<< HEAD
<<<<<<< HEAD

import { addPost, updateNewPostText } from './redux/state';
=======
import { addPost, updateNewPostText } from './redux/state';
=======
>>>>>>> test

const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderEntireTree = (state) => {
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} addPost={store.addPost.bind(store)} updateNewPostText={store.updateNewPostText.bind(store)} />
            </BrowserRouter>
        </React.StrictMode>
    );
}
>>>>>>> test

const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderEntireTree = (state) => {
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} />
            </BrowserRouter>
        </React.StrictMode>
    );
}

rerenderEntireTree(store.getState())
store.subscribe(rerenderEntireTree)

//
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

