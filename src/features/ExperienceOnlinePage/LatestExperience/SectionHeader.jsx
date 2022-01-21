import clsx from 'clsx';
import React from 'react';
import { NextButton, PrevButton } from '../../../components/UI/PrevNextButton';
import "./SectionHeader.scss";

const SectionHeader = (props) => {
   const {heading, description, cssClass ,isBigHeading, isBiggestHeading, nextBtnElement, prevBtnElement, onChange} = props;

   const handleNext = (e) => {
      e.preventDefault();
      nextBtnElement.click();
      onChange();
   }

   const handlePrev = (e) => {
      e.preventDefault();
      prevBtnElement.click();
      onChange();
   }

   return (
      <div className={clsx("section-header",cssClass ,{"big":isBigHeading, "biggest": isBiggestHeading })}>
         <h3 className={clsx("section-header__heading")}>{heading}</h3>

         {description && <p className="section-header__description">Hiển thị ( {description} )</p>}
         { (nextBtnElement || prevBtnElement) && <div className="section-header__navigate">
            <NextButton onClick={handleNext} disabled={nextBtnElement && nextBtnElement.classList.contains("slick-disabled")}/>
            <PrevButton onClick={handlePrev} disabled={prevBtnElement && prevBtnElement.classList.contains("slick-disabled") }/>
         </div>}
      </div>
   );
};

export default SectionHeader;