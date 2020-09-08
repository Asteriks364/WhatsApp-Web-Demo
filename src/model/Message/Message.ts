export class Message {
  public readonly id: number;
  public text: string;
  public type: string;
  public time: string | Date;
  public isRead: boolean;

  public constructor(id: number, text: string, type: string, time: string | Date, isRead: boolean) {
    this.id = id;
    this.text = text;
    this.type = type;
    this.time = time;
    this.isRead = isRead;
  }
}
