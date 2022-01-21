import React from 'react';
import LatestExperience from './LatestExperience';
import CategoryContainer from './CategoryContainer';
import PageMain from '../../components/UI/PageMain';

const ExperienceOnlinePageMain = ({headerIsFixed}) => {
   return (
      <PageMain headerIsFixed={headerIsFixed}>
         <LatestExperience/>
         <CategoryContainer />
      </PageMain>
   );
};

export default ExperienceOnlinePageMain;