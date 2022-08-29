import { Component, OnInit } from "@angular/core";
import { Proyecto } from "../../model/proyecto";
import { ProyectoService } from "../../services/proyecto.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-edit-proyecto",
  templateUrl: "./edit-proyecto.component.html",
  styleUrls: ["./edit-proyecto.component.css"],
})
export class EditProyectoComponent implements OnInit {
  pro: Proyecto = null;

  constructor(
    private proyectoService: ProyectoService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params["id"];
    this.proyectoService.detail(id).subscribe((data) => {
      this.pro = data;
    }, (err) => {
      console.log("Error al modificar el proyecto");
      this.router.navigate([""]);
    });
  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params["id"];
    this.proyectoService.update(id, this.pro).subscribe((data) => {
      this.router.navigate([""]);
    }, (err) => {
      console.log("Error al modificar el proyecto");
      this.router.navigate([""]);
    });
  }
}
