import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import state, { addMessage, subscribe, updateNewMessage } from './redux/store';
import { addPost, updateNewComment, updateNewImage } from './redux/store';


let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={state}
        addPost={addPost}
        updateNewComment={updateNewComment}
        updateNewImage={updateNewImage}
        addMessage={addMessage}
        updateNewMessage={updateNewMessage}
      />
    </BrowserRouter>,
    document.getElementById('root')
  );
}
rerenderEntireTree(state);

subscribe(rerenderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
