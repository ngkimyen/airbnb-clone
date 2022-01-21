import React, { useContext, useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header";
import SubHeader from "../../components/Header/SubHeader";
import useWindowClick from "../../custom-hooks/useWindowClick";
import useEscape from "../../custom-hooks/useWindowClick";
import SearchContext from "../../store/SearchContext";
import ExperiencePageMain from "./ExperiencePageMain";
import ExperienceSearchInput from "./ExperienceSearchInput/ExperienceSearchInput";

const ExperiencePage = () => {
  const [showHeader, setShowHeader] = useState(false);
  const [,dispatch] = useContext(SearchContext);
  
  const handleShowSearchBlock = (e) => {
    let searchId;
    dispatch({ type: "SET_STICKY_SEARCH_BLOCK" });
    dispatch({ type: "SET_ACTIVE_NAV", id: "experience" });

    e.target.id !== "experience-date"
      ? (searchId = "place-item")
      : (searchId = "join-item");
    dispatch({ type: "SET_ACTIVE_SEARCH_ITEM", id: searchId });

    setShowHeader(true);
   };

   const handleClick = (e) => {
    if (!e.target.closest("header")) {
      dispatch({ type: "HIDE_SEARCH_BLOCK"});
      dispatch({ type: "UNSET_STICKY_SEARCH_BLOCK"})
      setShowHeader(false);
    } else if (!e.target.closest(".search-block")) {
      dispatch({ type: "UNSET_ACTIVE_SEARCH_ITEM"})
    }
   }
   
   useWindowClick(handleClick)

  return (
    <>
      {!showHeader  ? (
        <SubHeader
          searchInput={
            <ExperienceSearchInput onClick={handleShowSearchBlock} />
          }
          headerIsFixed
        />
      ) : (
        <Header />
      )}
      <ExperiencePageMain headerIsFixed/>
      <Footer />
    </>
  );
};

export default ExperiencePage;
