import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import AdminLogin from './components/pages/AdminLogin';
import SignUp from './components/pages/SignUp';
import StudentLogin from './components/pages/StudentLogin';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/StudentLogin' component={StudentLogin} />
          <Route path= '/AdminLogin' component={AdminLogin} />
          <Route path='/sign-up' component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
