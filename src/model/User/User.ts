export class User {
  public avatar: string | undefined;
  public name: string;
  public status: string | undefined;

  public constructor(name = '', avatar: string | undefined, status: string | undefined) {
    this.name = name;
    this.avatar = avatar;
    this.status = status;
  }
}
