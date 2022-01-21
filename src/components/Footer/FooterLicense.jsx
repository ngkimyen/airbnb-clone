import React from "react";
import FacebookIcon from "../UI/FacebookIcon";
import TwitterIcon from "../UI/TwitterIcon";
import InstagramIcon from "../UI/InstagramIcon";

import "./FooterLicense.scss";
import { license_list } from "./FooterList";

const FooterLicense = () => {
  return (
    <div className="footer-license">
      <div className="footer-license__wrap">
        <p className="footer-license__heading">© 2022 Airbnb, Inc.</p>
        <ul className="footer-license__list">
          {license_list.map((item) => (
            <li
              key={Math.random()}
              className="u-footer-link footer-license__item"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="footer-license__platform">
        <FacebookIcon />
        <TwitterIcon />
        <InstagramIcon />
      </div>
    </div>
  );
};

export default FooterLicense;
