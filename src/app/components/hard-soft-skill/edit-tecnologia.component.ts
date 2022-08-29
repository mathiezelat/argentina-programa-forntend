import { Component, OnInit } from "@angular/core";
import { Tecnologia } from "../../model/tecnologia";
import { TecnologiaService } from "../../services/tecnologia.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-edit-tecnologia",
  templateUrl: "./edit-tecnologia.component.html",
  styleUrls: ["./edit-tecnologia.component.css"],
})
export class EditTecnologiaComponent implements OnInit {
  tec: Tecnologia = null;

  constructor(
    private tecnologiaService: TecnologiaService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params["id"];
    this.tecnologiaService.detail(id).subscribe((data) => {
      this.tec = data;
    }, (err) => {
      console.log("Error al modificar la tecnologia");
      this.router.navigate([""]);
    });
  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params["id"];
    this.tecnologiaService.update(id, this.tec).subscribe((data) => {
      this.router.navigate([""]);
    }, (err) => {
      console.log("Error al modificar la tecnologia");
      this.router.navigate([""]);
    });
  }
}
