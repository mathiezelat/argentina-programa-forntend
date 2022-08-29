import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Proyecto } from "../model/proyecto";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ProyectoService {
  proUrl = "https://ap-portfolio-mel.herokuapp.com/projects";
  constructor(private httpClient: HttpClient) {}

  public lista(): Observable<Proyecto[]> {
    return this.httpClient.get<Proyecto[]>(this.proUrl);
  }

  public detail(id: number): Observable<Proyecto> {
    return this.httpClient.get<Proyecto>(`${this.proUrl}/${id}`);
  }

  public save(proyecto: Proyecto): Observable<any> {
    return this.httpClient.post<any>(this.proUrl, proyecto);
  }

  public update(id: number, proyecto: Proyecto): Observable<any> {
    return this.httpClient.put<any>(`${this.proUrl}/${id}`, proyecto);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.proUrl}/${id}`);
  }
}
