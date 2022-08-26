import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'

let postsData = [
  { id: 1, message: 'Hi, how are you?', likesCount: 4 },
  { id: 2, message: 'It is my first post', likesCount: 6 },
  { id: 3, message: 'How are you?', likesCount: 3 },
  { id: 4, message: 'It is me', likesCount: 10 }
]

let dialogsData = [
  {id: 1, name: 'Valera'},
  {id: 2, name: 'Andrew'},
  {id: 3, name: 'Sveta'},
  {id: 4, name: 'Viktor'}
]

let messagesData = [
  {id: 1, message: 'Yo'},
  {id: 2, message: 'Good luck!'},
  {id: 3, message: 'How are you?'},
  {id: 4, message: 'It is me'}
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

//
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

export {postsData, dialogsData, messagesData}