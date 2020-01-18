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
import DonorRouter from "./pages/donor/DonorRouter";

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
          <Route exact path='/login/donors'>
            <LoginDonor />
          </Route>
          <Route path='/donors/:donorId'>
            <DonorRouter />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
