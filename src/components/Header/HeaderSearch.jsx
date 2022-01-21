import React, { useContext } from "react";
import SearchContext from "../../store/SearchContext";
import SearchBtn from "../UI/SearchBtn";
import './HeaderSearch.scss';

const HeaderSearch = () => {
  const [,dispatch] = useContext(SearchContext);

  const handleShowSearchBlock = () => {
    dispatch({type: "SET_STICKY_SEARCH_BLOCK"})
  }
  return (
    <div className="headerSearch">
      <button className="headerSearch__button" onClick={handleShowSearchBlock}>
         Bắt đầu tìm kiếm
        <SearchBtn />
      </button>
    </div>
  );
};

export default HeaderSearch;
