import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Experiencia } from "../model/experiencia";

@Injectable({
  providedIn: "root",
})
export class SExperienciaService {
  expUrl = "https://ap-portfolio-mel.herokuapp.com/experience";

  constructor(private httpClient: HttpClient) {}

  public lista(): Observable<Experiencia[]> {
    return this.httpClient.get<Experiencia[]>(this.expUrl);
  }

  public detail(id: number): Observable<Experiencia> {
    return this.httpClient.get<Experiencia>(`${this.expUrl}/${id}`);
  }

  public save(experiencia: Experiencia): Observable<any> {
    return this.httpClient.post<any>(this.expUrl, experiencia);
  }

  public update(id: number, experiencia: Experiencia): Observable<any> {
    return this.httpClient.put<any>(`${this.expUrl}/${id}`, experiencia);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.expUrl}/${id}`);
  }
}
