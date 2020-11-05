import React from "react";
import { SocialIcon } from 'react-social-icons';
import "./style.css";
import resume from "../../utils/assets/resume.pdf"

function Footer() {
  return (
    <footer className="footer">
      <span>
        <div className="social-media">
          <SocialIcon url="https://github.com/dantalmont" style={{ height: 25, width: 25, marginRight: '5px' }} />
          <SocialIcon url="https://www.linkedin.com/in/danieltalmont" style={{ height: 25, width: 25, marginRight: '5px' }} />
          <SocialIcon url="https://www.facebook.com/Dantalmont" style={{ height: 25, width: 25, marginRight: '5px' }} />
          <SocialIcon url="https://docs.google.com/document/d/1vYd3viY-0DGhTxThAYPZS7K6dosuaJ1hN4YXvLf0N-E/edit?usp=sharing" label="My resume" style={{ height: 25, width: 25, marginRight: '5px' }} />
        </div>
        Daniel Talmont &copy;2020
      </span>

    </footer>
  );
}

export default Footer;
