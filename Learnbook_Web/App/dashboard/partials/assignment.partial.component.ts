import { Component, Input } from '@angular/core';

@Component({
    selector: 'assignment-view',
    templateUrl: './app/dashboard/partials/assignment.partial.component.html'
})

export class AssignmentViewComponent{
    // Attribute Variables
    @Input()
    assignments: Array<any> = [];
    @Input()
    courses: Array<any> = [];


    // Variables
    selectedCourseAssignments: string = 'All';


    // Constructor
    constructor() {
        
    }


    // Functions
    filterCourseAssignments(filter: string) {
        if (filter == null || filter == undefined) {
            this.selectedCourseAssignments = 'All';
        }
        else {
            this.selectedCourseAssignments = filter;
        }
    }
}