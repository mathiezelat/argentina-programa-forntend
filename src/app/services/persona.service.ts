import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Persona } from "../model/persona.model";

@Injectable({
  providedIn: "root",
})
export class PersonaService {
  URL: String = "https://ap-portfolio-mel.herokuapp.com/persons";

  constructor(private httpClient: HttpClient) {}

  public getPersona(): Observable<Persona> {
    return this.httpClient.get<Persona>(`${this.URL}/1`);
  }

  public updatePersona(persona: Persona): Observable<any> {
    return this.httpClient.put<any>(`${this.URL}/1`, persona);
  }
}
