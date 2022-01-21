import React from 'react';
import './SearchLabel.scss';

const SearchLabel = ({heading, subheading}) => {
   return (
      <div className="search-abel">
         <p className="search-label__heading">{heading}</p>
         <p className="search-label__subheading">{subheading}</p>

      </div>
   );
};

export default SearchLabel;