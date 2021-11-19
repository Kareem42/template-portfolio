import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import { Link, animateScroll as scroll} from "react-scroll";
import Particles from 'react-tsparticles';
import Header from './components/Header/header';
import Title from './components/Title/title';
import About from './components/About/about';
import Projects from './components/Projects/projects';
import Skills from './components/Skills/skills';
import Contact from './components/Contact/contact';
import Footer from './components/Footer/footer';
//import {Routes, Route,} from "react-router-dom";


const App = () => {
  const particlesInit = (main) => {
    console.log(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

    return(
    <>
      <Header />
      <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        detectRetina: false,
        fpsLimit: 30,
        interactivity: {
          detectsOn: "canvas",
          events: {
            resize: true
          }
        },
        particles: {
          color: {
            value: "#fff"
          },
          number: {
            density: {
              enable: true,
              area: 1080
            },
            limit: 0,
            value: 400
          },
          opacity: {
            animation: {
              enable: true,
              minimumValue: 0.05,
              speed: 0.25,
              sync: false
            },
            random: {
              enable: true,
              minimumValue: 0.05
            },
            value: 1
          },
          shape: {
            type: "circle"
          },
          size: {
            random: {
              enable: true,
              minimumValue: 0.05
            },
            value: 1
          }
        }
      }}
    />
      <Title />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>

    );
};   

export default App;