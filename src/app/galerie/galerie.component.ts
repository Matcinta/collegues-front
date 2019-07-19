import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-galerie',
  templateUrl: './galerie.component.html',
  styleUrls: ['./galerie.component.css']
})
export class GalerieComponent implements OnInit {


  constructor(private srv: DataService) {

  }

  collegues = [];

  ngOnInit() {
    this.srv.getAllColleguePhotos()
      .subscribe(collegues => this.collegues = collegues);

  }





}
