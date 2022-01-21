import clsx from "clsx";
import React from "react";
import "./PrevNextButton.scss";

export const PrevButton = ({ className, onClick, isBig, disabled }) => {
  return (
    <button
      disabled={disabled || (className && className.includes("slick-disabled"))}
      className={clsx("navigate-button navigate-button--prev", {
        "navigate-button--big": isBig,
      })}
      onClick={onClick}
    >
      <svg
        viewBox="0 0 18 18"
        role="presentation"
        aria-hidden="true"
        focusable="false"
      >
        <path
          d="m13.7 16.29a1 1 0 1 1 -1.42 1.41l-8-8a1 1 0 0 1 0-1.41l8-8a1 1 0 1 1 1.42 1.41l-7.29 7.29z"
          fillRule="evenodd"
        ></path>
      </svg>
    </button>
  );
};

export const NextButton = ({ className, onClick, disabled }) => {
  return (
    <button
      disabled={disabled || (className && className.includes("slick-disabled"))}
      className={clsx("navigate-button navigate-button--next")}
      onClick={onClick}
    >
      <svg
        viewBox="0 0 18 18"
        role="presentation"
        aria-hidden="true"
        focusable="false"
      >
        <path
          d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z"
          fillRule="evenodd"
        ></path>
      </svg>
    </button>
  );
};
