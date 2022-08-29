import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Persona } from "../../model/persona.model";
import { PersonaService } from "../../services/persona.service";

@Component({
  selector: "app-edit-acerca-de",
  templateUrl: "./edit-acerca-de.component.html",
  styleUrls: ["./edit-acerca-de.component.css"],
})
export class EditAcercaDeComponent implements OnInit {
  persona: Persona = null;

  constructor(
    private sPersona: PersonaService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.sPersona.getPersona().subscribe((data) => {
      this.persona = data;
    }, (err) => {
      console.log(err);
      this.router.navigate([""]);
    });
  }

  onUpdate(): void {
    this.sPersona.updatePersona(this.persona).subscribe((data) => {
      this.router.navigate([""]);
    }, (err) => {
      console.log(err);
      this.router.navigate([""]);
    });
  }
}
