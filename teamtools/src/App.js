import React, { Component } from 'react';
import Navbar from './components/Navbar.js'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './components/Home'
import Requests from './components/Requests'
import Idtitlebreaker from './components/Idtitlebreaker'


class App extends Component {
  render() {
      return (
        <BrowserRouter>
          <div className="App">
            <Navbar />
            <Route exact path='/' component={Home}/>
            <Route path='/requests' component={Requests}/>
            <Route path='/idtitlebreaker' component={Idtitlebreaker}/>
      
          </div>
        </BrowserRouter>
      );
    }
  }

export default App;
