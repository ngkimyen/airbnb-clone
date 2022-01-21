import React from 'react';
import FooterContent from './FooterContent';
import FooterLicense from './FooterLicense';

import './Footer.scss';
import MobileNavigation from '../Header/MobileNavigation/MobileNavigation';

const Footer = () => {
   return (
      <footer className="footer u-padding">
         <div className="u-wrapper">
         <FooterContent />
         <FooterLicense />
         </div>

         <MobileNavigation />
      </footer>
   );
};

export default Footer;