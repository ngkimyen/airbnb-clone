import React from 'react';
import LinkButton from '../../components/UI/LinkButton';
import CategorySection from './CategorySection/CategorySection';
import experience_online_list from './ExperienceOnline';
import "./CategoryContainer.scss";

const CategoryContainer = () => {
   return (
      <div className="category-container u-padding">
            <CategorySection id="guided_tours" heading="Lên kế hoạch cho chuyến đi với sự trợ giúp từ Người tổ chức trải nghiệm tại địa phương trên khắp thế giới" data={experience_online_list.guided_tours} />
            <CategorySection id="best_sellers" heading="Bán chạy nhất" data={experience_online_list.best_sellers} />
            <CategorySection id="weekend_tours" heading="Lập kế hoạch cho cuối tuần này" data={experience_online_list.weekend_tours} />
            <CategorySection id="group_tours" heading="Thích hợp cho nhóm" data={experience_online_list.group_tours} />

            <LinkButton isDark text="Xem thêm" />
         </div>
   );
};

export default CategoryContainer;