import { Switch, Route } from "react-router-dom";
import Home from "./components/HomePage/Home";
import About from "./components/AboutPage/About";
import Contact from "./components/ContactPage/Contact";
import './App.css';
// import User from "./User";
// import AddUser from "./AddUser";
// import EditUser from "./EditUser";
// import ViewUser from "./ViewUser";
import Login from "./components/LoginPage/login";
import Register from "./components/LoginPage/Register";
// import Shop from "./components/Shop";
// import Book from "./components/Book";
// import Store from "./Redux/Store";
import ProtectedRoutes from "./components/ProtectedRoutes";

function App() {
  return (
   
      <div className="App">
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
      </div>
    
  );
}

export default App;
