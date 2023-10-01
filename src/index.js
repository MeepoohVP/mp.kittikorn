import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Menu from './js/Menu';
import App from './App';
import reportWebVitals from './reportWebVitals';
import About from './js/About';
import Project from './js/Project';
import Contact from './js/Contact';
import Footer from './js/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Menu /><About /><Project /><Contact /><Footer/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
