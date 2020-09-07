import * as React from 'react';

import { useApp } from '../../../context/AppProvider';
import RightPanelMessage from './RightPanelMessage';

export default function RightPanelMessageList({ searchMessage }) {
  const appContext = useApp();
  const { chats, contacts, openedChatID } = appContext;

  /* Массив сообщений выбраного чата */
  const messages = chats.find((chat) => chat.id === openedChatID).messages;

  /* фильтрация массива */
  const filterMessages = messages.filter(
    (message) => message.text.toLowerCase().indexOf(searchMessage.toLowerCase().trim()) !== -1,
  );

  return (
    <div className="right-panel__content-wrap">
      {!searchMessage || filterMessages.length === 0 ? (
        <div className="message-list__empty">
          <span>
            Поиск сообщений с {contacts.find((contact) => contact.id === openedChatID).name}.
          </span>
        </div>
      ) : (
        <div className="message-list">
          {filterMessages.reverse().map((message, index) => (
            <RightPanelMessage key={index} message={message} />
          ))}
        </div>
      )}
    </div>
  );
}
