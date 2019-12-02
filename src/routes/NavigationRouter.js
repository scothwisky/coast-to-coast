import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import YouTube from 'react-youtube';

import Images from '../theme/Images';

import { 
  Navbar,
  NavDropdown,
  Form,
  FormControl,
  Nav, 
  Button, 
  Container, 
  Jumbotron, 
  Row, 
  Col,
  Card 
} from 'react-bootstrap';
import About from '../containers/About';
import Home from '../containers/Home';
import Users from '../containers/User';

class NavigationRouter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
      const opts = {
        width: '100%',
      };


        return (
          <Router>
            <div>
              <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand href="/">Coast to Coast</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">
                    <Nav.Link href="/student-visa">Contact us</Nav.Link>
                    <Nav.Link href="/pr-visa">Help</Nav.Link>
                  </Nav>
                  <hr style={{backgroundColor:"grey"}}/>
                  <Nav>   
                    <Nav.Link href="#sinhala">සිංහල</Nav.Link>
                    <Nav.Link eventKey={2} href="#memes">
                      English
                    </Nav.Link>
                  </Nav> 
                </Navbar.Collapse>



              </Navbar>
 
              {/* A <Switch> looks through its children <Route>s and
                  renders the first one that matches the current URL. */}
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/about">
                  <About />
                </Route>
                <Route path="/users">
                  <Users />
                </Route>
              </Switch>
            </div>
          </Router>);
    }
}

export default NavigationRouter