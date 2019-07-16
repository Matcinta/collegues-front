import { Component, OnInit, Input } from '@angular/core';
import { Collegue } from '../models/Collegue';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})
export class CollegueComponent implements OnInit {

  @Input() col: Collegue;
  collegue: Collegue;

  constructor(private srv: DataService) { }


  modeEdition: boolean = false;

  editer() {
    this.modeEdition = !this.modeEdition;
  }


  recuperer() {
    this.collegue = this.srv.recupererCollegueCourant();
  }
  ngOnInit() {
  }

}
