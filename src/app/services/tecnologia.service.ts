import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Tecnologia } from "../model/tecnologia";

@Injectable({
  providedIn: "root",
})
export class TecnologiaService {
  tecUrl = "https://ap-portfolio-mel.herokuapp.com/technologies";
  constructor(private httpClient: HttpClient) {}

  public lista(): Observable<Tecnologia[]> {
    return this.httpClient.get<Tecnologia[]>(this.tecUrl);
  }

  public detail(id: number): Observable<Tecnologia> {
    return this.httpClient.get<Tecnologia>(`${this.tecUrl}/${id}`);
  }

  public save(tecnologia: Tecnologia): Observable<any> {
    return this.httpClient.post<any>(this.tecUrl, tecnologia);
  }

  public update(id: number, tecnologia: Tecnologia): Observable<any> {
    return this.httpClient.put<any>(`${this.tecUrl}/${id}`, tecnologia);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.tecUrl}/${id}`);
  }
}
