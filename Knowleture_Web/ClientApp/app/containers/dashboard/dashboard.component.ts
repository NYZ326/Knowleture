import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { AppConfig } from 'app/core/configs/app.dev.config';
import { AuthenticationService } from 'app/core/services/authentication.service';
import * as Models from 'app/shared/models/index';

@Component({
    moduleId: module.id.toString(),
    selector: 'dashboard',
    templateUrl: './dashboard.component.html'
})

export class DashboardComponent implements OnInit {
    /*
     * Properties
     */
    componentName: string = 'dashboard';
    activeView: string = 'Dashboard';

    userData = new Models.User();
    courseData = new Models.Course();
    assignmentData = new Models.Assignment();
    enrollmentData = new Models.Enrollment();
    userSubNav: Array<any>;

    /*
     * Constructor
     */
    constructor(
        private config: AppConfig,
        private authenticationService: AuthenticationService,
        private titleService: Title
    ) {
        this.titleService.setTitle('Dashboard - Knowleture');
        this.userData = authenticationService.user;

        this.userSubNav = this.setUserNav(this.userData.Role);
    }


    /*
     * Functions
     */
    ngOnInit() {
        console.log('dashboard');
    }


    setUserNav(role) {
        switch (role) {
            case 'Instructor':
                return this.config.instructorConfig.nav;
            case 'Student':
                return this.config.studentConfig.nav;
            default:
                break;
        }
    }

    activeViewChange(event) {
        this.activeView = event;
    }

}