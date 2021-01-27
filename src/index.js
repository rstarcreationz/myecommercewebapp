import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import './index.css';
import App from './App';
import swDev from './swDev';
import Footer from './components/Footer';
import { Provider } from "react-redux";
import rootReducer from './Redux/index';
import {createStore} from 'redux';

const store=createStore(rootReducer)

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
    <App />
    </Provider>
    
    <Footer/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

swDev();