import * as React from 'react';

import { Chat } from '../model/Chat/Chat';
import { ChatsStorage } from '../model/Chat/ChatsStorage';
import { Contact } from '../model/Contact/Contact';
import { ContactsStorage } from '../model/Contact/ContactsStorage';

export const AppContext = React.createContext({
  chats: [] as Array<Chat>,
  contacts: [] as Array<Contact>,
  openedChatID: undefined as undefined | number,
  actionRightPanel: false as string | boolean,
  selectMessage: false as boolean | number,
  setChats: (chats: Array<Chat>) => {
    /* */
  },
  setContacts: (contacts: Array<Contact>) => {
    /* */
  },
  setOpenedChatID: (id: undefined | number) => {
    /* */
  },
  setActionRightPanel: (value: React.SetStateAction<string | boolean>) => {
    /* */
  },
  setSelectMessage: (id: React.SetStateAction<boolean | number>) => {
    /* */
  },
  openChat: (id: number | undefined) => {
    /* */
  },
  writeNewMessageChat: (message: string) => {
    /* */
  },
  sendMessageChat: (message: string) => {
    /* */
  },
});

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IAppProviderProps {}

const chatsStorage = new ChatsStorage();
const contactsStorage = new ContactsStorage();

export const AppProvider = (props: IAppProviderProps): JSX.Element => {
  /* Список чатов */
  const [chats, setChats] = React.useState<Array<Chat>>(chatsStorage.chats);
  /* Список контактов */
  const [contacts, setContacts] = React.useState<Array<Contact>>(contactsStorage.contacts);
  /* ID открытого чата */
  const [openedChatID, setOpenedChatID] = React.useState(undefined as undefined | number);
  /* Действие для открытия правой панели */
  const [actionRightPanel, setActionRightPanel] = React.useState(false as string | boolean);
  /* Выбранное сообщенеи в поиске */
  const [selectMessage, setSelectMessage] = React.useState(false as boolean | number);

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
  const openChat = React.useCallback(
    (id: number | undefined) => {
      setActionRightPanel(false);
      setOpenedChatID(id);
      setChats(chatsStorage.open(chats, id));
    },
    [chats],
  );

  /* Ввод текста в поле отправки сообщения */
  const writeNewMessageChat = React.useCallback(
    (message: string) => {
      setChats(chatsStorage.writeNewMessage(chats, message, openedChatID));
    },
    [chats, openedChatID],
  );

  /* Отправка сообщения */
  const sendMessageChat = React.useCallback(
    (message: string) => {
      setContacts(contactsStorage.sendMessage(contacts, openedChatID));
      setChats(chatsStorage.sendMessage(chats, message, openedChatID));
    },
    [chats, contacts, openedChatID],
  );

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
