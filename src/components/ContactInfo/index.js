import React from "react";
import {Container , Row , Col, Tab, Tabs } from "react-bootstrap";
import { Icon, InlineIcon } from '@iconify/react';
import mailOutlined from '@iconify-icons/ant-design/mail-outlined';
import phoneOutlined from '@iconify-icons/ant-design/phone-outlined';





function ContactInfo() {
    return (
      <Container>
        <Row>
            <Icon icon={mailOutlined} />
        </Row>
        <Row>
            <Icon icon={phoneOutlined} />
        </Row>
      </Container>
    );
  }
  
  export default ContactInfo;
