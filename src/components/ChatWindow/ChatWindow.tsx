import * as React from 'react';

import { useApp } from '../../context/AppProvider';
import { Chat } from '../../model/Chat/Chat';

import { MessageItem } from '../MessageItem/MessageItem';

import './ChatWindow.css';

export const ChatWindow = (): JSX.Element => {
  const appContext = useApp();
  const { chats, openedChatID } = appContext;

  const openChat: Chat | undefined = chats.find((chat) => chat.id === openedChatID);

  /* Массив сообщений выбраного чата */
  const messages: Array<any> | undefined = openChat ? openChat.messages : undefined;

  const messagesEndRef = React.useRef<HTMLSpanElement>(null);

  /* Скрол в конец списка сообщений */
  React.useEffect(() => {
    if (messagesEndRef.current !== null) messagesEndRef.current.scrollIntoView({ block: 'end' });
  }, [messages]);

  return (
    <div className="chat-window">
      <div className="chat-window__wrap" id="block">
        <div className="chat-window__indent" />
        <div className="chat-window__list">
          {messages &&
            messages.map((message, index) => <MessageItem key={index} message={message} />)}
        </div>
        <span ref={messagesEndRef} />
      </div>
    </div>
  );
};
