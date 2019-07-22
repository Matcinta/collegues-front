import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  notIdentifiedMode: boolean = false;

  constructor(private srv: DataService) { }

  ngOnInit() {
    this.notIdentifiedMode = false;
  }

  notConnected() {
    this.notIdentifiedMode = !this.notIdentifiedMode;
  }

  connexion(email: string, password: string){
    this.srv.authentifyUser(email, password)
    .subscribe(()=> this.notIdentifiedMode= true);
    
  }
}
