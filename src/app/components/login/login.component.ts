import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { LoginUsuario } from "./../../model/login-usuario";
import { TokenService } from "../../services/token.service";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  isLogged = false;
  isLogginFail = false;
  loginUser!: LoginUsuario;
  username!: string;
  password!: string;
  roles: string[] = [];
  errorMessage!: string;

  constructor(
    private tokenService: TokenService,
    private authService: AuthService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.isLogginFail = false;
      this.roles = this.tokenService.getAuthorities();
    }
  }

  onLogin(): void {
    this.loginUser = new LoginUsuario(
      this.username,
      this.password,
    );
    this.authService.login(this.loginUser).subscribe((data) => {
      this.isLogged = true;
      this.isLogginFail = false;
      this.tokenService.setToken(data.token);
      this.tokenService.setUsername(data.username);
      this.tokenService.setAuthorities(data.authorities);
      this.roles = data.authorities;
      this.router.navigate([""]);
    }, (error) => {
      this.isLogged = false;
      this.isLogginFail = true;
      this.errorMessage = error.message;
      console.error(this.errorMessage);
    });
  }
}
