import { Form, Button, Card, Container, Row, Col } from 'react-bootstrap'
import Feedback from 'react-bootstrap/esm/Feedback';
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { createFeedback } from '../actions/feedbackActions';
const FeedbackForm = ({match}) => {
  
  const [Name, setName] = useState('')
  const [Email, setEmail] = useState('')
  const [Subject, setSubject] = useState('')
  const [FeedbackDesc, setFeedback] = useState('')
  
  // const dispatch = useDispatch()
  
  
  // const submitHandler = (e) => {
  //   e.preventDefault()
  //   dispatch(
  //     createFeedback(match.params.id, {
  //       Name,
  //       Email,
  //       Subject,
  //       FeedbackDesc,
  //     })
  //   )
  // }
  
  return (
    <Container>
      <Row className='justify-content-center mt-5'>
        <Col xs={12} md={6}>
          <Card>
            <Card.Header className='bg-primary text-white'>Feedback Form</Card.Header>
            <Card.Body>
              <Form
              // onSubmit={submitHandler}
              >
                <Form.Group controlId='formName'>
                  <Form.Label>Name</Form.Label>
                  <Form.Control 
                  onChange={(e) => setName(e.target.value)}
                  type='text' placeholder='Enter your name' />
                </Form.Group>
                <Form.Group controlId='formEmail'>
                  <Form.Label>Email address</Form.Label>
                  <Form.Control 
                  onChange={(e) => setEmail(e.target.value)}
                  type='email' placeholder='Enter your email' />
                </Form.Group>
                <Form.Group controlId='formSubject'>
                  <Form.Label>Subject</Form.Label>
                  <Form.Control 
                  onChange={(e) => setSubject(e.target.value)}
                  type='text' placeholder='Enter the subject of your message' />
                </Form.Group>
                <Form.Group controlId='formMessage'>
                  <Form.Label>Feedback</Form.Label>
                  <Form.Control 
                  onChange={(e) => setFeedback(e.target.value)}
                  as='textarea' rows='3' placeholder='Give us your valuable feedback' />
                </Form.Group>
                <Button variant='primary' type='submit'>
                  Submit
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default FeedbackForm;