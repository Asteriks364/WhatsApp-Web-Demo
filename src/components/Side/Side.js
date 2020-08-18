import React from 'react';
import { user } from '../../state/user';
import { links } from '../../state/links';

import Header from '../Header/Header';
import Search from '../Search/Search';
import ChatList from '../ChatList/ChatList';
import './Side.css';

export default function Side() {
  const arLinks = [links.status, links.newChat, links.menu];

  return (
    <div className="side">
      <Header user={user} links={arLinks} />
      <Search />
      <ChatList />
    </div>
  );
}
