import React, { useState } from 'react';

import Search from '../../Search/Search';
import RightPanelMessageList from './RightPanelMessageList';

export default function RightPanelSearchMessage() {
  /* строка поиска по сообщениям */
  const [searchMessage, setSearchMessage] = useState('');

  return (
    <div className="search-message">
      <Search search={searchMessage} setSearch={setSearchMessage} searchPlaceholder="Поиск..." />
      <RightPanelMessageList searchMessage={searchMessage} />
    </div>
  );
}
