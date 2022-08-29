import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { NuevoUsuario } from "../model/nuevo-usuario";
import { LoginUsuario } from "../model/login-usuario";
import { JwtDto } from "../model/jwt-dto";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  authURL = "https://ap-portfolio-mel.herokuapp.com/auth/";

  constructor(private httpClient: HttpClient) {}

  public newUser(newUser: NuevoUsuario): Observable<any> {
    return this.httpClient.post<any>(this.authURL + "register", newUser);
  }

  public login(loginUser: LoginUsuario): Observable<JwtDto> {
    return this.httpClient.post<JwtDto>(this.authURL + "login", loginUser);
  }
}
