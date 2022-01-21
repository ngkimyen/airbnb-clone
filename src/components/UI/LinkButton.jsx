import clsx from 'clsx';
import React from 'react';
import "./LinkButton.scss";

const LinkButton = ({isGradient, isDark, text, cssClass}) => {
   return (
      <button className={clsx("link-button",cssClass, {"link-button--gradient": isGradient, "link-button--dark": isDark })}>
      <span className={isGradient && "u-gradient-text"}>{text}</span>
   </button>
   );
};

export default LinkButton;