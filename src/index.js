import React from "react";

import  ReactDOM  from "react-dom";

import App from './App'; 

import HomePage from "./HomePage";

import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    
    <BrowserRouter>
        {/* <App /> */}
        <HomePage />
    </BrowserRouter>
    
    
    
);