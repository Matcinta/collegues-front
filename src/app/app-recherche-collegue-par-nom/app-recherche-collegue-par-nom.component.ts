import { Component, OnInit, Input } from '@angular/core';
import {matriculesMock} from '../mock/matricules.mock';

@Component({
  selector: 'app-recherche-collegue-par-nom',
  templateUrl: './app-recherche-collegue-par-nom.component.html',
  styleUrls: ['./app-recherche-collegue-par-nom.component.css']
})
export class AppRechercheCollegueParNomComponent implements OnInit {

  @Input() mat:string;

  constructor() { }
  matricules = [];


  search: boolean = false;
  editer(){
    this.search = !this.search;
  }

 rechercher(){
    this.matricules = matriculesMock;
 }

  ngOnInit() {
  }

}
