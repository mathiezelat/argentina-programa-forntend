import { Component, OnInit } from "@angular/core";
import { SExperienciaService } from "../../services/s-experiencia.service";
import { Router } from "@angular/router";
import { Experiencia } from "../../model/experiencia";

@Component({
  selector: "app-new-experiencia",
  templateUrl: "./new-experiencia.component.html",
  styleUrls: ["./new-experiencia.component.css"],
})
export class NewExperienciaComponent implements OnInit {
  name: string = "";
  description: string = "";
  company: string = "";
  period: string = "";
  position: string = "";
  logo: string = "";

  constructor(
    private sExperienciaService: SExperienciaService,
    private router: Router,
  ) {}

  ngOnInit(): void {
  }

  onCreate(): void {
    const expe = new Experiencia(
      this.name,
      this.description,
      this.company,
      this.period,
      this.position,
      this.logo,
    );
    this.sExperienciaService.save(expe).subscribe((data) => {
      console.log("Experiencia añadida");
      this.router.navigate([""]);
    }, (err) => {
      console.log(err);
      this.router.navigate([""]);
    });
  }
}
