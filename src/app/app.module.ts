import {BrowserModule } from '@angular/platform-browser';
import {NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CollegueComponent } from './collegue/collegue.component';
import { AppRechercheCollegueParNomComponent } from './app-recherche-collegue-par-nom/app-recherche-collegue-par-nom.component';
import { DetailCollegueComponent } from './detail-collegue/detail-collegue.component';


@NgModule({
  declarations: [
    AppComponent,
    CollegueComponent,
    AppRechercheCollegueParNomComponent,
    DetailCollegueComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule, 
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
