import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link,
} from 'react-router-dom';
import Login from './pages/login/Login';
import LoginDonor from "./pages/login/LoginDonor";

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'>
            <Redirect to='/login' />
          </Route>
          <Route exact path='/login'>
            <Login />
          </Route>
          <Route path='/login/donor'>
            <LoginDonor />
          </Route>
          <Route path='/donor/:donorId/dashboard'>
            <div>dashboard</div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
