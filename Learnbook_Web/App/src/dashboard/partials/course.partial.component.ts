import { Component, Input, Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as $ from 'jquery';

import { UserSpecs } from './../../common/models/userSpecs';
import { Course } from './../../common/models/course';

@Component({
    selector: 'course-view',
    templateUrl: './app/dashboard/partials/course.partial.component.html'
})

@Injectable()
export class CourseViewComponent {
    // Attribute Variables
    @Input()
    courses: Array<any> = [];

    // Variables
    activeGrid: string = 'card';
    selectedCourses: string = 'All';
    selectedTerm: string = 'Select';
    activeFormSection: number = 0;
    notEmpty: boolean = false;

    courseObject: Course = new Course();
    courseTerm: string = '';

    // Constructor
    constructor(private ngbModal: NgbModal) {

    }

    // Functions
    open(content: any, config?: any) {
        let modal = this.ngbModal.open(content, { windowClass: 'add-course-modal learnbook-modal learnbook-modal-long' });
        let instance = (modal as any)._windowCmptRef.instance;
        setImmediate(() => {
            instance.windowClass += ' modal-show'
        });

        let fx = (modal as any)._removeModalElements.bind(modal);
        (modal as any)._removeModalElements = () => {
            instance.windowClass = instance.windowClass.replace('modal-show', '');
            setTimeout(fx, 300);
        }

        modal.result.then((result) => {
            this.selectedTerm = 'Select';
            this.activeFormSection = 0;
        }, (reason) => {
            this.selectedTerm = 'Select';
            this.activeFormSection = 0;
        });

        return modal;
    }


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


    selectTerm(term: string) {
        this.selectedTerm = term;
        const termResults = term.split(' ');

        this.courseObject.term = termResults[0];
        this.courseObject.year = parseInt(termResults[1], 10);
        this.log();
    }


    prevSection() {
        this.activeFormSection--;
    }


    nextSection() {
        this.activeFormSection++;
    }


    checkInputValue() {
        if (this.courseTerm != '') {
            this.notEmpty = true;
        }
        else {
            this.notEmpty = false;
        }
    }


    log() {
        console.log(this.courseObject);
    }
}