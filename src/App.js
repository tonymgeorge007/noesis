import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route,  Switch,  Link, HashRouter as Router } from 'react-router-dom'
import Dashboard from './Dashboard/dashboard'
import Login from './Login/login'
import Notfound from './Notfound/notfound'


function App() {
  return (
    <div className="App">
        <Router>
          <Switch>
            <Route path="/" component={Login} exact />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/notfound" component={Notfound} exact />
            
          </Switch>
        </Router>
    </div>
  );
}

export default App;
