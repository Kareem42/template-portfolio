import React from "react";
import { Card } from 'react-bootstrap';

// need to add social media links and icons in this section

export default function Footer () {
    return(
        <>
        <Card className="text-center bg-dark">
            <Card.Body>
                <Card.Text className="social-container">
                </Card.Text>
            </Card.Body>
            <Card.Footer className=" ">CopyRight @ YOUR BRAND NAME HERE 2021</Card.Footer>
        </Card>
        </>
    )
}