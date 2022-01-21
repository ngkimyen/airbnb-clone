import clsx from 'clsx';
import React, { useContext} from 'react';
import { NavLink } from 'react-router-dom';
import SearchContext from '../../store/SearchContext';
import './HeaderNavigation.scss';

const HeaderNavigation = () => {
   const [state , dispatch ] = useContext(SearchContext);
   
   const handleClick = (e) => {
      dispatch({type: "CLEAR_SEARCH_BLOCK_VALUE"})
      dispatch({type: "SET_ACTIVE_NAV", id: e.target.id})
   }
   
   return (
      <ul className={clsx("header__navigation", {"header__navigation--sticky": state.isSticky})}>
         <li className={clsx("header__navigation--item", {["active"]: state.navId === "place"})} id="place" onClick={handleClick}> 
            Nơi ở
         </li>
         <li className={clsx("header__navigation--item", {["active"]: state.navId === "experience"})} id="experience" onClick={handleClick}>
            Trải nghiệm
         </li>
         <li className="header__navigation--item">
            <NavLink to='/experience/online'>Trải nghiệm trực tuyến</NavLink>
         </li>
      </ul>
   );
};

export default HeaderNavigation;