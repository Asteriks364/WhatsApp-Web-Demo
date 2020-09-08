import * as React from 'react';

import { useApp } from '../../context/AppProvider';
import { Contact } from '../../model/Contact/Contact';

import { ChatItem } from '../ChatItem/ChatItem';

import './ChatList.css';

export const ChatList = (props: { search: string }): JSX.Element => {
  const appContext = useApp();
  const { contacts, chats } = appContext;

  const filterContacts: Contact[] = contacts.filter(
    (contact) => contact.name.toLowerCase().indexOf(props.search.toLowerCase().trim()) !== -1,
  );

  return (
    <div className="chat-list">
      {filterContacts.map((contact) => (
        <ChatItem
          key={contact.id}
          chat={chats.find((chat) => contact.id === chat.id)}
          contact={contact}
        />
      ))}
    </div>
  );
};
