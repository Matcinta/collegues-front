import { Injectable } from '@angular/core';
import { Collegue } from '../models/Collegue';
import { Observable, Subject, of } from 'rxjs';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { tap, flatMap, map } from 'rxjs/operators';
import { Router } from '@angular/router';

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

          return this.getMe().pipe(
            map(col => true)
          );
        })
      );
  }

  getMe(): Observable<Collegue> {
    return this.httpClient.get<Collegue>(this.URL_BACKEND + '/collegue/me', {
      withCredentials: true
    }).pipe(
      tap(col => this.subCollegueConnecte.next(col))
    );
  }

  constructor(private httpClient: HttpClient, private router: Router) { }


  publier(user: Collegue) {
    this.subCollegueConnecte.next(user);
  }

  abonnemenCollegueConnecte(): Observable<Collegue> {
    return this.subCollegueConnecte.asObservable();
  }


  authentifyUser(email: string, password: string): Observable<Collegue> {
    return this.httpClient
      .post(this.URL_BACKEND + '/auth',
        {
          "email": email,
          "motDePasse": password
        }, {
          withCredentials: true
        }

      ).pipe(
        flatMap(() => this.getMe()),
        tap(() => {this.connected = true; this.router.navigate(['/accueil']);}
        )
      );
  }




  logout() {
    
  }
}
