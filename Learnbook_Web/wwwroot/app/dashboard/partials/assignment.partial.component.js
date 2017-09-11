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
let AssignmentViewComponent = class AssignmentViewComponent {
    // Constructor
    constructor() {
        // Attribute Variables
        this.assignments = [];
        this.courses = [];
        // Variables
        this.selectedCourseAssignments = 'All';
    }
    // Functions
    filterCourseAssignments(course) {
        if (course == null || course == undefined) {
            this.selectedCourseAssignments = 'All';
        }
        else {
            this.selectedCourseAssignments = course.Code + ' ' + course.CourseId;
        }
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], AssignmentViewComponent.prototype, "assignments", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], AssignmentViewComponent.prototype, "courses", void 0);
AssignmentViewComponent = __decorate([
    core_1.Component({
        selector: 'assignment-view',
        templateUrl: './app/dashboard/partials/assignment.partial.component.html'
    }),
    __metadata("design:paramtypes", [])
], AssignmentViewComponent);
exports.AssignmentViewComponent = AssignmentViewComponent;
//# sourceMappingURL=assignment.partial.component.js.map