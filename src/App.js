import React from 'react';
import Nav from './Nav';
import Home from './Home'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'
import Resume from './Resume'
import LinkedIn from './LinkedIn'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"




function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
        <Route path="/resume" component={Resume} />
        <Route path="/linkedin" component={LinkedIn} />
      </div>
    </Router>
  );
}

export default App;
