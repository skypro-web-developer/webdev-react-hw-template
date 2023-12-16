import React from "react";



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
     
      </div>
    )
}
export default Search;