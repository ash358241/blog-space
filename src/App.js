import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import SinglePost from './components/SinglePost/SinglePost';
import Admin from './components/AdminPannel/Admin/Admin';
import AddBlog from './components/AdminPannel/AddBlog/AddBlog';
import ManageBlog from './components/AdminPannel/ManageBlog/ManageBlog';

function App() {
  // const admin = false;
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/post/:postId">
          <SinglePost></SinglePost>
        </Route>
        <Route path="/admin">
          <Admin></Admin>
        </Route>
        <Route path="/addBlog">
          <AddBlog></AddBlog>
        </Route>
        <Route path="/manageBlogs">
          <ManageBlog></ManageBlog>
        </Route>
        <Route exact path="/">
          <Home></Home>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
