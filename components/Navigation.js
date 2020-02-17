import React from "react";
import {Navbar, 
        Nav} from "react-bootstrap";
import {Darkness, Darkness50} from "../styling/styles.js";
import Logo from "../components/Logo.js";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Resume from "../pages/resume";
import Home from "../pages/home";
import Projects from "../pages/projects";
import {Breakpoint} from 'react-socks';
import "../App.css";

const NoPadding = {
  padding: "none"
};


const NavLinks = () => (
  <>
    <Navbar variant="dark"style={NoPadding}>
      <Nav className="mr-auto">
        <Nav.Link href="/home" className="sliding-box"><div className="white underline">Home</div></Nav.Link>
        <Nav.Link href="/projects" className="sliding-box"><div className="white underline">Projects</div></Nav.Link>
        <Nav.Link href="/resume" className="sliding-box"><div className="white underline">Resume</div></Nav.Link>
      </Nav>
    </Navbar>
    <Router>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/home" exact component={Home}></Route>
        <Route path="/projects" exact component={Projects}></Route>
        <Route path="/resume" exact component={Resume}></Route>
      </Switch>
    </Router>
  </>
);


const Navigation = () => (
  <>
    <Logo/>
    <Breakpoint medium down>
      <Darkness>
        <NavLinks/>
      </Darkness>
    </Breakpoint>
    <Breakpoint large up>
      <Darkness50>
        <NavLinks/>
      </Darkness50>
    </Breakpoint>
  </>
);


export default Navigation;