export class Educacion {
  id?: number;
  name: string;
  description: string;
  institution: string;
  period: string;
  logo: string;

  constructor(
    name: string,
    description: string,
    institution: string,
    period: string,
    logo: string,
  ) {
    this.name = name;
    this.description = description;
    this.institution = institution;
    this.period = period;
    this.logo = logo;
  }
}
