import React from "react";
import scss from "./SearchResults.module.scss";
const SearchResults = () => {
  return (
    <section className={scss.SearchResults}>
      <div className="container">
        <div className={scss.search_content}>SearchResults</div>
      </div>
    </section>
  );
};

export default SearchResults;
