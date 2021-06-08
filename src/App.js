import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import Courses from './components/pages/Courses';
import Movies from './components/pages/Movies';
import Tvseries from './components/pages/Tvseries';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/courses' component={Courses} />
          <Route path='/movies' component={Movies} />
          <Route path='/tvseries' component={Tvseries} />
        </Switch>
      </Router>
    </>
  );
}

export default App;