import React, { Component } from "react";
import { Card , Button , Container , Row , Col } from "react-bootstrap";
import "./style.css";
import repos  from "../../utils/repos.json"

const styles = {
  card: {
    backgroundColor: '#B7E0F2',
    padding: '3rem'
  },
  cardImage: {
    objectFit: 'cover',
    overflow: 'hidden'
    
  }
}


class ProjectCard extends Component {
  constructor() {
    super();
    this.state = { repos : [...repos] }
  }
  render() {

    
    return repos.map( (projects) =>
          <Col lg="auto">
            <Card style={{ width: '18rem' }}>
              <div className="overflow">
                <Card.Img variant="top" src={projects.image} style={styles.cardImage} />
              </div>
              <Card.Body>
                <Card.Title style={{textAlign: 'center'}}>{projects.name}</Card.Title>
                <Card.Text style={{ textAlign: 'center' , marginBottom: '15%' }}>
                  {projects.description}
                </Card.Text>
                <Card.Body>
                  <Card.Link href={projects.repo}>Repository</Card.Link>
                  <Card.Link href={projects.demo}>Deployment</Card.Link>
                </Card.Body>
              </Card.Body>
            </Card>
          </Col>    
    );
  }  
}  

export default ProjectCard;
  