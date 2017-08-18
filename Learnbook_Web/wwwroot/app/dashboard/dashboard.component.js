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
const learnbook_config_1 = require("./../common/config/learnbook.config");
const userSpecs_1 = require("./../common/models/userSpecs");
const api_service_1 = require("./../common/services/api.service");
let DashboardComponent = class DashboardComponent {
    // Constructor
    constructor(_apiService) {
        this._apiService = _apiService;
        this.config = learnbook_config_1.LearnbookConfig;
        this.activeId = 0;
        this.activeNavType = 'Courses';
        this.dashboardLoading = false;
        // Data Variables
        this.courseData = [];
        this.assignmentData = [];
    }
    // Initialization
    ngOnInit() {
        this.dashboardLoading = true;
        this._apiService.getCourses(this.specs.userRole, this.specs.userName)
            .subscribe((data) => {
            this.courseData = data;
            //this.dashboardLoading = false;
        });
    }
    // Functions
    selectNav(id, viewType) {
        this.activeId = id;
        this.activeNavType = viewType;
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", userSpecs_1.UserSpecs)
], DashboardComponent.prototype, "specs", void 0);
DashboardComponent = __decorate([
    core_1.Component({
        selector: 'dashboard',
        templateUrl: './app/dashboard/dashboard.component.html'
    }),
    __metadata("design:paramtypes", [api_service_1.ApiService])
], DashboardComponent);
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map