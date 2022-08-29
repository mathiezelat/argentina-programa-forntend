import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Experiencia } from "../../model/experiencia";
import { SExperienciaService } from "../../services/s-experiencia.service";

@Component({
  selector: "app-edit-experiencia",
  templateUrl: "./edit-experiencia.component.html",
  styleUrls: ["./edit-experiencia.component.css"],
})
export class EditExperienciaComponent implements OnInit {
  exp: Experiencia = null;

  constructor(
    private sExperiencia: SExperienciaService,
    private activatedRouter: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params["id"];
    this.sExperiencia.detail(id).subscribe((data) => {
      this.exp = data;
    }, (err) => {
      console.log(err);
      this.router.navigate([""]);
    });
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params["id"];
    this.sExperiencia.update(id, this.exp).subscribe((data) => {
      this.router.navigate([""]);
    }, (err) => {
      console.log(err);
      this.router.navigate([""]);
    });
  }
}
