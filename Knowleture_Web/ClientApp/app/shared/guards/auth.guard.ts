import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthenticationService } from 'app/core/services/authentication.service';
import { User } from 'app/shared/models/user';

@Injectable()
export class AuthGuard implements CanActivate {
    /*
     * Constructor
     */
    constructor(private router: Router, private authenticationService: AuthenticationService) {

    }


    /*
     * Functions
     */
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (localStorage.getItem('currentUser')) {
            this.authenticationService.user = JSON.parse(localStorage.getItem('currentUser'));
            return true;
        }

        this.authenticationService.user = <User>{};
        setTimeout(() => {
            this.router.navigate(['/'], {
                queryParams: {
                    returnUrl: state.url
                }
            });
        }, 150);

        return false;
    }
}