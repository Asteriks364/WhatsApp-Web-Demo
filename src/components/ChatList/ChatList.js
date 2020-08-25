import React, { useContext } from 'react';
import Context from '../../context/context';

import Chat from '../Chat/Chat';
import './ChatList.css';

export default function ChatList({ search }) {
  const { contacts, chats } = useContext(Context);

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
