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
const course_d_1 = require("./../../common/models/course.d");
let CourseViewComponent = class CourseViewComponent {
    // Constructor
    constructor() {
        // Attribute Variables
        this.courses = [];
        // Variables
        this.activeGrid = 'card';
        this.selectedCourses = 'All';
        this.activeFormSection = 0;
        this.courseObject = new course_d_1.Course();
    }
    // Functions
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
    prevSection() {
        this.activeFormSection--;
    }
    nextSection() {
        this.activeFormSection++;
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
    __metadata("design:paramtypes", [])
], CourseViewComponent);
exports.CourseViewComponent = CourseViewComponent;
//# sourceMappingURL=course.partial.component.js.map