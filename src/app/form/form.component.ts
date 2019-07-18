import { Component, OnInit, Input } from '@angular/core';
import { Collegue } from '../models/Collegue';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  col = new Collegue();
  @Input() matricule: string;
  constructor(private srv: DataService) { }

  submit(){
    this.srv.modifierCollegue(this.matricule, this.col.email, this.col.photoUrl)
    .subscribe(collegue => this.srv.publier(collegue))
  }

  ngOnInit() {
  }

}
