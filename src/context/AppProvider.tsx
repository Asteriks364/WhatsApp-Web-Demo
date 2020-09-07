import * as React from 'react';

import { Chat } from '../model/Chat/Chat';
import { ChatsStorage } from '../model/Chat/ChatsStorage';
import { Contact } from '../model/Contact/Contact';
import { ContactsStorage } from '../model/Contact/ContactsStorage';

export const AppContext = React.createContext({
  chats: undefined as Array<Chat> | undefined,
  contacts: undefined as Array<Contact> | undefined,
  openedChatID: undefined as boolean | number | undefined,
  actionRightPanel: undefined as boolean | undefined,
  selectMessage: undefined as Array<any> | undefined,
  setChats: (chats: Array<Chat>) => {
    /* */
  },
  setContacts: (contacts: Array<Contact>) => {
    /* */
  },
  setOpenedChatID: (id: React.SetStateAction<boolean | number>) => {
    /* */
  },
  setActionRightPanel: (id: React.SetStateAction<boolean | undefined>) => {
    /* */
  },
  setSelectMessage: (id: React.SetStateAction<Array<any> | undefined>) => {
    /* */
  },
  openChat: (id: React.SetStateAction<boolean | number>) => {
    /* */
  },
  writeNewMessageChat: (message: string) => {
    /* */
  },
  sendMessageChat: (message: never) => {
    /* */
  },
});

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IAppProviderProps {}

export const AppProvider = (props: IAppProviderProps): JSX.Element => {
  /* Список чатов */
  const chatsStorage = new ChatsStorage();
  const [chats, setChats] = React.useState<Array<Chat>>(chatsStorage.chats);
  /* Список контактов */
  const contactsStorage = new ContactsStorage();
  const [contacts, setContacts] = React.useState<Array<Contact>>(contactsStorage.contacts);
  /* ID открытого чата */
  const [openedChatID, setOpenedChatID] = React.useState<boolean | number>(false);
  /* Действие для открытия правой панели */
  const [actionRightPanel, setActionRightPanel] = React.useState<boolean | undefined>(undefined);
  /* Выбранное сообщенеи в поиске */
  const [selectMessage, setSelectMessage] = React.useState<Array<any> | undefined>(undefined);

  /* Запись в объект чатов из localStorage */
  React.useEffect(() => {
    const raw = localStorage.getItem('chats');
    if (raw) {
      setChats(
        JSON.parse(raw).map((chat: { isOpen: boolean }) => {
          chat.isOpen = false;
          return chat;
        }),
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  /* Запись объекта чатов в localStorage */
  React.useEffect(() => {
    localStorage.setItem('chats', JSON.stringify(chats));
  }, [chats]);

  /* Запись в объект контактов из localStorage */
  React.useEffect(() => {
    const raw = localStorage.getItem('contacts');
    if (raw) setContacts(JSON.parse(raw));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  /* Запись объекта контактов в localStorage */
  React.useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  /* Открытие чата по клику в списке чатов */
  const openChat = (id: React.SetStateAction<boolean | number>) => {
    setActionRightPanel(false);
    setOpenedChatID(id);

    chatsStorage.open(id);
    setChats(chatsStorage.chats);
  };

  /* Ввод текста в поле отправки сообщения */
  const writeNewMessageChat = (message: string) => {
    chatsStorage.writeNewMessage(message, openedChatID);
    setChats(chatsStorage.chats);
  };

  /* Отправка сообщения */
  const sendMessageChat = (message: string) => {
    contactsStorage.sendMessage(openedChatID);
    chatsStorage.sendMessage(message, openedChatID);

    setContacts(contactsStorage.contacts);
    setChats(chatsStorage.chats);
  };

  return (
    <AppContext.Provider
      value={{
        chats,
        contacts,
        openedChatID,
        actionRightPanel,
        selectMessage,
        setChats,
        setContacts,
        setOpenedChatID,
        setActionRightPanel,
        setSelectMessage,
        openChat,
        writeNewMessageChat,
        sendMessageChat,
      }}
      {...props}
    />
  );
};

export const useApp = () => React.useContext(AppContext);
