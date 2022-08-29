import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";
import { EditAcercaDeComponent } from "./components/acerca-de/edit-acerca-de.component";
import { NewExperienciaComponent } from "./components/experiencia/new-experiencia.component";
import { EditExperienciaComponent } from "./components/experiencia/edit-experiencia.component";
import { NewEducacionComponent } from "./components/educacion/new-educacion.component";
import { EditEducacionComponent } from "./components/educacion/edit-educacion.component";
import { NewTecnologiaComponent } from "./components/hard-soft-skill/new-tecnologia.component";
import { EditTecnologiaComponent } from "./components/hard-soft-skill/edit-tecnologia.component";
import { NewProyectoComponent } from "./components/proyectos/new-proyecto.component";
import { EditProyectoComponent } from "./components/proyectos/edit-proyecto.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "editar-acerca-de", component: EditAcercaDeComponent },
  { path: "nueva-experiencia", component: NewExperienciaComponent },
  { path: "editar-experiencia/:id", component: EditExperienciaComponent },
  { path: "nueva-educacion", component: NewEducacionComponent },
  { path: "editar-educacion/:id", component: EditEducacionComponent },
  { path: "nueva-tecnologia", component: NewTecnologiaComponent },
  { path: "editar-tecnologia/:id", component: EditTecnologiaComponent },
  { path: "nuevo-proyecto", component: NewProyectoComponent },
  { path: "editar-proyecto/:id", component: EditProyectoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
