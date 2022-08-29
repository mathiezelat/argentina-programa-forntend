import { Component, OnInit } from "@angular/core";
import { EducacionService } from "../../services/educacion.service";
import { Router } from "@angular/router";
import { Educacion } from "../../model/educacion";

@Component({
  selector: "app-new-educacion",
  templateUrl: "./new-educacion.component.html",
  styleUrls: ["./new-educacion.component.css"],
})
export class NewEducacionComponent implements OnInit {
  name: string = "";
  description: string = "";
  institution: string = "";
  period: string = "";
  logo: string = "";

  constructor(private educacionS: EducacionService, private router: Router) {}

  ngOnInit(): void {
  }

  onCreate(): void {
    const educacion = new Educacion(
      this.name,
      this.description,
      this.institution,
      this.period,
      this.logo,
    );

    this.educacionS.save(educacion).subscribe((data) => {
      console.log("Educacion añadida correctamente");
      this.router.navigate([""]);
    }, (err) => {
      console.log("Añadir educacion falló");
      this.router.navigate([""]);
    });
  }
}
