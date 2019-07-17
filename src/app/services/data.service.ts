import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { Collegue } from '../models/Collegue';
import { HttpClient } from '@angular/common/http';
import { filter, map } from 'rxjs/operators';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {
 URL_BACKEND = environment.backendUrl;
 collegues:Collegue[] = [];
  
 private subCollegueSelectionne = new Subject<Collegue>();

 publier(unCollegue: Collegue){
   this.subCollegueSelectionne.next(unCollegue);
 }

 abonnement(): Observable<Collegue>{
   return this.subCollegueSelectionne.asObservable();
 }

  constructor(private httpClient: HttpClient) { }

  rechercherParNom(nom:string): Observable<Collegue[]>  {
    return this.httpClient
    .get<Collegue[]>(this.URL_BACKEND+'/collegue?nom='+nom)
    .pipe(
      map(listeColleguesDuServeur =>
        listeColleguesDuServeur.filter(unCollegue => unCollegue.nom === nom)
        ),
        map(listeColleguesDuServeurFiltre => listeColleguesDuServeurFiltre.map(unCollegue => {
          unCollegue.nom === unCollegue.nom;
          return unCollegue;
        }))
    ); 
  }

  recupererCollegueCourant(): Observable<Collegue> {
    
    return null;
  }

  ajouterCollegue(unCollegue: Collegue){
    this.collegues.push(unCollegue);
  }

}
