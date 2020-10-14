import React, { Component } from "react";
import ProjectCard from "../components/ProjectCard";
import { Row , Container } from "react-bootstrap";

function Projects() {
  return (
    <Container fluid>
      <Row>
        <ProjectCard />
      </Row>
    </Container>  
  );
}


export default Projects;

