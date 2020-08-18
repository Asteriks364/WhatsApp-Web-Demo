import React, { useState } from 'react';

import { buttonBack } from '../Icons/buttonBack';
import { buttonSearch } from '../Icons/buttonSearch';
import './Search.css';

export default function Search() {
  const [isFocus, setIsFocus] = useState(false);

  const focused = () => {
    setIsFocus(!isFocus);
  };

  return (
    <div className={`search ${isFocus ? 'search_active' : ''}`}>
      <button className="button-block">
        <div className="button button_back">
          <span>{buttonBack()}</span>
        </div>
        <div className="button button_search">
          <span>{buttonSearch()}</span>
        </div>
      </button>
      <div className="search__placeholder selectable-text">Поиск или новый чат</div>
      <label className="search__label">
        <input type="text" className="search__input" onFocus={focused} onBlur={focused} />
      </label>
    </div>
  );
}
