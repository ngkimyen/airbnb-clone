import React, { useContext, useEffect, useRef} from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header';
import useWindowClick from '../../custom-hooks/useWindowClick';
import SearchContext from '../../store/SearchContext';
import ConnectSection from './ConnectSection';
import ExperienceSection from './ExperienceSection';
import FlexibleFindingSection from './FlexibleFindingSection';
import InspirationSection from './InspirationSection';

const HomePage = () => {
   const [state,dispatch] = useContext(SearchContext);
   let hide = useRef(false);
   
   const handleScroll = (sticky) => {
      if (sticky) { 
         dispatch({type: "UNSET_STICKY_SEARCH_BLOCK"})
      }

      if (window.scrollY > 40 && !hide ) {
         hide = true ;
         dispatch({type: "UNSET_ACTIVE_SEARCH_ITEM"})
         dispatch({type: "HIDE_SEARCH_BLOCK"}) 
      }   else if (window.scrollY < 40 && hide) {
         hide = false ;
         sticky = true ;
         dispatch({type: "SHOW_SEARCH_BLOCK"})
      }
   }

   useEffect( () => {
      window.addEventListener('scroll', () => handleScroll(state.isSticky))
      return () => window.removeEventListener('scroll', () => handleScroll(state.isSticky))
   }, [state.isSticky] )
   
   useEffect( () => { 
      window.addEventListener('scroll', handleScroll)
      if (window.scrollY > 40) {
         dispatch({type: "HIDE_SEARCH_BLOCK"})
      }
      return () => window.removeEventListener('scroll', handleScroll)
   }, []);

   const handleClick = (e) => {
      if (state.searchId && !e.target.closest(".search-block"))  {
         return dispatch({type: "UNSET_ACTIVE_SEARCH_ITEM"})
      }
   }

   useWindowClick(handleClick, state.searchId)

   return (
      <>
         <Header/>
         <main style={{background: "var(--background-color)"}}>
            <FlexibleFindingSection />
            <InspirationSection />
            <ExperienceSection />
            <ConnectSection />
         </main>
         <Footer />
      </>
   );
};

export default HomePage;