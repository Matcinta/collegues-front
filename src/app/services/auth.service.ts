import { Injectable } from '@angular/core';
import { Collegue } from '../models/Collegue';
import { Observable, Subject, of } from 'rxjs';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { tap, flatMap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  URL_BACKEND = environment.backendUrl;
  subCollegueConnecte = new Subject<Collegue>();
  private connected = false;
  isConnected(): Observable<boolean> {
    return of(this.connected)
      .pipe(
        flatMap(estConnecte => {

          if (estConnecte) return of(true);

          return this.httpClient.get<Collegue>(this.URL_BACKEND + '/collegue/me', {
            withCredentials: true
          }).pipe(
            map(col => true)
          );
        })
      );
  }

  constructor(private httpClient: HttpClient) { }


  publier(user: Collegue) {
    this.subCollegueConnecte.next(user);
  }

  abonnement(): Observable<Collegue> {
    return this.subCollegueConnecte.asObservable();
  }


  authentifyUser(email: string, password: string): Observable<Collegue> {
    return this.httpClient
      .post<Collegue>(this.URL_BACKEND + '/auth',
        {
          "email": email,
          "motDePasse": password
        }, {
          withCredentials: true
        }

      ).pipe(

        tap(() => this.connected = true)
      );
  }


  loggedIn() {

  }

  logout() {

  }
}
