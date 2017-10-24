"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
const course_1 = require("./../../common/models/course");
let CourseViewComponent = class CourseViewComponent {
    // Constructor
    constructor(ngbModal) {
        this.ngbModal = ngbModal;
        // Attribute Variables
        this.courses = [];
        // Variables
        this.activeGrid = 'card';
        this.selectedCourses = 'All';
        this.selectedTerm = 'Select';
        this.activeFormSection = 0;
        this.notEmpty = false;
        this.courseObject = new course_1.Course();
        this.courseTerm = '';
    }
    // Functions
    open(content, config) {
        let modal = this.ngbModal.open(content, { windowClass: 'add-course-modal learnbook-modal learnbook-modal-long' });
        let instance = modal._windowCmptRef.instance;
        setImmediate(() => {
            instance.windowClass += ' modal-show';
        });
        let fx = modal._removeModalElements.bind(modal);
        modal._removeModalElements = () => {
            instance.windowClass = instance.windowClass.replace('modal-show', '');
            setTimeout(fx, 300);
        };
        modal.result.then((result) => {
            this.selectedTerm = 'Select';
            this.activeFormSection = 0;
        }, (reason) => {
            this.selectedTerm = 'Select';
            this.activeFormSection = 0;
        });
        return modal;
    }
    switchGridView(view) {
        this.activeGrid = view;
    }
    filterCourse(filter) {
        if (filter == null || filter == undefined) {
            this.selectedCourses = 'All';
        }
        else {
            this.selectedCourses = filter;
        }
    }
    selectTerm(term) {
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
};
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], CourseViewComponent.prototype, "courses", void 0);
CourseViewComponent = __decorate([
    core_1.Component({
        selector: 'course-view',
        templateUrl: './app/dashboard/partials/course.partial.component.html'
    }),
    core_1.Injectable(),
    __metadata("design:paramtypes", [ng_bootstrap_1.NgbModal])
], CourseViewComponent);
exports.CourseViewComponent = CourseViewComponent;
//# sourceMappingURL=course.partial.component.js.map