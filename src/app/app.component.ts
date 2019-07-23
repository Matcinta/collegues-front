import { Component, OnInit } from '@angular/core';
import { DataService } from '../app/services/data.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { Collegue } from './models/Collegue';


@Component({
  selector: 'app-root',
  templateUrl: './AppComponent.html',
  styles: []
})
export class AppComponent implements OnInit {
  title = 'collegues-front';
  connectedCol :Collegue;
  
  constructor(private srv: DataService, private http: HttpClient, private router: Router, private authService: AuthService) {
  
  }

  ngOnInit(){
    this.authService.abonnemenCollegueConnecte()
    .subscribe(
      col => {
        this.connectedCol = col;
      }
    )
  }

  isLogged(){
    
  }

  logout(){
    this.authService.logout();
    this.router.navigate(['/loggin']);
    
  }

}
