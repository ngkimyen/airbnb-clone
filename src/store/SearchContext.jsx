import { createContext } from "react";

const SearchContext = createContext({
   navId: "place",
  searchId: null,
  showSearchBlock: true,
  isSticky: false,
  checkInDate: null,
  checkOutDate: null,
})

export default SearchContext;
