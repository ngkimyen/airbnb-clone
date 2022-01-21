import React from 'react';
import Footer from '../../components/Footer/Footer';
import SubHeader from '../../components/Header/SubHeader';
import ExperienceOnlinePageMain from './ExperienceOnlinePageMain';

const ExperienceOnlinePage = () => {
   return (
      <>
         <SubHeader headerIsFixed/>
         <ExperienceOnlinePageMain headerIsFixed/>
         <Footer />
      </>
   );
};

export default ExperienceOnlinePage;