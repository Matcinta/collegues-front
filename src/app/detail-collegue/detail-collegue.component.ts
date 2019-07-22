import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from '../services/data.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Collegue } from '../models/Collegue';
import {Comment} from '../models/Comment';

@Component({
  selector: 'app-detail-collegue',
  templateUrl: './detail-collegue.component.html',
  styleUrls: ['./detail-collegue.component.css']
})

export class DetailCollegueComponent implements OnInit {

  col: Collegue = new Collegue();
  matricule: string;
  texteService: string[] = [];

  @Output() texteSaisiEvt: EventEmitter<string> = new EventEmitter();
  comments=this.srv.getAllComments();
  comment: Comment = new Comment();
  newComment = false;

  constructor(private srv: DataService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.matricule = params.get('matricule');
      this.srv.rechercherParMatricule(this.matricule)
      .subscribe(collegue => this.col = collegue);
    });
    
  }

  recupComs() {
    return [...this.srv.coms];
  }

  validerTexte(saisieTexte: HTMLInputElement) {
    this.texteSaisiEvt.emit(saisieTexte.value);
    saisieTexte.value = '';
    saisieTexte.focus();
  }

  addComment(){
    if(this.comment.message != ''){
      this.srv.addComment({
        message: this.comment.message});
      this.comments=this.srv.getAllComments();
      this.comment.message='';
    }
  }
  
    

}

