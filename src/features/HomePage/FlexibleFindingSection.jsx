import BannerContainer from "../../components/UI/BannerContainer";
import flexibleImage from "../../assets/images/flexible-img.jpeg";
import SearchContext from "../../store/SearchContext";
import { useContext } from "react";

import "./FlexibleFindingSection.scss";
import useViewPort from "../../custom-hooks/useViewPort";

const FlexibleFindingSection = () => {
  const [state,] = useContext(SearchContext);
  const {isSmall} = useViewPort(); 

  return (
    <section className="flexible-finding">
      <div className="container u-padding--large u-padding-bottom-90" style={{ paddingTop: (!state.showSearchBlock && !isSmall) && "18rem"}}>
        <BannerContainer 
          url={flexibleImage} 
          cssClass="u-flexible-height u-align-bottom u-no-border-radius-big" 
          heading={`Bạn chưa biết nên đi đâu? Tuyệt!`} 
          headingType="medium" 
          btnText="Tìm kiếm linh hoạt" 
          btnGradient link="/airbnb-clone/flexible-finding"
        />
      </div>
    </section>
  );
};

export default FlexibleFindingSection;
