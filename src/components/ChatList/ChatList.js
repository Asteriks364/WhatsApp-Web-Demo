import React, { useContext } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
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
      <TransitionGroup>
        {filterContacts.map((contact) => (
          <CSSTransition key={contact.id} timeout={200} classNames="item">
            <Chat chat={chats.find((chat) => contact.id === chat.id)} contact={contact} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
}
