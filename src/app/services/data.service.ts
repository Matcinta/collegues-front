import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { Collegue } from '../models/Collegue';
import { HttpClient } from '@angular/common/http';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  
  constructor() { }

  rechercherParNom(nom:string): Observable<Collegue[]>  {
    return this.httpClient
    .get<Collegue[]>('http://munier-collegues-api.herokuapp.com/collegue/')
    .pipe(
      map(listeColleguesDuServeur =>
        listeColleguesDuServeur.filter(unCollegue => unCollegue.nom === nom)
        ),
        map(listeColleguesDuServeurFiltre => listeColleguesDuServeurFiltre.map(unCollegue => {
          unCollegue.nom = unCollegue.nom;
        }))
    )
     
    
    
  }

  recupererCollegueCourant(): Collegue {
    // TODO retourner le collègue fictif à partir du fichier `src/app/mock/collegues.mock.ts`.
    
    return null;
  }

}
