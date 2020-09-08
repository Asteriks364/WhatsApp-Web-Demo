export class Chat {
  public readonly id: number;
  public isOpen: boolean;
  public messages: Array<any>;
  public newMessage: string;

  public constructor(id: number, isOpen: boolean, messages: Array<any> = [], newMessage = '') {
    this.id = id;
    this.isOpen = isOpen;
    this.messages = messages;
    this.newMessage = newMessage;
  }
}
