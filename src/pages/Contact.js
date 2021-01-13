import React, {useState} from "react";
import {db} from "../firebase";
import { Col , Row , Container } from "react-bootstrap";
import { SocialIcon } from 'react-social-icons';
import ContactForm from "../components/ContactForm";
import ContactInfo from "../components/ContactInfo";
import { Icon, InlineIcon } from '@iconify/react';
import mailOutlined from '@iconify-icons/ant-design/mail-outlined';
import phoneOutlined from '@iconify-icons/ant-design/phone-outlined';
import linkedinIcon from '@iconify-icons/logos/linkedin-icon';


const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
      e.preventDefault();
      setLoader(true);

      db.collection("contacts")
    .add({
      name: name,
      email: email,
      message: message,
    })
    .then(() => {
      setLoader(false);
      alert("Your message has been submitted👍");
    })
    .catch((error) => {
      alert(error.message);
      setLoader(false);
    });

  setName("");
  setEmail("");
  setMessage("");
};

  return (
    <div>
      <Container fluid={true}>
        <Row>
          <Col md="2" />
          <Col md="3" className="col align-self-center">
            <Row style={{justifyContent: 'center', padding: 20}}>
              <Icon icon={phoneOutlined} style={{ height: 25, width: 25, marginTop: '5px' }} />
              <h3>312.965.1981</h3>
            </Row>
            <Row style={{justifyContent: 'center'}}>
              <Icon icon={mailOutlined} style={{ height: 25, width: 25, marginTop: '5px' }} />
              <h3>dantalmont@gmail.com</h3> 
            </Row>
            <Row style={{justifyContent: 'center', padding: 15}}>
              <Col style={{justifyContent: 'center'}}>
                <SocialIcon url="https://github.com/dantalmont" style={{ height: 50, width: 50}} />
              </Col>
              <Col>
                <SocialIcon url="https://www.linkedin.com/in/danieltalmont" style={{ height: 50, width: 50}} />
              </Col>
            </Row>
          </Col>
          <Col md="2" />
          <Col md="4">
            {/* <div className="formBox"> */}
            <form className="form" onSubmit={handleSubmit}>
              <h1>Contact Me</h1>
              
              <label>Name</label>
              <input 
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
              />

              <label>Email</label>
              <input 
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}    
              />

              <label>Message</label>
              <textarea 
                  placeholder="Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
              ></textarea>

              <button
                  type="submit"
                  style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)" }}
              >
                  Submit
              </button>
            </form>
          </Col>
        </Row>
      </Container>    
    </div>
  );
};

export default ContactPage;
