import clsx from 'clsx';
import React from 'react';
import { NavLink } from 'react-router-dom';
import useViewPort from '../../custom-hooks/useViewPort';
import { PrevButton } from '../UI/PrevNextButton';
import HeaderLogo from './HeaderLogo';
import HeaderOptions from './HeaderOptions/HeaderOptions';
import "./SubHeader.scss";

const SubHeader = ({searchInput, headerIsFixed}) => {
   const {isSmall : screenIsSmall} = useViewPort();

   return (
      <header className={clsx("sub-header", {"sub-header--fixed": headerIsFixed})}>
         <div className="container u-padding sub-header-container">
            {!screenIsSmall ? <HeaderLogo isLight/> : <NavLink to="/airbnb-clone/" ><PrevButton isBig/></NavLink>}
            {!screenIsSmall && searchInput && searchInput}
            <HeaderOptions isLight/>
         </div>
      </header>
   );
};

export default SubHeader;