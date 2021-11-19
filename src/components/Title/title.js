import { Button } from 'react-bootstrap';
import React from 'react';


export default function Title() {
    return(
        <>
        <div className="">
            <div className="jumbotron jumbotron fluid bg-dark">
            <div className="container">
                 <h1 className="display-3">Look no further! The Developer you need is right here!</h1>
                <p className="lead">My name is YOUR NAME HERE and I am a self-taught Frontend Developer</p>
            <Button variant="warning" href="./components/About/about">Enter My Domain</Button>
            </div>
        </div>
     </div>
        </>
    )
}
