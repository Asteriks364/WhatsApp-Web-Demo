import { User } from '../User/User';

export class Contact extends User {
  public readonly id: number;
  public lastVisit: string | undefined;
  public files?: Array<any> | undefined;

  public constructor(
    id: number,
    name = '',
    avatar: string | undefined,
    lastVisit: string | undefined,
    files?: Array<any> | undefined,
    status?: string | undefined,
  ) {
    super(name, avatar, status);
    this.id = id;
    this.lastVisit = lastVisit;
    this.files = files;
  }
}
