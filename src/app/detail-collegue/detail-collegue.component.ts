import { Component, OnInit, Input } from '@angular/core';
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
  comments=[];
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

  addComment(){
    if(this.comment.message != ''){
      this.comment.id= this.comments.length+1;
      this.comments.push({
        id:this.comment.id,
        message:this.comment.message}
        );
        this.comment.message='';
    }
  }
  
    

}

