import React, { Component } from "react";
import { Card , Button , Container , Row , Col, Tab, Tabs } from "react-bootstrap";
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
              <Card.Title style={{textAlign: 'center'}}>{projects.name}</Card.Title>
              <div className="overflow">
                <Card.Img src={projects.image} style={styles.cardImage} />
              </div>
              <Card.Body>
                <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
                  <Tab eventKey="home" title="Description">
                        <Card.Text style={{ textAlign: 'center' , marginBottom: '15%' }}>
                          {projects.description}
                        </Card.Text>
                  </Tab>
                  <Tab eventKey="profile" title="Technology">
                    <div>whats up</div>
                  </Tab>
                </Tabs>
              </Card.Body>
            </Card>

            
          </Col>    
    );
  }  
}  

export default ProjectCard;
  