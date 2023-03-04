import React from 'react';
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import './Footer.css'
const Footer = () => {
    return (
        <div className='footer'>
            <div className='social-media'>
              <InstagramIcon />
              <TwitterIcon />
              <FacebookIcon />
              <LinkedInIcon />
            </div>
            <p>&copy; 2022 me.com</p>
        </div>
    );
};

export default Footer;
