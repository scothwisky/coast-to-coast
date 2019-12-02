import React, { PureComponent } from 'react'
import {  
    Button, 
    Container,
    Jumbotron,   
    Row, 
    Col,
    Card 
  } from 'react-bootstrap';
import YouTube from 'react-youtube';

class Home extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {

        const opts = {
            width: "100%",
            height: "100%"
          };

        return (<Jumbotron>
            
            <Container>
                  <Row>
                  <Col className="d-flex justify-content-center align-items-center pb-3" sm={6}>
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
                    <Col className="d-flex justify-content-center align-items-center pb-3" sm={6}>
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
                    
                    <Col className="d-flex justify-content-center align-items-center pb-3" sm={6}>
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
                    <Col className="d-flex justify-content-center align-items-center pb-3" sm={6}>
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

        </Jumbotron>)
    }
}

export default Home