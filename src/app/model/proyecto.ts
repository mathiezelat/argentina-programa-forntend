export class Proyecto {
  id?: number;
  name: string;
  description: string;
  date: string;
  url: string;
  img: string;

  constructor(
    name: string,
    description: string,
    date: string,
    url: string,
    img: string,
  ) {
    this.name = name;
    this.description = description;
    this.date = date;
    this.url = url;
    this.img = img;
  }
}
