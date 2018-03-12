import { Component, Input } from '@angular/core';

import { AuthenticationService } from 'app/core/services/authentication.service';

@Component({
    moduleId: module.id.toString(),
    selector: 'dashboard-home',
    templateUrl: './dashboard-home.component.html'
})

export class DashboardHomeComponent {
    /*
     * Properties
     */
    userData: any;


    /*
     * Constructor
     */
    constructor(private authenticationService: AuthenticationService) {
        this.userData = authenticationService.user;
    }


    /*
     * Functions
     */

}