import { Component, OnInit, Input } from '@angular/core';
import * as _ from 'lodash';

import { LearnbookConfig } from './../common/config/learnbook.config';
import { UserSpecs } from './../common/models/userSpecs';
import { ApiService } from './../common/services/api.service';

@Component({
    selector: 'dashboard',
    templateUrl: './app/dashboard/dashboard.component.html'
})

export class DashboardComponent implements OnInit {
    // Variables
    @Input()
    specs: UserSpecs;

    config = LearnbookConfig;
    activeId = 0;
    activeNavType: string = 'Courses';
    dashboardLoading: boolean = false;

    // Data Variables
    courseData: Array<any> = [];
    assignmentData: Array<any> = [];

    // Constructor
    constructor(private _apiService: ApiService) {

    }


    // Initialization
    ngOnInit() {
        this.dashboardLoading = true;

        this._apiService.getCourses(this.specs.userRole, this.specs.userName)
            .subscribe((data: any) => {
                this.courseData = data;

                this._apiService.getAssignments()
                    .subscribe((assignmentResponseData: any) => {
                        this.assignmentData = assignmentResponseData;
                    });

                this.dashboardLoading = false;
            });
    }


    // Functions
    selectNav(id: number, viewType: string) {
        this.activeId = id;
        this.activeNavType = viewType;
    }
}