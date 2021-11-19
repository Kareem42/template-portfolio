import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

export default function About() {
    return(
        <>
        <div>
            <h1 className="text-center p-3">About</h1>
        </div>

        <Container fluid="sm" className="about text-center p-3 ">
          <Row>
            <Col sm={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tristique urna ac quam commodo. Mauris diam sem, 
              fermentum eu mauris vitae, ultricies hendrerit diam. Sed ullamcorper leo at orci lobortis, eget rutrum lorem tempus. Sed aliquet
              vulputate lectus semper tempus. Cras iaculis metus metus, quis efficitur ipsum tincidunt ut. Donec in mauris varius, venenatis arcu at,
              efficitur quam. Aenean a dui at ante hendrerit auctor. Mauris facilisis ac ec iaculis. Nulla ut eleifend ante. Nam vel faucibus nsis.
              Fusce in pretium ligula. Maecenas orci mi, tincidunt sit amet sagittis ac, ultricies vel ligula. 
            </Col>
            <Col sm={4}>
              <Image src="https://fthmb.tqn.com/452nEyrLQtxSoXcc0BSwx43SFFs=/2089x1437/filters:fill(auto,1)/MontBlancRegion_BuenaVistaImages_Getty1-56a16aee3df78cf7726a89cf.jpg" 
                  alt="profile-pic" 
                  className="float-center" 
                  thumbnail>
              </Image>
            </Col>
            <Col className="text-center">
              Follow the guidelines to the about me sections. You can delete this list once you understand the methods:
              <ul>
                  <li>Introduce yourself</li>
                  <li>Use a friendly, casual tone, as if you are speaking normally</li>
                  <li>Include some professional experiences</li>
                  <li>Make a list of awards and accolades</li>
                  <li>Add in a few personal details like hobbies</li>
                  <li>Include a photo of yourself</li>
                  <li>Proofread and edit anything that need changes</li>
              </ul>
            </Col>
          </Row>
        </Container>
        </>
    )
}