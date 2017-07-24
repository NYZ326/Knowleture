import { Component, Input } from '@angular/core';

import { UserSpecs } from './../../common/models/userSpecs';

@Component({
    selector: 'course-view',
    templateUrl: './app/dashboard/partials/course.partial.component.html'
})

export class CourseViewComponent{
    // Attribute Variables
    @Input()
    courses: Array<any> = [];

    // Variables
    activeGrid: string = 'card';
    selectedCourses: string = 'All';

    // Constructor
    constructor() {

    }

    // Functions
    switchGridView(view: string) {
        this.activeGrid = view;
    }

    filterCourse(filter: string) {
        if (filter == null || filter == undefined) {
            this.selectedCourses = 'All';
        }
        else {
            this.selectedCourses = filter;
        }
    }
}