import * as React from 'react';

import { useApp } from '../../../context/AppProvider';

import { RightPanelMessage } from './RightPanelMessage';

interface IRightPanelMessageList {
  searchMessage: string;
}

export const RightPanelMessageList = (props: IRightPanelMessageList): JSX.Element => {
  const appContext = useApp();
  const { chats, contacts, openedChatID } = appContext;

  const chat = chats.find((chat) => chat.id === openedChatID);
  const contact = contacts.find((contact) => contact.id === openedChatID);

  /* Массив сообщений выбраного чата */
  const messages = chat ? chat.messages : [];

  /* фильтрация массива */
  const filterMessages = messages.filter(
    (message) =>
      message.text.toLowerCase().indexOf(props.searchMessage.toLowerCase().trim()) !== -1,
  );

  return (
    <div className="right-panel__content-wrap">
      {contact && (!props.searchMessage || filterMessages.length === 0) ? (
        <div className="message-list__empty">
          <span>Поиск сообщений с {contact.name}.</span>
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
};
