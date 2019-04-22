import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';


@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        // localStorage.removeItem('myLogIn');
        if (localStorage.getItem('myLogIn')) {
            return true;
        }
        this.router.navigate(['/login']);
        console.log('rediect to login');
        return false;

    }
}


