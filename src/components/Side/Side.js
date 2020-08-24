import React, { useState } from 'react';
import { user } from '../../state/user';
import { links } from '../../state/links';

import Header from '../Header/Header';
import Search from '../Search/Search';
import ChatList from '../ChatList/ChatList';
import './Side.css';

export default function Side() {
  const arLinks = [links.status, links.newChat, links.menu];
  const [search, setSearch] = useState('');

  return (
    <div className="side">
      <Header user={user} links={arLinks} />
      <Search search={search} setSearch={setSearch} searchPlaceholder="Поиск или новый чат" />
      <ChatList search={search} />
    </div>
  );
}
