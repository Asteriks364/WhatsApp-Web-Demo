import { Contact } from './Contact';
import { contacts } from '../../state/contacts.js';

export class ContactsStorage {
  private readonly _contacts: Array<Contact>;

  public constructor() {
    this._contacts = contacts.map((contact) => {
      return new Contact(contact.id, contact.name, contact.avatar, contact.lastVisit);
    });
  }

  public get contacts(): Array<Contact> {
    return this._contacts;
  }

  public sendMessage(openedChatID: number | undefined | boolean) {
    this._contacts
      .filter((contact) => contact.id === openedChatID)
      .concat(this._contacts.filter((contact) => contact.id !== openedChatID));
  }
}
