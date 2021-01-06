import React from "react";
import {Container , Row , Col, Tab, Tabs } from "react-bootstrap";
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







import "./style.css";


function TechIcons() {
  return (
    <Container className="techSection">
        <Row className="justify-content-center" >
            <h4>Current technology I know</h4>
        </Row>
        <Row className="justify-content-md-center">
            <Col xs={2} md={3} lg={2}>
                <a href="https://www.javascript.com/">
                    <Icon icon={javascriptIcon} class="techSvg" fluid />
                </a>
            </Col>
            <Col xs={2} md={3} lg={2}>    
                <a href="https://html.spec.whatwg.org/">
                    <Icon icon={html5} class="techSvg" fluid />
                </a>
            </Col>
            <Col xs={2} md={3} lg={2}>   
                <a href="https://www.w3.org/TR/CSS/#css">
                    <Icon icon={css3} class="techSvg" fluid />
                </a>
            </Col> 
            <Col xs={2} md={3} lg={2}>  
                <a href="https://reactjs.org/">
                    <Icon icon={reactIcon} class="techSvg" fluid />
                </a>
            </Col>  
            <Col xs={2} md={3} lg={2}>
                <a href="https://www.mongodb.com">
                    <Icon icon={mongodbIcon} class="techSvg" fluid />
                </a>
            </Col>    
            <Col xs={2} md={3} lg={2}>  
                <a href="https://www.mysql.com">
                    <Icon icon={mysqlIcon} class="techSvg" fluid />
                </a>
            </Col>  
            <Col xs={2} md={3} lg={2}>
                <a href="https://sequelize.org">
                    <Icon icon={sequelizeIcon} class="techSvg" fluid />
                </a>
            </Col>
            <Col xs={2} md={3} lg={2}>
                <a href="https://firebase.google.com">
                    <Icon icon={firebaseIcon} class="techSvg" fluid />
                </a>
            </Col>
        {/* </Row>
        <Row className="justify-content-md-center">  */}
            <Col xs={2} md={3} lg={2}>   
                <a href="https://materializecss.com">
                    <Icon icon={materializecssIcon} class="techSvg" />
                </a>
            </Col>
            <Col xs={2} md={3} lg={2}>    
                <a href="https://handlebarsjs.com">
                    <Icon icon={handlebarsIcon} class="techSvg" />
                </a>
            </Col>
            <Col xs={2} md={3} lg={2}>
                <a href="https://git-scm.com">
                    <Icon icon={gitIcon} class="techSvg" />
                </a>
            </Col>
            <Col xs={2} md={3} lg={2}>
                <a href="https://webpack.js.org">
                    <Icon icon={webpackIcon} class="techSvg" />
                </a>
            </Col>
            <Col xs={3} md={3} lg={2}>
                <a href="https://getbootstrap.com">
                    <Icon icon={bootstrapIcon} class="techSvg" />
                </a>
            </Col>
            <Col xs={3} md={3} lg={2}>
                <a href="https://www.heroku.com">
                    <Icon icon={herokuIcon} class="techSvg" />
                </a>
            </Col>
            <Col xs={3} md={3} lg={2}>
                <a href="https://nodejs.org/en/">
                    <Icon icon={nodejsIcon} class="techSvg" />
                </a>
            </Col>
            <Col xs={3} md={3} lg={2}>
                <a href="https://expressjs.com/">
                    <Icon icon={expressIcon} class="techSvg"/>
                </a>
            </Col>
        </Row>    
    </Container>    
  );
}

export default TechIcons;