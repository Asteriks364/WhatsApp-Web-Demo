import React, { useEffect, useState, useMemo } from 'react';
import Context from './context/context';
import { arChats } from './state/chats';
import { arContacts } from './state/contacts';

import Side from './components/Side/Side';
import Content from './components/Content/Content';
import RightPanel from './components/RightPanel/RightPanel';
import './App.css';

export default function App() {
  /* Список чатов */
  const [chats, setChats] = useState(arChats);
  /* Список контактов */
  const [contacts, setContacts] = useState(arContacts);
  /* Действие для открытия правой панели */
  const [actionRightPanel, setActionRightPanel] = useState(false);
  /* Выбранное сообщенеи в поиске */
  const [selectMessage, setSelectMessage] = useState(false);

  /* Открытый чат */
  let chatOpened = useMemo(() => chats.filter((chat) => chat.isOpen), [chats]);
  let openedChatID = chatOpened.length ? chatOpened[0].id : false;

  /* Запись в объект чатов из localStorage */
  useEffect(() => {
    const raw = localStorage.getItem('chats');
    if (raw) {
      setChats(
        JSON.parse(raw).map((chat) => {
          chat.isOpen = false;
          return chat;
        }),
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  /* Запись объекта чатов в localStorage */
  useEffect(() => {
    localStorage.setItem('chats', JSON.stringify(chats));
  }, [chats]);

  /* Запись в объект контактов из localStorage */
  useEffect(() => {
    const raw = localStorage.getItem('contacts');
    if (raw) setContacts(JSON.parse(raw));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  /* Запись объекта контактов в localStorage */
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  /* Открытие чата по клику в списке чатов */
  const openChat = (id) => {
    setChats(
      chats.map((chat) => {
        chat.id === id ? (chat.isOpen = true) : (chat.isOpen = false);
        return chat;
      }),
    );
    setActionRightPanel(false);
  };

  /* Ввод текста в поле отправки сообщения */
  const writeNewMessageChat = (message) => {
    setChats(
      chats.map((chat) => {
        if (chat.id === openedChatID) {
          chat.newMessage = message;
        }
        return chat;
      }),
    );
  };

  /* Отправка сообщения */
  const sendMessageChat = (message) => {
    const date = new Date();

    function formatData(num) {
      return num < 10 ? '0' + num : num;
    }

    const arDate = [formatData(date.getHours()), formatData(date.getMinutes())];

    let newChats = chats.map((chat) => {
      if (chat.id === openedChatID) {
        chat.messages.push({
          id: Math.floor(Math.random() * Math.floor(999999)),
          text: message,
          type: 'out',
          time: arDate.join(':'),
          isRead: false,
        });
      }
      return chat;
    });

    setContacts(
      contacts
        .filter((contact) => contact.id === openedChatID)
        .concat(contacts.filter((contact) => contact.id !== openedChatID)),
    );

    setChats(
      newChats
        .filter((chat) => chat.id === openedChatID)
        .concat(chats.filter((chat) => chat.id !== openedChatID)),
    );
  };

  return (
    <Context.Provider
      value={{
        chats,
        contacts,
        openedChatID,
        actionRightPanel,
        selectMessage,
        setChats,
        setContacts,
        setActionRightPanel,
        setSelectMessage,
        openChat,
        sendMessageChat,
        writeNewMessageChat,
      }}
    >
      <div className="app__wrapper">
        <div className={`app__content ${actionRightPanel ? 'open-right' : ''}`}>
          <Side />
          <Content />
          <RightPanel />
        </div>
      </div>
    </Context.Provider>
  );
}
