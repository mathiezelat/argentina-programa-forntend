export class Experiencia {
  id?: number;
  name: string;
  description: string;
  company: string;
  period: string;
  position: string;
  logo: string;

  constructor(
    name: string,
    description: string,
    company: string,
    period: string,
    position: string,
    logo: string,
  ) {
    this.name = name;
    this.description = description;
    this.company = company;
    this.period = period;
    this.position = position;
    this.logo = logo;
  }
}
