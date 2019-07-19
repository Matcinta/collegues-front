import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../services/data.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Collegue } from '../models/Collegue';

@Component({
  selector: 'app-detail-collegue',
  templateUrl: './detail-collegue.component.html',
  styleUrls: ['./detail-collegue.component.css']
})
export class DetailCollegueComponent implements OnInit {

  col: Collegue;
  matricule: string;

  constructor(private srv: DataService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.matricule = params.get('matricule');
      this.srv.rechercherParMatricule(this.matricule)
      .subscribe(collegue => this.col = collegue);
    });
    
  }

  
    

}

