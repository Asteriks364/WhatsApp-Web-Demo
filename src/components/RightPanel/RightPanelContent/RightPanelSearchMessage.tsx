import * as React from 'react';

import { Search } from '../../Search/Search';
import { RightPanelMessageList } from './RightPanelMessageList';

export const RightPanelSearchMessage = (): JSX.Element => {
  /* строка поиска по сообщениям */
  const [searchMessage, setSearchMessage] = React.useState<string>('');

  return (
    <div className="search-message">
      <Search search={searchMessage} setSearch={setSearchMessage} searchPlaceholder="Поиск..." />
      <RightPanelMessageList searchMessage={searchMessage} />
    </div>
  );
};
