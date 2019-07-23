import { Routes } from '@angular/router';
import { GalerieComponent } from './galerie/galerie.component';
import { AproposComponent } from './apropos/apropos.component';
import {AccueilComponent} from './accueil/accueil.component';
import {DetailCollegueComponent} from './detail-collegue/detail-collegue.component';
import { LogginComponent } from './loggin/loggin.component';
import { ConnexionGuard } from './services/connexion.guard';

export const ROUTES: Routes = [
    { path: 'accueil', canActivate: [ConnexionGuard], component: AccueilComponent },
    { path: 'galerie', canActivate: [ConnexionGuard], component: GalerieComponent },
    { path: 'galerie/:matricule', canActivate: [ConnexionGuard], component: DetailCollegueComponent },
    { path: 'apropos', canActivate: [ConnexionGuard], component: AproposComponent },
    { path: 'loggin', component: LogginComponent },
    
];