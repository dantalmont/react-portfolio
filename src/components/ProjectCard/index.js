import React, { Component } from "react";
import { Card , Button , Container , Row , Col, Tab, Tabs } from "react-bootstrap";
import "./style.css";
import { Icon, InlineIcon } from '@iconify/react';
import reactIcon from '@iconify-icons/logos/react';

import html5 from '@iconify-icons/logos/html-5';
import css3 from '@iconify-icons/logos/css-3';
import javascriptIcon from '@iconify-icons/logos/javascript';
import mysqlIcon from "@iconify-icons/logos/mysql"
import mongodbIcon from '@iconify-icons/logos/mongodb';
import sequelizeIcon from '@iconify-icons/logos/sequelize';
import firebaseIcon from '@iconify-icons/logos/firebase';
import materializecssIcon from '@iconify-icons/logos/materializecss';
import handlebarsIcon from '@iconify-icons/logos/handlebars';
import gitIcon from '@iconify-icons/logos/git-icon';
import webpackIcon from '@iconify-icons/logos/webpack';
import bootstrapIcon from '@iconify-icons/logos/bootstrap';
import herokuIcon from '@iconify-icons/logos/heroku-icon';
import nodejsIcon from '@iconify-icons/logos/nodejs';
import expressIcon from '@iconify-icons/logos/express';
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
          <Col xs="12" md="6" lg="auto">
            <Card style={{ width: '18rem' }}>
              <Card.Title class="cardTitle">{projects.name}</Card.Title>
              <div className="overflow">
                <Card.Img src={projects.image} className="card-img-top"/>
              </div>
              <Card.Body>
                <Tabs defaultActiveKey="detail"  className="tabColor">
                  <Tab eventKey="detail" title="Description">
                        <Card.Text className="cardText">
                          {projects.description}
                        </Card.Text>
                  </Tab>
                  <Tab eventKey="tech" title="Technology">
                  <Card.Text className="cardText">{projects.tech}</Card.Text>
                  <Row>
                    <Col style={{justifyContent: 'center'}}>
                      <Button variant="outline-dark" href={projects.demo}>Demo</Button>
                    </Col>
                    <Col style={{justifyContent: 'center'}}>
                      <Button variant="outline-dark" href={projects.repo}>Repository</Button>
                    </Col>
                  </Row>
                  </Tab>
                </Tabs>
              </Card.Body>
            </Card>

            
          </Col>    
    );
  }  
}  

export default ProjectCard;
  