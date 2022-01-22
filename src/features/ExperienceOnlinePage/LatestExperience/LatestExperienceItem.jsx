import React from "react";
import "./LatestExperienceItem.scss";

const LatestExperienceItem = ({ data }) => {
  return (
    <div
      className="latest-item"
      style={{ backgroundImage: `url('${data.image}')` }}
    >
        <div className="latest-item__content">
          <p className="latest-item__category">Bộ sưu tập</p>
          <h3 className="latest-item__name">{data.name}</h3>

          <button>Hiển thị tất cả</button>
        </div>
    </div>
  );
};

export default LatestExperienceItem;
