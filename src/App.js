import React, { Component } from 'react';
import styled from 'styled-components'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

import Header from './Components/BoilerPlate/Header.js'
import NavBar from './Components/BoilerPlate/NavBar.js'
import Home from './Components/Home/HomePage'
import ContactHome from './Components/Contact/ContactHome'
import ProjectsHome from './Components/MyProjects/ProjectHome'
import AboutHome from './Components/AboutMe/AboutHome'
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Contact" component={ContactHome} />
            <Route exact path="/Projects" component={ProjectsHome} />
            
            
            <Route exact path="/About" component={AboutHome} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
