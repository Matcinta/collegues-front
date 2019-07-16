import { Component, OnInit } from '@angular/core';
import { collegueMock } from './mock/collegues.mock';

@Component({
  selector: 'app-root',
  templateUrl: './AppComponent.html',
  styles: []
})
export class AppComponent implements OnInit {
  title = 'collegues-front';

  collegues = collegueMock;

  

  ngOnInit(){

  }
}
