import { Component, OnInit } from '@angular/core';
import { DataService } from '../app/services/data.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './AppComponent.html',
  styles: []
})
export class AppComponent implements OnInit {
  title = 'collegues-front';
  
  constructor(private srv: DataService, private http: HttpClient, private router: Router) {
  
  }

  ngOnInit(){

  }

  connectedMode(){

  }

  


}
