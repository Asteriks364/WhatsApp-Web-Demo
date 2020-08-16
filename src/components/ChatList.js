import React, { useContext } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Context from '../context/context';

import Chat from './Chat';
import '../css/ChatList.css';

export default function ChatList() {
  const { chats } = useContext(Context);

  return (
    <div className="chat-list">
      <TransitionGroup>
        {chats.map((chat) => (
          <CSSTransition key={chat.id} timeout={5000} classNames="item">
            <Chat chat={chat} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
}
