import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { LogoAPComponent } from "./components/logo-ap/logo-ap.component";
import { SocialComponent } from "./components/social/social.component";
import { AcercaDeComponent } from "./components/acerca-de/acerca-de.component";
import { ExperienciaComponent } from "./components/experiencia/experiencia.component";
import { EducacionComponent } from "./components/educacion/educacion.component";
import { HardSoftSkillComponent } from "./components/hard-soft-skill/hard-soft-skill.component";
import { ProyectosComponent } from "./components/proyectos/proyectos.component";
import { FooterComponent } from "./components/footer/footer.component";

import { NgCircleProgressModule } from "ng-circle-progress";
import { HttpClientModule } from "@angular/common/http";
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";
import { FormsModule } from "@angular/forms";
import { interceptorProvider } from "./services/interceptor-service";
import { NewExperienciaComponent } from "./components/experiencia/new-experiencia.component";
import { EditExperienciaComponent } from "./components/experiencia/edit-experiencia.component";
import { NewEducacionComponent } from "./components/educacion/new-educacion.component";
import { EditEducacionComponent } from "./components/educacion/edit-educacion.component";
import { EditAcercaDeComponent } from './components/acerca-de/edit-acerca-de.component';
import { EditTecnologiaComponent } from './components/hard-soft-skill/edit-tecnologia.component';
import { NewTecnologiaComponent } from './components/hard-soft-skill/new-tecnologia.component';
import { NewProyectoComponent } from './components/proyectos/new-proyecto.component';
import { EditProyectoComponent } from './components/proyectos/edit-proyecto.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoAPComponent,
    SocialComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    EducacionComponent,
    HardSoftSkillComponent,
    ProyectosComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    NewEducacionComponent,
    EditEducacionComponent,
    EditAcercaDeComponent,
    EditTecnologiaComponent,
    NewTecnologiaComponent,
    NewProyectoComponent,
    EditProyectoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgCircleProgressModule.forRoot(),
    HttpClientModule,
  ],
  providers: [
    interceptorProvider,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
