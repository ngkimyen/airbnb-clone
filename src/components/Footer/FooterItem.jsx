import React from "react";
import "./FooterItem.scss";

const FooterItem = ({ heading, list }) => {
  return (
    <div className="footer-item">
      <h3 className="footer-item__heading">{heading}</h3>
      <ul className="footer-item__list">
        {list.map((item, index) => (
          <li key={Math.random()} className="footer-item__item u-footer-link">{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default FooterItem;
