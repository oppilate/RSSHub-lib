import { Item } from "./Item";

export class Site {
  title: string;
  link: string;
  items: Item[]; // Article list

  constructor(title: string, link: string, item: Item[]) {
    this.title = title;
    this.link = link;
    this.items = item;
  }
}
