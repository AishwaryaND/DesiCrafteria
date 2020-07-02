import React, { Fragment } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'; 
import Home from './components/Home';


function App() {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route exact path='/' component={Home}/>Í
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
