import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './Header';
import {Main} from './Main';
import {About} from './About';
import {Endorsements} from './Endorsements';
import {BrowserRouter as Router, Route} from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pickUpLines: [],
    }
  }

  render() {
    return (
      <Router>
        <div className="app">
          <Route path='/' component={Header}/>
          <Route exact path='/app/home' component={() => <Main pickUpLines={this.state.pickUpLines} />} />
          <Route exact path='/app/about-us' component={About} />
          <Route excat path='/app/endorsements' component={Endorsements} />
        </div>
      </Router>
    );
  }
}

export default App;
