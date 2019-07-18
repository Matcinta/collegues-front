import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Collegue } from '../models/Collegue';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-form-creer-collegue',
  templateUrl: './form-creer-collegue.component.html',
  styleUrls: ['./form-creer-collegue.component.css']
})
export class FormCreerCollegueComponent implements OnInit {

  constructor(private srv: DataService) { }

  ngOnInit() {
  }

  @Input()
  col: Collegue = new Collegue();

  errorMessage: string;
  errorStatus: number;

  @Output() annuler = new EventEmitter<boolean>();

  clickAnnuler(){
    this.annuler.emit(true);
  }


  submit(){
  this.srv.ajouterCollegue(this.col.nom, this.col.prenom, this.col.email, this.col.dateDeNaissance, this.col.photoUrl)
    .subscribe(collegue => this.srv.publier(collegue),
    error => {console.log(error.error);
    if (error.status === 400){
      this.errorMessage = error.error;
      this.errorStatus = error.status;

    }

    }
    
    )
  }

}
