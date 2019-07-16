import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-recherche-collegue-par-nom',
  templateUrl: './app-recherche-collegue-par-nom.component.html',
  styleUrls: ['./app-recherche-collegue-par-nom.component.css']
})
export class AppRechercheCollegueParNomComponent implements OnInit {

  @Input() mat:string;
  matricules = [];

  constructor(private srv: DataService) { 
  
  }

  search: boolean = false;
  editer(){
    this.search = !this.search;
  }

 rechercher(){
    this.matricules = this.srv.rechercherParNom();
 }
 

  ngOnInit() {
  }

}
