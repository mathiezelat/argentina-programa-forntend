import { Component, OnInit } from "@angular/core";
import { TecnologiaService } from "../../services/tecnologia.service";
import { Router } from "@angular/router";
import { Tecnologia } from "../../model/tecnologia";

@Component({
  selector: "app-new-tecnologia",
  templateUrl: "./new-tecnologia.component.html",
  styleUrls: ["./new-tecnologia.component.css"],
})
export class NewTecnologiaComponent implements OnInit {
  name: string = "";
  percent: number = 0;

  constructor(
    private tecnologiaService: TecnologiaService,
    private router: Router,
  ) {}

  ngOnInit(): void {
  }

  onCreate(): void {
    const tecnologia = new Tecnologia(
      this.name,
      this.percent,
    );

    this.tecnologiaService.save(tecnologia).subscribe((data) => {
      console.log("Tecnologia añadida correctamente");
      this.router.navigate([""]);
    }, (err) => {
      console.log("Añadir tecnologia falló");
      this.router.navigate([""]);
    });
  }
}
