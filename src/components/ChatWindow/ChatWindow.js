import React, { useEffect, useRef } from 'react';

import { useApp } from '../../context/AppProvider';
import Message from '../Message/Message';
import './ChatWindow.css';

export default function ChatWindow() {
  const appContext = useApp();
  const { chats, openedChatID } = appContext;

  /* Массив сообщений выбраного чата */
  const messages = chats.find((chat) => chat.id === openedChatID).messages;

  const messagesEndRef = useRef(null);

  /* Скрол в конец списка сообщений */
  useEffect(() => {
    messagesEndRef.current.scrollIntoView({ block: 'end' });
  }, [messages, messages.length]);

  return (
    <div className="chat-window">
      <div className="chat-window__wrap" id="block">
        <div className="chat-window__indent" />
        <div className="chat-window__list">
          {messages.map((message, index) => (
            <Message key={index} message={message} />
          ))}
        </div>
        <span ref={messagesEndRef} />
      </div>
    </div>
  );
}
