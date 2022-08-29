import { Component, OnInit } from "@angular/core";
import { ProyectoService } from "../../services/proyecto.service";
import { Router } from "@angular/router";
import { Proyecto } from "../../model/proyecto";

@Component({
  selector: "app-new-proyecto",
  templateUrl: "./new-proyecto.component.html",
  styleUrls: ["./new-proyecto.component.css"],
})
export class NewProyectoComponent implements OnInit {
  name: string = "";
  description: string = "";
  date: string = "";
  url: string = "";
  img: string = "";

  constructor(
    private proyectoService: ProyectoService,
    private router: Router,
  ) {}

  ngOnInit(): void {
  }

  onCreate(): void {
    const proyecto = new Proyecto(
      this.name,
      this.description,
      this.date,
      this.url,
      this.img,
    );

    this.proyectoService.save(proyecto).subscribe((data) => {
      console.log("Proyecto añadido correctamente");
      this.router.navigate([""]);
    }, (err) => {
      console.log("Añadir proyecto falló");
    });
  }
}
