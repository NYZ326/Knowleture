import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { AppConfig } from 'app/core/configs/app.dev.config';
import { AuthenticationService } from 'app/core/services/authentication.service';
import { CoursesService } from 'app/modules/api/courses/courses.service';

import { User } from 'app/shared/models/user';
import { Course } from 'app/shared/models/course';
import { Assignment } from 'app/shared/models/assignment';
import { Enrollment } from 'app/shared/models/enrollment';

@Component({
    moduleId: module.id.toString(),
    selector: 'dashboard',
    templateUrl: './dashboard.component.html'
})

export class DashboardComponent implements OnInit {
    // Properties
    userData: User;
    courseData: Array<Course>;
    assignmentData: Array<Assignment>;
    enrollmentData: Array<Enrollment>;
    userNav: Array<any>;
    componentName: string = 'dashboard';
    activeView: string = 'Dashboard';


    constructor(
        private config: AppConfig,
        private authenticationService: AuthenticationService,
        private coursesService: CoursesService,
        private titleService: Title
    ) {
        this.titleService.setTitle('Dashboard - Knowleture');
        this.userData = authenticationService.user;

        this.userNav = this.setUserNav(this.userData.role);
    }


    // Functions
    ngOnInit() {
        this.coursesService.getCourses(this.userData)
            .subscribe(data => {
                const scope = this;

                scope.courseData = data;
                console.log(scope.courseData);
            })
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