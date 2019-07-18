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
  col: Collegue = new Collegue();
  
  
  actionSub: Subscription

  modeEdition: boolean = false;
  modeCreation: boolean = false;

  constructor(private srv: DataService) {
    
   }




  ngOnInit() {
    this.actionSub = this.srv.subCollegueSelectionne.subscribe(
      (collegue: Collegue) => {
        this.col = collegue;
        this.modeEdition=false;
        this.modeCreation=false;
      });   
  }

  editer() {
    this.modeEdition = !this.modeEdition;
  }

  creer(){
    this.modeCreation = !this.modeCreation;
  }

  ngOnDestroy(){
    this.actionSub.unsubscribe();
  }

  

}
