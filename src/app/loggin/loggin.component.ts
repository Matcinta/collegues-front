import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-loggin',
  templateUrl: './loggin.component.html',
  styleUrls: ['./loggin.component.css']
})
export class LogginComponent implements OnInit {

  loggedInMode: boolean = false;
  constructor(private srv: AuthService) { }

  ngOnInit() {
    this.loggedInMode = false;
  }

  loggedIn(){
    this.loggedInMode = !this.loggedInMode;
  }

  connexion(email: string, password: string){
    this.srv.authentifyUser(email, password)
    .subscribe(()=> this.loggedInMode = true);
    
  }

  


}
