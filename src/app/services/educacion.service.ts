import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Educacion } from "../model/educacion";

@Injectable({
  providedIn: "root",
})
export class EducacionService {
  eduUrl = "https://ap-portfolio-mel.herokuapp.com/education";
  constructor(private httpClient: HttpClient) {}

  public lista(): Observable<Educacion[]> {
    return this.httpClient.get<Educacion[]>(this.eduUrl);
  }

  public detail(id: number): Observable<Educacion> {
    return this.httpClient.get<Educacion>(`${this.eduUrl}/${id}`);
  }

  public save(educacion: Educacion): Observable<any> {
    return this.httpClient.post<any>(this.eduUrl, educacion);
  }

  public update(id: number, educacion: Educacion): Observable<any> {
    return this.httpClient.put<any>(`${this.eduUrl}/${id}`, educacion);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.eduUrl}/${id}`);
  }
}
