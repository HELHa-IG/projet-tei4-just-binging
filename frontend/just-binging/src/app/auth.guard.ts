import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';

import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private userService: UserService) { }

  canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const wallet = this.userService.walletValue;
    if (wallet) return true;
    this.router.navigateByUrl('/login');
    return false;
  }
  
}
