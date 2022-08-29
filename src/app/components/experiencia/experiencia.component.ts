import { Component, OnInit } from "@angular/core";
import { SExperienciaService } from "../../services/s-experiencia.service";
import { TokenService } from "../../services/token.service";
import { Experiencia } from "../../model/experiencia";

@Component({
  selector: "app-experiencia",
  templateUrl: "./experiencia.component.html",
  styleUrls: ["./experiencia.component.css"],
})
export class ExperienciaComponent implements OnInit {
  experiencia: Experiencia[] = [];

  constructor(
    private sExperienciaService: SExperienciaService,
    private tokenService: TokenService,
  ) {}

  isLogged = false;

  ngOnInit(): void {
    this.cargarExperiencia();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }
  cargarExperiencia(): void {
    this.sExperienciaService.lista().subscribe((data) =>
      this.experiencia = data
    );
  }

  deleteExperience(id: number) {
    if (id !== undefined) {
      this.sExperienciaService.delete(id).subscribe((data) => {
        this.cargarExperiencia();
      }, (err) => {
        console.log(err);
      });
    }
  }
}
