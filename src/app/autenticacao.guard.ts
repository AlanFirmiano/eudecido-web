import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from 'rxjs/Rx';

@Injectable()
export class AutenticacaoGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) : Observable<boolean> | boolean {

    if (localStorage.getItem('token')) {
      return true;
    }

    this.router.navigate(['/lista'], { queryParams: { returnUrl: state.url }});
    return false;
  }
}