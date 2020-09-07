export class Contact {
  public readonly id: number;
  public name: string | null | undefined;
  public avatar: string | null | undefined;
  public lastVisit: string | null | undefined;

  public constructor(
    id: number,
    name: string | null | undefined,
    avatar: string | null | undefined,
    lastVisit: string | null | undefined,
  ) {
    this.id = id;
    this.name = name;
    this.avatar = avatar;
    this.lastVisit = lastVisit;
  }
}
