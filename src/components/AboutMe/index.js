import React from "react";
import { Col , Row , Container } from "react-bootstrap";
import Image from 'react-bootstrap/Image';
import profilPic from '../../utils/assets/ProfilePic.jpg'
import "./style.css"

function AboutMe() {
  return (
    <Container>
      <Row>
        <Col style={{marginTop: '50px'}}><Image src={profilPic} thumbnail /></Col>
        <Col style={{marginTop: '50px'}}>
          <div className="description">
            <div className="content">
                I am a Full Stack coding student from Springfield, Massachussets. I have been an automotive mechanic for 7 years. I enjoy learning about new thing and how they work, Always discovering!
                <br />
                <br/>
                Hobbies: Cooking, Tennis, Manga Collecting
                
            </div> 
          </div>
        </Col>
      </Row>
      
    </Container>
  );
}

export default AboutMe;