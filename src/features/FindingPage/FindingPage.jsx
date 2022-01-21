import React from 'react';
import Footer from '../../components/Footer/Footer';
import SubHeader from '../../components/Header/SubHeader';
import FindingPageMain from './FindingPageMain';

const FindingPage = () => {
   return (
      <>
         <SubHeader />
         <FindingPageMain />
         <Footer />
      </>
   );
};

export default FindingPage;