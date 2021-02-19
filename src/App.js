import React from 'react';
import Navbar from './components/Navbar';
import Board from './components/Board';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import RulesAndAbout from './components/RulesAndAbout';

function App() {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Board}/>
            <Route exact path="/rules-and-about" component={RulesAndAbout}/>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
