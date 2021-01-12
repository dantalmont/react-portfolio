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
            <p>I am a recent graduate from the full stack program at the University of Connecticut. I have a focus on front end development but appreciate back end and the full stack as a whole.</p>
            <p>More text here</p>
        </Col>
      </Row>
      
    </Container>
  );
}

export default AboutMe;
