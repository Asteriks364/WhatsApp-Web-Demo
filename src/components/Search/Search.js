import React, { useRef, useState } from 'react';

import { buttonBack } from '../Icons/buttonBack';
import { buttonSearch } from '../Icons/buttonSearch';
import { buttonClear } from '../Icons/buttonClear';
import './Search.css';

export default function Search({ search, setSearch, searchPlaceholder }) {
  const [isFocus, setIsFocus] = useState(search ? true : false);

  const searchInput = useRef(null);

  const onFocus = () => setIsFocus(true);
  const onBlur = () => setIsFocus(search ? true : false);
  const dataSearch = (e) => setSearch(e.target.value);
  const clearSearch = () => {
    setSearch('');
    searchInput.current.focus();
  };
  const closeSearch = () => {
    setSearch('');
    setIsFocus(false);
  };

  return (
    <div className={`search ${isFocus ? 'search_active' : ''}`}>
      <button className="button-block" onClick={closeSearch}>
        <div className="button button_back">
          <span>{buttonBack()}</span>
        </div>
        <div className="button button_search">
          <span>{buttonSearch()}</span>
        </div>
      </button>
      {search && (
        <button className="button button_clear" onClick={clearSearch}>
          <span>{buttonClear()}</span>
        </button>
      )}
      <div className="search__placeholder selectable-text">{searchPlaceholder}</div>
      <label className="search__label">
        <input
          type="text"
          className="search__input"
          ref={searchInput}
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          onKeyPress={dataSearch}
          onFocus={onFocus}
          onBlur={onBlur}
        />
      </label>
    </div>
  );
}
