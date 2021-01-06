import React from "react";
import { Col , Row , Container } from "react-bootstrap";
import Image from 'react-bootstrap/Image';
import profilPic from '../../utils/assets/ProfilePic.jpg'
import "./style.css"

function AboutMe() {
  return (
    <Container>
      <Row>
        <Col xs="8" md="4"><Image src={profilPic} className="proPic" fluid roundedCircle /></Col>
        <Col xs="8" md="6" >
          <p className="aboutText"> I am a recent graduate from the full stack program at the University of Connecticut. I have a focus on front end development but appreciate back end and the full stack as a whole. </p>
        </Col>
      </Row>
      
    </Container>
  );
}

export default AboutMe;
