import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../services/data.service';
import { Collegue } from '../models/Collegue';

@Component({
  selector: 'app-recherche-collegue-par-nom',
  templateUrl: './app-recherche-collegue-par-nom.component.html',
  styleUrls: ['./app-recherche-collegue-par-nom.component.css']
})
export class AppRechercheCollegueParNomComponent implements OnInit {


  @Input() col:Collegue;
  collegues = [];

  constructor(private srv: DataService) { 
  
  }

  search: boolean = false;
  editer(){
    this.search = !this.search;
  }

 rechercher(nom:string){
    this.srv.rechercherParNom(nom);
 }
 

  ngOnInit() {
  }

}
