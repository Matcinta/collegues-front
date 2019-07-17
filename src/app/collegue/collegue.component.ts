import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Collegue } from '../models/Collegue';
import { DataService } from '../services/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})
export class CollegueComponent implements OnInit, OnDestroy {

  @Input()
  col: Collegue;
  
  actionSub: Subscription

  constructor(private srv: DataService) {
    
   }


  modeEdition: boolean = false;

  editer() {
    this.modeEdition = !this.modeEdition;
  }

  ngOnInit() {
    this.actionSub = this.srv.subCollegueSelectionne.subscribe(
      (collegue: Collegue) => {
        this.col = collegue;
      });   
  }

  ngOnDestroy(){
    this.actionSub.unsubscribe();
  }

}
