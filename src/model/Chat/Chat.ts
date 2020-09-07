export class Chat {
  public readonly id: number;
  public isOpen: boolean;
  public messages: Array<any> | undefined;
  public newMessage: string | null | undefined;

  public constructor(
    id: number,
    isOpen: boolean,
    messages: Array<any> | undefined,
    newMessage: string | null | undefined = '',
  ) {
    this.id = id;
    this.isOpen = isOpen;
    this.messages = messages;
    this.newMessage = newMessage;
  }
}
