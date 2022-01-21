import React from 'react';
import ExperienceContainer from "./ExperienceContainer";
import nearby_experience from "./Experience.js";
import PageMain from '../../components/UI/PageMain';

const ExperiencePageMain = ({headerIsFixed}) => {
   return (
      <PageMain headerIsFixed={headerIsFixed}>
         <ExperienceContainer data={nearby_experience }/>
      </PageMain>
   );
};    

export default ExperiencePageMain;