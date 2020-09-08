import * as React from 'react';

import { user } from '../../state/user';
import { links } from '../../state/links';
import { User } from '../../model/User/User';

import { ILink } from '../Link/Interface/ILink';

import { Header } from '../Header/Header';
import { Search } from '../Search/Search';
import { ChatList } from '../ChatList/ChatList';

import './Side.css';

export const Side = (): JSX.Element => {
  const [search, setSearch] = React.useState('' as string);

  const arLinks: Array<ILink> = [links.status, links.newChat, links.menu];

  const userProfile: User = new User(user.name, user.avatar, user.status);

  return (
    <div className="side">
      <Header user={userProfile} links={arLinks} />
      <Search search={search} setSearch={setSearch} searchPlaceholder="Поиск или новый чат" />
      <ChatList search={search} />
    </div>
  );
};
