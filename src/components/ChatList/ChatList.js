import React, { useContext } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Context from '../../context/context';

import Chat from '../Chat/Chat';
import './ChatList.css';

export default function ChatList() {
  const { contacts, chats } = useContext(Context);

  return (
    <div className="chat-list">
      <TransitionGroup>
        {contacts.map((contact) => (
          <CSSTransition key={contact.id} timeout={5000} classNames="item">
            <Chat chat={chats.find((chat) => contact.id === chat.id)} contact={contact} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
}
