import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Switch, Route} from "react-router-dom";
import './index.css';
import App from './App';
import swDev from './swDev';
import { Provider } from "react-redux";
import rootReducer from './Redux/index';
import {createStore} from 'redux';
import Home from "./components/HomePage/Home";
import About from "./components/AboutPage/About";
import Contact from "./components/ContactPage/Contact";
import Login from "./components/LoginPage/login";
import Register from "./components/LoginPage/Register";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Footer from './components/Footer';

const store=createStore(rootReducer)

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
      <App/>
      <Switch>
          <Route exact path="/">
            <ProtectedRoutes Cmp={Home} />
          </Route>

          <Route exact path="/Home">
            <ProtectedRoutes Cmp={Home} />
          </Route>

          <Route exact path="/About">
            <ProtectedRoutes Cmp={About} />
          </Route>

          <Route exact path="/Contact">
            <ProtectedRoutes Cmp={Contact} />
          </Route>

          {/* <Route exact path="/User/edit_user/:id" component={EditUser} />
      <Route exact path="/User/view_user/:id" component={ViewUser} />  */}

          <Route exact path="/Signup" component={Register} />
          

          <Route exact path="/login" component={Login} />
          


          {/* <Route exact path="/login" component={Login} />
      <Route exact path="/Signup" component={Register} /> */}
          {/* <Route exact path="/book" component={Book} /> */}



        </Switch>
        <Footer/>
    </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

swDev();