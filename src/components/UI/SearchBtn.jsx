import clsx from "clsx";
import "./SearchBtn.scss";

const SearchBtn = ({ isBig, content, onClick }) => {
  return (
    <>
      {isBig && (
        <button
          className={clsx("search-btn", {
            ["search-btn--content"]: content,
            ["search-btn--big"]: isBig,
          })}
          onClick = {onClick}
        >
          <i className="fas fa-search search-btn__icon"></i>
          {content}
        </button>
      )}
      {!isBig && <i className="fas fa-search search-btn__icon"></i> }

    </>
  );
};

export default SearchBtn;
