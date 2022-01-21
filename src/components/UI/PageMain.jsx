import React from 'react';
import useViewPort from '../../custom-hooks/useViewPort';

const PageMain = ({children, headerIsFixed}) => {
   const {isSmall} = useViewPort();
   return (
      <main style={{paddingTop: isSmall ? "var(--medium-padding)" : (headerIsFixed && "var(--header-height)")}}>
         {children}
      </main>
   );
};

export default PageMain;