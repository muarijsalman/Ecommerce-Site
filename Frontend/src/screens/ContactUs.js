import React from 'react'
import { Container, Row, Col, Card, ListGroup, ListGroupItem } from 'react-bootstrap'

const ContactUs = () => {
  return (
    <Container>
      <Row className='justify-content-center mt-5'>
        <Col xs={12} md={6}>
          <Card>
            <Card.Header className='bg-primary text-white'>Contact Us</Card.Header>
            <Card.Body>
              <p className='mb-4'>
                AZMD is a clothing brand dealing in premium men's suits. We are dedicated to providing high quality, stylish clothing for the modern man.
              </p>
              <ListGroup horizontal className='mb-4'>
                <ListGroupItem className='border-right-0'>
                  <h5 className='mb-3'>Contact Numbers</h5>
                  <ListGroup>
                    <ListGroupItem>+92-320 5803833</ListGroupItem>
                    <ListGroupItem>+92-306 5533993</ListGroupItem>
                  </ListGroup>
                </ListGroupItem>
                <ListGroupItem className='border-left-0 border-left border-dark'>
                  <h5 className='mb-3'>Location</h5>
                  <p>NUST, Sector H-12, Islamabad</p>
                </ListGroupItem>
              </ListGroup>
              <Row>
                <Col>
                  <h5>Founders</h5>
                  <ListGroup>
                    <ListGroupItem>Muhammad Muarij Salman</ListGroupItem>
                    <ListGroupItem>Zeeshan Memon</ListGroupItem>
                    <ListGroupItem>Muhammad Danish Minhas</ListGroupItem>
                    <ListGroupItem>Muhammad Affan Zahid</ListGroupItem>
                  </ListGroup>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default ContactUs;