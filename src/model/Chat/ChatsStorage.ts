import { Chat } from './Chat';
import { chats } from '../../state/chats.js';

export class ChatsStorage {
  private arDate: Array<number | string> = [
    ChatsStorage.formatData(new Date().getHours()),
    ChatsStorage.formatData(new Date().getMinutes()),
  ];
  private readonly _chats: Array<Chat>;

  public constructor() {
    this._chats = chats.map((chat) => {
      return new Chat(chat.id, false, chat.messages, '');
    });
  }

  public get chats(): Array<Chat> {
    return this._chats;
  }

  private static formatData(num: string | number) {
    return num < 10 ? '0' + num : num;
  }

  public open(id: ((prevState: number | boolean) => number | boolean) | number | boolean) {
    this._chats.map(
      (chat: {
        id: number | boolean | ((prevState: number | boolean) => number | boolean);
        isOpen: boolean;
      }) => {
        chat.id === id ? (chat.isOpen = true) : (chat.isOpen = false);
        return chat;
      },
    );
  }

  public writeNewMessage(message: string, openedChatID: number | undefined | boolean) {
    this._chats.map((chat) => {
      if (chat.id === openedChatID) {
        chat.newMessage = message;
      }
      return chat;
    });
  }

  public sendMessage(message: string, openedChatID: number | undefined | boolean) {
    this._chats.map((chat) => {
      if (chat.id === openedChatID) {
        const newMessage = {
          id: Math.floor(Math.random() * Math.floor(999999)),
          text: message,
          type: 'out',
          time: this.arDate.join(':'),
          isRead: false,
        };
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        chat.messages.push(newMessage);
      }
      return chat;
    });
    this.sortChats(openedChatID);
  }

  public sortChats(openedChatID: number | boolean | undefined) {
    this._chats
      .filter((chat) => chat.id === openedChatID)
      .concat(this._chats.filter((chat) => chat.id !== openedChatID));
  }
}
