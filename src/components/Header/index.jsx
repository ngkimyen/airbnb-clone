import clsx from 'clsx';
import HeaderLogo from './HeaderLogo';
import HeaderNavigation from './HeaderNavigation';
import HeaderOptions from './HeaderOptions/HeaderOptions';
import HeaderSearch from './HeaderSearch';
import { useContext} from 'react';
import SearchContext from '../../store/SearchContext';
import SearchSection from '../../features/HomePage/SearchBlock';
import './header.scss';
import MobileSearching from './MobileSearching/MobileSearching';

const Header = () => {
   const [state,] = useContext(SearchContext);
   const {showSearchBlock, isSticky} = state;

   return (
      <header className={clsx("header", "u-padding", { "header--sticky" : !showSearchBlock || isSticky})}>
         <div className="header__container">
            <HeaderLogo isSticky={!showSearchBlock || isSticky}/>
            {(showSearchBlock || isSticky) && <HeaderNavigation/>}
            {!showSearchBlock && !isSticky  && <HeaderSearch/> }
            <HeaderOptions isSticky={!showSearchBlock || isSticky }/>
            
         </div>
        {(showSearchBlock || isSticky) &&  <SearchSection/>}
            <MobileSearching isSticky={!showSearchBlock}/>
      </header>
   );
};

export default Header;