// Place your email address in the placeholder on Line 25.
import React from 'react';
import { Col, Row, Form, Button, Container } from 'react-bootstrap';



export default function Contact() {
    return(
        <> 
        <Container>
            <Form>  
            <div>
                    <h1 className="text-center p-4">Contact</h1>
                    <p className="text-center">
                    Lorem ipsum dolor sit amet, consectetur adip, consectetur adipiscing elit. Fugit error amet numquam iure provident voluptate esse quasi,
                    veritatis totam et justo voluptas nostrud ex ea commodo.</p>
                </div>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="First & Last Name" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Email Address" />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridSubject">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control placeholder="Subject"/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridInput">
                    <Form.Label>Comments</Form.Label>
                    <Form.Control placeholder="Enter your comment here..." />
                </Form.Group>

                <Button variant="primary" type="submit" className="btn1">
                   <span>Submit</span>
                </Button>
             </Form>
           </Container>
            </>
    )
}