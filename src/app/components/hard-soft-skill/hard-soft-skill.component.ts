import { Component, OnInit } from "@angular/core";
import { TecnologiaService } from "../../services/tecnologia.service";
import { TokenService } from "../../services/token.service";
import { Tecnologia } from "../../model/tecnologia";

@Component({
  selector: "app-hard-soft-skill",
  templateUrl: "./hard-soft-skill.component.html",
  styleUrls: ["./hard-soft-skill.component.css"],
})
export class HardSoftSkillComponent implements OnInit {
  tecnologias: Tecnologia[] = [];

  constructor(
    private tecnologiaService: TecnologiaService,
    private tokenService: TokenService,
  ) {}

  isLogged = false;

  ngOnInit(): void {
    this.cargarTecnologias();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarTecnologias(): void {
    this.tecnologiaService.lista().subscribe((data) => {
      this.tecnologias = data;
    });
  }

  deleteTecnologia(id: number) {
    if (id !== undefined) {
      this.tecnologiaService.delete(id).subscribe((data) => {
        this.cargarTecnologias();
      }, (err) => {
        console.log(err);
      });
    }
  }
}
