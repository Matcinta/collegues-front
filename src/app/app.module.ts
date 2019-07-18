import {BrowserModule } from '@angular/platform-browser';
import {NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { CollegueComponent } from './collegue/collegue.component';
import { AppRechercheCollegueParNomComponent } from './app-recherche-collegue-par-nom/app-recherche-collegue-par-nom.component';
import { FormComponent } from './form/form.component';



@NgModule({
  declarations: [
    AppComponent,
    CollegueComponent,
    AppRechercheCollegueParNomComponent,
    FormComponent,
   
  ],
  imports: [
    BrowserModule,
    NgbModule, 
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
