import { Component, OnInit, Input } from '@angular/core';
import { Collegue } from '../models/Collegue';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-form-creer-collegue',
  templateUrl: './form-creer-collegue.component.html',
  styleUrls: ['./form-creer-collegue.component.css']
})
export class FormCreerCollegueComponent implements OnInit {

  @Input()
  col: Collegue = new Collegue();


  constructor(private srv: DataService) { }

  ngOnInit() {
  }

  submit(){
  this.srv.ajouterCollegue(this.col.nom, this.col.prenom, this.col.email, this.col.dateDeNaissance, this.col.photoUrl)
    .subscribe(collegue => this.srv.publier(collegue))
  }

}
