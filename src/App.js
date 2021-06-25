import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home';
import SinglePost from './components/SinglePost/SinglePost';
import Admin from './components/AdminPannel/Admin/Admin';
import AddBlog from './components/AdminPannel/AddBlog/AddBlog';
import ManageBlog from './components/AdminPannel/ManageBlog/ManageBlog';
import { createContext } from 'react';
import { useState } from 'react';
import Login from './components/Authentication/Login/Login';
import PrivateRoute from './components/Authentication/PrivateRoute/PrivateRoute';

export const UserContext = createContext();


function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/blog/:blogId">
          <SinglePost></SinglePost>
        </Route>
        <PrivateRoute path="/admin">
          <Admin></Admin>
        </PrivateRoute>
        <PrivateRoute path="/addBlog">
          <AddBlog></AddBlog>
        </PrivateRoute>
        <PrivateRoute path="/manageBlogs">
          <ManageBlog></ManageBlog>
        </PrivateRoute>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route exact path="/">
          <Home></Home>
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
