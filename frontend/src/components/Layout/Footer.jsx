import React, { useContext } from "react";
import { Context } from "../../main";
import { Link } from "react-router-dom";
import { FaFacebookF, FaYoutube, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
// https://www.youtube.com/@CodeWithZeeshu
const Footer = () => {
  const { isAuthorized } = useContext(Context);
  return (
    <footer className={isAuthorized ? "footerShow" : "footerHide"}>
      {/* <div>&copy; All Rights Reserved By CodeWithZeeshu.</div> */}
      <div>
        <Link
          to={"https://www.facebook.com/akshat.patidar.7792?mibextid=ZbWKwL"}
          target="_blank"
        >
          <FaFacebookF />
        </Link>
        <Link to={"https://www.youtube.com"} target="_blank">
          <FaYoutube />
        </Link>
        <Link
          to={
            "https://www.linkedin.com/in/akshat-patidar-7709082aa?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          }
          target="_blank"
        >
          <FaLinkedin />
        </Link>
        <Link
          to={"https://www.instagram.com/akshat7142?igsh=MXZ2OXoxb3FwbXdweg=="}
          target="_blank"
        >
          <RiInstagramFill />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
