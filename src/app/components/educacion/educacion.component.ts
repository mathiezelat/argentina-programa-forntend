import { Component, OnInit } from "@angular/core";
import { Educacion } from "../../model/educacion";
import { EducacionService } from "../../services/educacion.service";
import { TokenService } from "../../services/token.service";

@Component({
  selector: "app-educacion",
  templateUrl: "./educacion.component.html",
  styleUrls: ["./educacion.component.css"],
})
export class EducacionComponent implements OnInit {
  educacion: Educacion[] = [];

  constructor(
    private educacionS: EducacionService,
    private tokenService: TokenService,
  ) {}

  isLogged = false;

  ngOnInit(): void {
    this.cargarEducacion();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarEducacion(): void {
    this.educacionS.lista().subscribe((data) => {
      this.educacion = data;
    });
  }

  deleteEducacion(id?: number) {
    if (id != undefined) {
      this.educacionS.delete(id).subscribe((data) => {
        this.cargarEducacion();
      }, (err) => {
        console.log("No se pudo eliminar");
      });
    }
  }
}
