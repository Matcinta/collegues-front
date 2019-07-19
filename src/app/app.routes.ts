import { Routes } from '@angular/router';
import { GalerieComponent } from './galerie/galerie.component';
import { AproposComponent } from './apropos/apropos.component';
import {AccueilComponent} from './accueil/accueil.component';
import {DetailCollegueComponent} from './detail-collegue/detail-collegue.component';

export const ROUTES: Routes = [
    { path: 'accueil', component: AccueilComponent },
    { path: 'galerie', component: GalerieComponent },
    { path: 'galerie/:matricule', component: DetailCollegueComponent },
    { path: 'apropos', component: AproposComponent },
    
];