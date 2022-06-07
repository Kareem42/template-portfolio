import React from "react";
import { Link, animateScroll as scroll } from 'react-scroll';
import { Nav, Container, Navbar } from 'react-bootstrap';

export default function Header () {

    const handleClick = () => {
        console.log('this is working fine');
    }
    

    const scrollToTop = () => {
        scroll.scrollToTop();
    }

    return(
        <>
        <Navbar sticky="top" bg="dark" variant="dark" className="justify-content-end">
          <Container fluid="md">
          <Container>
            <Navbar.Brand>
              <img 
                href="#home"
                src="/logo.svg"
                alt=""
                onClick={scrollToTop}
                width="30"
                height="30"
                className="d-inline-block align-top"
                /> Your Brand Name
              </Navbar.Brand>
            </Container>
            <Nav className="">
              <Link className="nav-link nav-link-ltr" 
                       to="about"
                       href="#about"
                       activeClass="active"
                       onClick={handleClick}
                       spy={true}
                       smooth={true}
                       offset={-130}
                       duration={500}>About</Link>
              <Link className="nav-link nav-link-ltr"
                       href="#skills"  
                       to="skills"
                       activeClass="active"
                       onClick={handleClick}
                       spy={true}
                       smooth={true}
                       offset={-70}
                       duration={500}>Skills</Link>
              <Link className="nav-link nav-link-ltr"
                       href="#projects"
                       to="projects"
                       activeClass="active"
                       onClick={handleClick}
                       spy={true}
                       smooth={true}
                       offset={-70}
                       duration={500}>Projects</Link>
              <Link className="nav-link nav-link-ltr" 
                       href="#contact"
                       to="contact"
                       activeClass="active"
                       onClick={handleClick}
                       spy={true}
                       smooth={true}
                       offset={-70}
                       duration={500} >Contact</Link>
            </Nav>
          </Container>
        </Navbar>
        </>
    )
}