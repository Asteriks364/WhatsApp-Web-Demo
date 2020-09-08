import * as React from 'react';

import { buttonBack } from '../Icons/buttonBack';
import { buttonSearch } from '../Icons/buttonSearch';
import { buttonClear } from '../Icons/buttonClear';

import './Search.css';

export interface ISearch {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  searchPlaceholder?: string;
}

export const Search = (props: ISearch): JSX.Element => {
  const [isFocus, setIsFocus] = React.useState(!!props.search);

  const input = React.useRef<HTMLInputElement>(null);

  const onFocus = React.useCallback(() => setIsFocus(true), []);
  const onBlur = React.useCallback(() => setIsFocus(!!props.search), [props.search]);

  const dataSearch = React.useCallback(
    (e) => {
      props.setSearch(e.target.value);
    },
    [props],
  );

  const clearSearch = React.useCallback(() => {
    props.setSearch('');
    if (input.current !== null) input.current.focus();
  }, [props]);

  const closeSearch = React.useCallback(() => {
    props.setSearch('');
    setIsFocus(false);
  }, [props]);

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
      {props.search && (
        <button className="button button_clear" onClick={clearSearch}>
          <span>{buttonClear()}</span>
        </button>
      )}
      <div className="search__placeholder selectable-text">{props.searchPlaceholder}</div>
      <label className="search__label">
        <input
          type="text"
          className="search__input"
          ref={input}
          value={props.search}
          onChange={(event) => props.setSearch(event.target.value)}
          onKeyPress={dataSearch}
          onFocus={onFocus}
          onBlur={onBlur}
        />
      </label>
    </div>
  );
};
