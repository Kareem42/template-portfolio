import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

export default function Projects() {
    return(
        <>
            <div>
                <h1 className="text-center p-4">Projects</h1>
            </div>

            <div class="container2">
                <div class="card">
                    <img src="https://i.postimg.cc/1X8R7m8y/design.png"/>
                    <div class="card__content">
                    <h2>Web Design</h2>
                    <p>
                        Lorem Ipsum has been the industry's standard dummy text ever          since the 1500s.
                    </p>
                    <a href="#">Read More</a>
                    <a href="#">Source Code</a>
                    </div>
                </div>
                <div class="card">
                    <img src="https://i.postimg.cc/d1Ht9ktW/develop.jpg"/>
                    <div class="card__content">
                    <h2>Web Development</h2>
                    <p>
                        Lorem Ipsum has been the industry's standard dummy text ever          since the 1500s.
                    </p>
                    <a href="#">Read More</a>
                    <a href="#">Source Code</a>
                    </div>
                </div>
                <div class="card">
                    <img src="https://i.postimg.cc/xCT1HyYJ/develop2.jpg"/>
                    <div class="card__content">
                    <h2>Mobile Apps</h2>
                    <p>
                        Lorem Ipsum has been the industry's standard dummy text ever          since the 1500s.
                    </p>
                    <a href="#">Read More</a>
                    <a href="#">Source Code</a>
                    </div>
                    </div>
                </div>
       </>
    )
}