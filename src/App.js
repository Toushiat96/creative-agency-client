
import logo from './logo.svg';
import './App.css';
import Home from './Component/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import React, { createContext, useState } from 'react';
import Order from './Component/Customer/Order/Order';
import Review from './Component/Customer/Review/Review';
import Login from './Component/Login/Login';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import Admin from './Component/Admin/Admin/Admin';
import Service from './Component/Customer/Service/Service';

export const serviceContext = createContext()

export const UserContext = React.createContext()


function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [serviceDetails, setServiceDetails] = useState({});
  return (
    <serviceContext.Provider value={[serviceDetails, setServiceDetails]}>
    <UserContext.Provider value={[loggedInUser , setLoggedInUser]}>
    <Router>
    <Switch>
    <Route exact path="/">
    <Home></Home>
    </Route>
    <Route exact path="/home">
    <Home></Home>
    </Route>
    <PrivateRoute  path="/order">
    <Order></Order>
    </PrivateRoute>
    <PrivateRoute path="/review">
    <Review></Review>
    </PrivateRoute>
    <Route path="/login">
    
    <Login></Login>
    </Route>
    <PrivateRoute path="/admin">
    
    <Admin></Admin>
    </PrivateRoute>
    <Route path="/service">
    <Service></Service>
    </Route>
    </Switch>
    </Router>
    </UserContext.Provider>
    </serviceContext.Provider>
  );
}

export default App;
