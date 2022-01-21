import React from 'react';
import "./SectionHeading.scss";

const SectionHeading = ({heading}) => {
   return (
      <h3 className="section-heading u-padding-bottom-48">
        {heading}
      </h3>
   );
};

export default SectionHeading;