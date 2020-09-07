import * as React from 'react';

import { useApp } from '../../context/AppProvider';
import Chat from '../Chat/Chat';
import './ChatList.css';

export default function ChatList({ search }) {
  const appContext = useApp();
  const { contacts, chats } = appContext;

  let filterContacts = contacts.filter(
    (contact) => contact.name.toLowerCase().indexOf(search.toLowerCase().trim()) !== -1,
  );

  return (
    <div className="chat-list">
      {filterContacts.map((contact) => (
        <Chat
          key={contact.id}
          chat={chats.find((chat) => contact.id === chat.id)}
          contact={contact}
        />
      ))}
    </div>
  );
}
