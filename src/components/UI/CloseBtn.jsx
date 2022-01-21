import clsx from "clsx";
import React from "react";
import "./CloseBtn.scss";

const CloseBtn = ({onClick, positionClass}) => {
  return (
    <button className={clsx("navigate-button close-button",positionClass && positionClass )} onClick={onClick}>
      <svg
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        role="presentation"
        focusable="false"
      >
        <path d="m6 6 20 20"></path>
        <path d="m26 6-20 20"></path>
      </svg>
    </button>
  );
};

export default CloseBtn;
