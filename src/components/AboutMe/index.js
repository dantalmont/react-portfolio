import React from "react";
import { Col , Row , Container } from "react-bootstrap";
import Image from 'react-bootstrap/Image';
import profilPic from '../../utils/assets/ProfilePic.jpg'
import "./style.css"

function AboutMe() {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs="2" md="1" />
       
        <Col xs="8" md="3"><Image src={profilPic} className="proPic" fluid roundedCircle /></Col>
        <Col md="1" />
        <Col xs="11" md="6" style={{backgroundColor: "white", margin: 15, padding: 5, border: 'transparent', borderRadius:'1rem'}}>
            <p>Full Stack Web Developer with an emphasis on front end development. I am immersed in Javascript and am able to build sophisticated websites from mockup to deployment. I have a track record of useful skills including being adaptive and keeping up with current technology, detail oriented, and deadline driven. I take pride in my work and have a passion for problem solving.</p>
        </Col>
      </Row>
      
    </Container>
  );
}

export default AboutMe;
