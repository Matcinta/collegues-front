import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Collegue } from '../models/Collegue';

@Component({
  selector: 'app-detail-collegue',
  templateUrl: './detail-collegue.component.html',
  styleUrls: ['./detail-collegue.component.css']
})

export class DetailCollegueComponent implements OnInit {
  collegue: Collegue;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService
    .abonnement()
    .subscribe(collegueSelect => (this.collegue = collegueSelect));
  }

}
