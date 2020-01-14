import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route,  Link, HashRouter as Router } from 'react-router-dom'
import Dashboard from './Dashboard/dashboard'
import Login from './Login/login'
import Notfound from './Notfound/notfound'


function App() {
  return (
    <div className="App">
        <Router>
          <div>
            <Route path="/dashboard" component={Dashboard} exact />
            <Route path="/notfound" component={Notfound} exact />
            <Route path="/" component={Login} exact />
          </div>
        </Router>
    </div>
  );
}

export default App;
