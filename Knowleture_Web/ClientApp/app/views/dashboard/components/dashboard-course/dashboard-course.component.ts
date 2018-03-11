import { Component, Input } from '@angular/core';

import { AuthenticationService } from 'app/core/services/authentication.service';

@Component({
    moduleId: module.id.toString(),
    selector: 'dashboard-course',
    templateUrl: './dashboard-course.component.html'
})

export class DashboardCourseComponent {
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