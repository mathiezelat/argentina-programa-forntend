export class Tecnologia {
  id?: number;
  name: string;
  percent: number;

  constructor(name: string, percent: number) {
    this.name = name;
    this.percent = percent;
  }
}
