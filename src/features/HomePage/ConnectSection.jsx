import React from 'react';
import BannerContainer from '../../components/UI/BannerContainer';
import HostImg from "../../assets/images/host.jpeg";
import "./ConnectSection.scss";

const ConnectSection = () => {
   return (
      <section className="connect-section">
         <div className="container u-padding-bottom-48">
            <BannerContainer 
               link="/airbnb-clone"
               url={HostImg}
               cssClass="u-connect-height u-align-left-space-between u-no-border-radius-biggest"
               heading={`Bạn có thắc mắc
               về việc 
               đón tiếp khách?`}
               headingType="biggest"
               btnText="Hỏi ý kiến Chủ nhà siêu cấp"
            />
         </div>
      </section>
   );
};

export default ConnectSection;