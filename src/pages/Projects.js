import React, { Component } from "react";
import ProjectCard from "../components/ProjectCard";
import { Row , Container , CardGroup } from "react-bootstrap";

function Projects() {
  return (
    <Container fluid>
      <CardGroup>
        <ProjectCard />
      </CardGroup>
    </Container>  
  );
}


export default Projects;

