import React from "react";
import "./Footer.css";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
  return (
    <div className="footer">
      <span className="name">
        Inshorts clone made by -{" "}
        <a href="https://www.linkedin.com/in/khalid-haider-jafri-78368220a/" target="__blank">
          Khalid Haider Jafri
        </a>
      </span>
      <hr style={{ width: "90%" }} />
      <div className="iconContainer">
        <a href="https://www.instagram.com/zayyeem/?hl=bg" target="__blank">
          <InstagramIcon/>
        </a>
        <a href="https://www.linkedin.com/in/khalid-haider-jafri-78368220a/" target="__blank">
          <LinkedInIcon/>
        </a>
        <a href="https://github.com/xayyeem" target="__blank">
          <GitHubIcon/>
        </a>
      </div>
    </div>
  );
};

export default Footer;