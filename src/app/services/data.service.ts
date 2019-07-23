import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Collegue } from '../models/Collegue';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class DataService {

 URL_BACKEND = environment.backendUrl;
 comments: string[] =[];
 
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
  .get<Collegue[]>(this.URL_BACKEND+'/collegue/galerie', {
    withCredentials: true
  });
}

rechercherParNom(nom:string): Observable<Collegue[]>  {
    return this.httpClient
    .get<Collegue[]>(this.URL_BACKEND+'/collegue?nom='+nom, {
      withCredentials: true
    });
}

rechercherParMatricule(matricule:string): Observable<Collegue>  {
  return this.httpClient
  .get<Collegue>(this.URL_BACKEND+'/collegue/'+matricule, {
    withCredentials: true
  });
}

modifierCollegue(matricule:string, email:string, photoUrl: string) : Observable<Collegue>{
  return this.httpClient
  .patch<Collegue>(this.URL_BACKEND+'/collegue/'+matricule, 
  {
    "email": email,
    "photoUrl" : photoUrl
    
  }, {
    withCredentials: true
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
  }, {
    withCredentials: true
  }
  );
}

addComment(c){
  c.date= new Date();
  this.comments.push(c);
}

getAllComments(){
  return this.comments;

}
}
