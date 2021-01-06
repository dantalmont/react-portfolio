import React from "react";
import AboutMe from "../components/AboutMe";
import { Col , Row , Container } from "react-bootstrap";
// import Image from 'react-bootstrap/Image';
// import profilPic from '../utils/assets/ProfilePic.jpg'
import TechIcons from "../components/TechIcons";

function About() {
  return (
    <div>
      <AboutMe />
      <TechIcons />
    </div>
  );
}

export default About;
