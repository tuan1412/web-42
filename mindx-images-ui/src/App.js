import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Auth/Login';
import SignUp from './pages/Auth/Signup';
import CreatePost from './pages/Posts/CreatePost';
import PostDetail from './pages/Posts/PostDetail';
import NotFound from './pages/NotFound/404';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/login' exact>
          <Login />
        </Route>
        <Route path='/signup' exact>
          <SignUp />
        </Route>
        <Route path='/upload' exact>
          <CreatePost />
        </Route>
        <Route path='/posts/:id' exact>
          <PostDetail />
        </Route>
        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
