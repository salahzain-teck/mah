import React from "react";
import "./Footer.css";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import YouTubeIcon from "@material-ui/icons/YouTube";
import TwitterIcon from "@material-ui/icons/Twitter";
import NavigationIcon from "@material-ui/icons/Navigation";

function Footer() {
  return (
    <div className="footer ">
      <span className="nav_span">
        <a href="#">
          {/* {" "} */}
          <NavigationIcon className="nav_icon" />{" "}
        </a>
      </span>

      {/* <i className='xcon-angle-double-up'></i> */}
      <div className="accounts ">
        <a href="https://www.facebook.com/drmahazhari">
          {/* {" "} */}
          <span>
            <FacebookIcon className="icon" />
          </span>
        </a>
        <a href="https://instagram.com/dr.mahazhari?utm_medium=copy_link">
          <span>
            <InstagramIcon className="icon " />
          </span>
        </a>
        <a href="https://twitter.com/drmahazhari">
          {/* {" "} */}
          <span>
            <TwitterIcon className="icon" />
          </span>
        </a>
        <a href="https://www.youtube.com/c/drmahazhari/featured">
          <span>
            <YouTubeIcon className="icon" />
          </span>
        </a>
      </div>

      <div className="terms_div">
        <a href="#">
          <p>Terms of use</p>
        </a>
        <span>
          <p>|</p>
        </span>
        <a href="#">
          <p>Privacy & policy</p>
        </a>
      </div>
    </div>
  );
}
export default Footer;
