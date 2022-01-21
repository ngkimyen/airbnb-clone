import React from 'react';
import { assist_list, community_list, introduction_list, welcome_list } from './FooterList';
import FooterItem from './FooterItem';
import "./FooterContent.scss";

const FooterContent = () => {
   return (
      <div className="footer-content">
         <FooterItem heading="Hỗ trợ" list={assist_list}/>
         <FooterItem heading="Cộng đồng" list={community_list}/>
         <FooterItem heading="Đón tiếp khách" list={welcome_list}/>
         <FooterItem heading="Giới thiệu" list={introduction_list}/>
      </div>
   );
};

export default FooterContent;