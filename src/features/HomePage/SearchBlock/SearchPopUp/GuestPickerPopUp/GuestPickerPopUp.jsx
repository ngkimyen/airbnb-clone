import React from 'react';
import GuestPickerItem from './GuestPickerItem';

const GuestPickerPopUp = () => {
   return (
      <div className="guest-popup u-pop-up u-right-0">
         <GuestPickerItem id="adult" heading="Người lớn" description="Từ 13 tuổi trở lên" />
         <GuestPickerItem id="children" heading="Trẻ em" description="Độ tuổi 2 - 12" />
         <GuestPickerItem id="baby" heading="Em bé" description="Dưới 2" />
         <GuestPickerItem id="pet" heading="Thú cưng" description="Bạn muốn mang theo động vật hỗ trợ?" />

         <p className="guest-popup__note u-sub-heading">Nếu bạn may mắn có nhiều hơn 2 thú cưng đi cùng, hãy nhớ cho Chủ nhà biết.</p>
      </div>
   );
};

export default GuestPickerPopUp;