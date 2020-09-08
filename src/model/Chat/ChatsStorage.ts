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

  private static formatData(num: string | number): string | number {
    return num < 10 ? '0' + num : num;
  }

  public open(chats: Array<Chat>, id: number | undefined) {
    return chats.map((chat) => {
      chat.id === id ? (chat.isOpen = true) : (chat.isOpen = false);
      return chat;
    });
  }

  public writeNewMessage(
    chats: Array<Chat>,
    message: string,
    openedChatID: boolean | number | undefined,
  ) {
    return chats.map((chat) => {
      if (chat.id === openedChatID) {
        chat.newMessage = message;
      }
      return chat;
    });
  }

  public sendMessage(
    chats: Array<Chat>,
    message: string,
    openedChatID: boolean | number | undefined,
  ) {
    return chats.map((chat) => {
      if (chat.id === openedChatID) {
        const newMessage = {
          id: Math.floor(Math.random() * Math.floor(999999)),
          text: message,
          type: 'out',
          time: this.arDate.join(':'),
          isRead: false,
        };

        if (!chat.messages) chat.messages = [];
        chat.messages.push(newMessage);
      }
      return chat;
    });
  }
}
