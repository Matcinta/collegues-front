import { Component, OnInit } from '@angular/core';
import { collegueMock } from './mock/collegues.mock';
import { matriculesMock } from './mock/matricules.mock';

@Component({
  selector: 'app-root',
  templateUrl: './AppComponent.html',
  styles: []
})
export class AppComponent implements OnInit {
  title = 'collegues-front';

  collegues = collegueMock;
  matricules = matriculesMock;

  

  ngOnInit(){

  }
}
