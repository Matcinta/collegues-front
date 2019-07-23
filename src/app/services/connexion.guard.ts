import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ConnexionGuard implements CanActivate  {

  constructor(private router: Router, private authService: AuthService) { }
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if(!this.authService.isConnected()){
      this.router.navigate(['/login']);
    }
    return this.authService.isConnected();
  }
}
  

