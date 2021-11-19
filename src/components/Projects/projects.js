import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

export default function Projects() {
    return(
        <>
            <div>
                <h1 className="text-center p-4">Projects</h1>
            </div>

            <Container>
            <Row>
             <Col>
            <div className="container d-flex align-items-center justify-content-center position-relative flex-wrap text-black">
                <div className="card d-flex position-relative flex-column">
                    <div className="imgContainer"><img src="https://www.hallaminternet.com/wp-content/uploads/2020/01/Is-blogging-relevant-anymore.jpeg" alt=""></img></div>
                        <div className="content">
                        <h2>Card One</h2>
                        <p>Lorem ispum dolor sit amet, consectetur adipiscing elit. Suspendise eget velit tristique, sollicitudin leo viverra, suscipit neque.</p>
                        <Button className="primary">See Live</Button>
                        <Button className="primary m-2">Source Code</Button>
                    </div>
                </div>
            </div>
            </Col>

            <Col>
            <div className="container d-flex align-items-center justify-content-center position-relative flex-wrap text-black">
                <div className="card d-flex position-relative flex-column">
                    <div className="imgContainer"><img src="https://wallpapercave.com/wp/wp1904057.png" alt=""></img></div>
                        <div className="content">
                        <h2>Card Two</h2>
                        <p>Lorem ispum dolor sit amet, consectetur adipiscing elit. Suspendise eget velit tristique, sollicitudin leo viverra, suscipit neque.</p>
                        <Button className="primary">See Live</Button>
                        <Button className="primary m-2 ">Source Code</Button>
                    </div>
                </div>
            </div>
            </Col>

            <Col>
            <div className="container d-flex align-items-center justify-content-center position-relative flex-wrap text-black">
                <div className="card d-flex position-relative flex-column">
                    <div className="imgContainer"><img src="https://alamacs.ch/wp-content/uploads/2019/10/business_intelligence.jpg" alt=""></img></div>
                        <div className="content">
                        <h2>Card Three</h2>
                        <p>Lorem ispum dolor sit amet, consectetur adipiscing elit. Suspendise eget velit tristique, sollicitudin leo viverra, suscipit neque.</p>
                        <Button className="primary">See Live</Button>
                        <Button className="primary m-2">Source Code</Button>
                    </div>
                </div>
            </div>
            </Col>

            <Col>
            <div className="container d-flex align-items-center justify-content-center position-relative flex-wrap text-black">
                <div className="card d-flex position-relative flex-column">
                    <div className="imgContainer"><img src="https://web3mantra.com/wp-content/uploads/2019/06/Good-E-commerce-Website.jpg" alt=""></img></div>
                        <div className="content">
                        <h2>Card Four</h2>
                        <p>Lorem ispum dolor sit amet, consectetur adipiscing elit. Suspendise eget velit tristique, sollicitudin leo viverra, suscipit neque.</p>
                        <Button className="primary">See Live</Button>
                        <Button className="primary m-2">Source Code</Button>
                    </div>
                </div>
            </div>
            </Col>
         </Row>
</Container>


       
       </>
    )
}