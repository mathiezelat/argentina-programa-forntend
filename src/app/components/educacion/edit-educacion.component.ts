import { Component, OnInit } from "@angular/core";
import { Educacion } from "../../model/educacion";
import { EducacionService } from "../../services/educacion.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-edit-educacion",
  templateUrl: "./edit-educacion.component.html",
  styleUrls: ["./edit-educacion.component.css"],
})
export class EditEducacionComponent implements OnInit {
  edu: Educacion = null;

  constructor(
    private educacionS: EducacionService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params["id"];
    this.educacionS.detail(id).subscribe((data) => {
      this.edu = data;
    }, (err) => {
      console.log("Error al modificar la educacion");
      this.router.navigate([""]);
    });
  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params["id"];
    this.educacionS.update(id, this.edu).subscribe((data) => {
      this.router.navigate([""]);
    }, (err) => {
      console.log("Error al modificar la educacion");
      this.router.navigate([""]);
    });
  }
}
