import React from "react";
import Filter from "./filter/filter";
//import Filter from "../components/filter/filter"

function Search () {
    return (
        <div className="main__centerblock centerblock">
        <div className="centerblock__search search">
        <svg className="search__svg">
          <use xlinkHref="img/icon/sprite.svg#icon-search"></use>
        </svg>
        <input
          className="search__text"
          type="search"
          placeholder="Поиск"
          name="search"/>
      </div>
      <h2 className="centerblock__h2">Треки</h2>
      <div className="centerblock__filter filter">
        
        {/*<Filter />*/}
       {/*  <div className="filter__button button-author _btn-text">
          исполнителю
        </div>
        <div className="filter__button button-year _btn-text">
          году выпуска
        </div>
        <div className="filter__button button-genre _btn-text">жанру</div> */}
      </div>
      </div>
    )
}
export default Search;