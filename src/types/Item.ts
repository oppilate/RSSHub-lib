export class Item {
  title: string;
  pubDate: Date;
  link: string;
  itemPicUrl: string;
  description: string; // content of this article
  guid: string;
  language: string;

  constructor(
    title: string,
    pubDate: Date,
    link: string,
    itemPicUrl: string,
    guid: string,
    description: string,
    language: string
  ) {
    this.title = title;
    this.pubDate = pubDate;
    this.link = link;
    this.itemPicUrl = itemPicUrl;
    this.description = description;
    this.guid = guid;
    this.language = language;
  }
}
