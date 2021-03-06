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
const authentication_service_1 = require("app/core/services/authentication.service");
let DashboardCourseComponent = class DashboardCourseComponent {
    constructor(authenticationService) {
        this.authenticationService = authenticationService;
        this.userData = authenticationService.user;
    }
};
DashboardCourseComponent = __decorate([
    core_1.Component({
        moduleId: module.id.toString(),
        selector: 'dashboard-course',
        templateUrl: './dashboard-course.component.html'
    }),
    __metadata("design:paramtypes", [authentication_service_1.AuthenticationService])
], DashboardCourseComponent);
exports.DashboardCourseComponent = DashboardCourseComponent;
//# sourceMappingURL=dashboard-course.component.js.map