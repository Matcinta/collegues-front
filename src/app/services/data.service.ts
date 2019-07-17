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
 
constructor(private httpClient: HttpClient) { }

subCollegueSelectionne = new Subject<Collegue>();

publier(unCollegue: Collegue){
   this.subCollegueSelectionne.next(unCollegue);
}

abonnement(): Observable<Collegue>{
   return this.subCollegueSelectionne.asObservable();
}

  

rechercherParNom(nom:string): Observable<Collegue[]>  {
    return this.httpClient
    .get<Collegue[]>(this.URL_BACKEND+'/collegue?nom='+nom);
}

rechercherParMatricule(matricule:string): Observable<Collegue>  {
  return this.httpClient
  .get<Collegue>(this.URL_BACKEND+'/collegue/'+matricule);
}

recupererCollegueCourant(): Observable<Collegue> {
    
    return null;
}

ajouterCollegue(unCollegue: Collegue){
    //this.collegues.push(unCollegue);
}

}
