export class Persona {
  id?: number;
  name: string;
  lastName: string;
  dateOfBirth: string;
  nationality: string;
  email: string;
  aboutMe: string;
  location: string;
  occupation: string;
  coverImage: string;
  profilePicture: string;

  constructor(
    name: string,
    lastName: string,
    dateOfBirth: string,
    nationality: string,
    email: string,
    aboutMe: string,
    location: string,
    occupation: string,
    coverImage: string,
    profilePicture: string,
  ) {
    this.name = name;
    this.lastName = lastName;
    this.dateOfBirth = dateOfBirth;
    this.nationality = nationality;
    this.email = email;
    this.aboutMe = aboutMe;
    this.location = location;
    this.occupation = occupation;
    this.coverImage = coverImage;
    this.profilePicture = profilePicture;
  }
}
