import { Component, OnInit } from "@angular/core";
import { Proyecto } from "../../model/proyecto";
import { ProyectoService } from "../../services/proyecto.service";
import { TokenService } from "../../services/token.service";

@Component({
  selector: "app-proyectos",
  templateUrl: "./proyectos.component.html",
  styleUrls: ["./proyectos.component.css"],
})
export class ProyectosComponent implements OnInit {
  proyectos: Proyecto[] = [];

  constructor(
    private proyectoService: ProyectoService,
    private tokenService: TokenService,
  ) {}

  isLogged = false;

  ngOnInit(): void {
    this.cargarProyectos();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarProyectos(): void {
    this.proyectoService.lista().subscribe((data) => {
      this.proyectos = data;
    });
  }

  deleteProyecto(id: number) {
    if (id !== undefined) {
      this.proyectoService.delete(id).subscribe((data) => {
        this.cargarProyectos();
      }, (err) => {
        console.log(err);
      });
    }
  }
}
