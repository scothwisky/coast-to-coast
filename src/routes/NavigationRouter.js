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


        return (<Router>
            <div>
              <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">Coast to Coast</Navbar.Brand>
                <Nav className="mr-auto">
                  <Nav.Link href="/student-visa">Contact us</Nav.Link>
                  {/* <Nav.Link href="/work-visa"></Nav.Link> */}
                  <Nav.Link href="/pr-visa">Help</Nav.Link>
                </Nav>
                <Nav>
                  <Nav.Link href="#sinhala">සිංහල</Nav.Link>
                  <Nav.Link eventKey={2} href="#memes">
                    English
                  </Nav.Link>
                </Nav>
              </Navbar>
              <Jumbotron>
                <Container>
                  <Row>
                    <Col>
                      <Card style={{ width: '18rem' }}>
                        <div className="p-2">
                          <YouTube
                            videoId="Y21EGqRAwtc"
                            opts={opts}
                            onReady={()=>{}}
                          />
                          {/* <Card.Img variant="top" src={Images.logo} Fluid /> */}
                        </div>
                        <Card.Body>
                          <Card.Title>Card Title</Card.Title>
                          <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                          </Card.Text>
                          <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col>
                      <Card style={{ width: '18rem' }}>
                        <div className="p-2">
                          <YouTube
                            videoId="Y21EGqRAwtc"
                            opts={opts}
                            onReady={()=>{}}
                          />
                          {/* <Card.Img variant="top" src={Images.logo} Fluid /> */}
                        </div>
                        <Card.Body>
                          <Card.Title>Card Title</Card.Title>
                          <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                          </Card.Text>
                          <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </Container>
              </Jumbotron>
              {/* A <Switch> looks through its children <Route>s and
                  renders the first one that matches the current URL. */}
              <Switch>
                <Route path="/about">
                  <About />
                </Route>
                <Route path="/users">
                  <Users />
                </Route>
                <Route path="/">
                  <Home />
                </Route>
              </Switch>
            </div>
          </Router>);
    }
}

export default NavigationRouter