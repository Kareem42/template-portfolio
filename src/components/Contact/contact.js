// Place your email address in the placeholder on Line 25.
import React from 'react';
import { Container, FloatingLabel, Form, Button } from 'react-bootstrap';

export default function Contact() {
    return(
        <>
        <div>
            <h1 className="text-center p-4">Contact</h1>
        </div>
        
        <Container>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Name"
                    className="mb-3 text-black" >
                        <Form.Control type="name" placeholder="Your name here..." />
                    </FloatingLabel>

                    <FloatingLabel
                        controlId="floatingInput"
                        label="Email address"
                        className="mb-3 text-black" >
                            <Form.Control type="email" placeholder="name@example.com" />
                        </FloatingLabel>

                    <FloatingLabel controlId="floatingTextarea" label="Comments" className="text-black">
                        <Form.Control
                        as="textarea"
                        placeholder="Leave a comment here..."
                        style={{height: '100px'}} />
                    </FloatingLabel>

                        <Button variant="primary" 
                        type="submit" 
                        className="btn1 ">
                        <span>Submit</span></Button>
            </Container>
        </>
    )
}