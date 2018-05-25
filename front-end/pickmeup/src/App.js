import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from './Header';
import {Main} from './Main';
import {Submit} from './Submit';
import {About} from './About';
import {Endorsements} from './Endorsements';
import {Footer} from './Footer'
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
          <Route exact path='/app/submit' component={Submit} />
          <Route exact path='/app/about-us' component={About} />
          <Route exact path='/app/endorsements' component={Endorsements} />
          <Route path='/' component={Footer}/>
        </div>
      </Router>
    );
  }
}

export default App;
