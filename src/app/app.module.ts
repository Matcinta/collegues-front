import {BrowserModule } from '@angular/platform-browser';
import {NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { CollegueComponent } from './collegue/collegue.component';
import { AppRechercheCollegueParNomComponent } from './app-recherche-collegue-par-nom/app-recherche-collegue-par-nom.component';
import { FormComponent } from './form/form.component';
import { FormCreerCollegueComponent } from './form-creer-collegue/form-creer-collegue.component';
import { UrlValidatorDirective } from './validators/url-validator.directive';
import { GalerieComponent } from './galerie/galerie.component';
import { AproposComponent } from './apropos/apropos.component';
import { RouterModule} from '@angular/router';
import { ROUTES } from './app.routes';
import { AccueilComponent } from './accueil/accueil.component';
import { DetailCollegueComponent } from './detail-collegue/detail-collegue.component';
import { LogginComponent } from './loggin/loggin.component';
import { DataService } from './services/data.service';



@NgModule({
  declarations: [
    AppComponent,
    CollegueComponent,
    AppRechercheCollegueParNomComponent,
    FormComponent,
    FormCreerCollegueComponent,
    UrlValidatorDirective,
    GalerieComponent,
    AproposComponent,
    AccueilComponent,
    DetailCollegueComponent,
    LogginComponent,
   
  ],
  imports: [
    BrowserModule,
    NgbModule, 
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
