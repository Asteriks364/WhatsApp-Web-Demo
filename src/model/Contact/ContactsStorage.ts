import { Contact } from './Contact';
import { contacts } from '../../state/contacts.js';

export class ContactsStorage {
  private readonly _contacts: Array<Contact>;

  public constructor() {
    this._contacts = contacts.map((contact) => {
      return new Contact(
        contact.id,
        contact.name,
        contact.avatar,
        contact.lastVisit,
        (contact.files = []),
      );
    });
  }

  public get contacts(): Array<Contact> {
    return this._contacts;
  }

  public sendMessage(contacts: Array<Contact>, openedChatID: boolean | number | undefined) {
    return contacts
      .filter((contact) => contact.id === openedChatID)
      .concat(this._contacts.filter((contact) => contact.id !== openedChatID));
  }
}
