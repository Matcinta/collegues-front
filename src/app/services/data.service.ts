import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Collegue } from '../models/Collegue';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {
 URL_BACKEND = environment.backendUrl;
 coms: string[] = [];
 
constructor(private httpClient: HttpClient) { }

// construction du Subject (commun à tous les composants qui vont l'utiliser - unique)
subCollegueSelectionne = new Subject<Collegue>();

publier(unCollegue: Collegue){
   this.subCollegueSelectionne.next(unCollegue);
}


abonnement(): Observable<Collegue>{
   return this.subCollegueSelectionne.asObservable();
}

getAllColleguePhotos(): Observable<Collegue[]>{
  return this.httpClient
  .get<Collegue[]>(this.URL_BACKEND+'/collegue/galerie');
}

rechercherParNom(nom:string): Observable<Collegue[]>  {
    return this.httpClient
    .get<Collegue[]>(this.URL_BACKEND+'/collegue?nom='+nom);
}

rechercherParMatricule(matricule:string): Observable<Collegue>  {
  return this.httpClient
  .get<Collegue>(this.URL_BACKEND+'/collegue/'+matricule);
}

modifierCollegue(matricule:string, email:string, photoUrl: string) : Observable<Collegue>{
  return this.httpClient
  .patch<Collegue>(this.URL_BACKEND+'/collegue/'+matricule, 
  {
    "email": email,
    "photoUrl" : photoUrl
    
  }
  );
}

// add a new collegue to the database
ajouterCollegue(nom: string, prenom: string, email: string, dateDeNaissance: Date, photoUrl: string) : Observable<Collegue>{
  return this.httpClient
  .post<Collegue>(this.URL_BACKEND+'/collegue/', 
  {
    "nom": nom,
    "prenom": prenom,
    "email": email,
    "dateDeNaissance": dateDeNaissance,
    "photoUrl": photoUrl
  }
  );
}

authentifyUser(email: string, password: string): Observable<Collegue>{
  return this.httpClient
  .post<Collegue>(this.URL_BACKEND+'/auth',
  {
    "email": email,
    "motDePasse": password
  }
  
  );
  }

}
