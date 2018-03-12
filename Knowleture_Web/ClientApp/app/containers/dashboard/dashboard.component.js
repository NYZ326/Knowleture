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
const platform_browser_1 = require("@angular/platform-browser");
const app_dev_config_1 = require("app/core/configs/app.dev.config");
const authentication_service_1 = require("app/core/services/authentication.service");
const Models = require("app/shared/models/index");
let DashboardComponent = class DashboardComponent {
    constructor(config, authenticationService, titleService) {
        this.config = config;
        this.authenticationService = authenticationService;
        this.titleService = titleService;
        this.componentName = 'dashboard';
        this.activeView = 'Dashboard';
        this.userData = new Models.User();
        this.courseData = new Models.Course();
        this.assignmentData = new Models.Assignment();
        this.enrollmentData = new Models.Enrollment();
        this.titleService.setTitle('Dashboard - Knowleture');
        this.userData = authenticationService.user;
        this.userSubNav = this.setUserNav(this.userData.Role);
    }
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
};
DashboardComponent = __decorate([
    core_1.Component({
        moduleId: module.id.toString(),
        selector: 'dashboard',
        templateUrl: './dashboard.component.html'
    }),
    __metadata("design:paramtypes", [app_dev_config_1.AppConfig,
        authentication_service_1.AuthenticationService,
        platform_browser_1.Title])
], DashboardComponent);
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map