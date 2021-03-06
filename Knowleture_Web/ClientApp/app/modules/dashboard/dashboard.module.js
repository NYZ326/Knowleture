"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const common_1 = require("@angular/common");
const api_module_1 = require("app/modules/api/api.module");
const components_module_1 = require("app/shared/components/components.module");
const directives_module_1 = require("app/shared/directives/directives.module");
const dashboard_component_1 = require("./dashboard/dashboard.component");
const dashboard_home_component_1 = require("./dashboard/components/dashboard-home/dashboard-home.component");
const dashboard_course_component_1 = require("./dashboard/components/dashboard-course/dashboard-course.component");
let DashboardModule = class DashboardModule {
};
DashboardModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            api_module_1.ApiModule,
            components_module_1.ComponentsModule,
            directives_module_1.DirectivesModule
        ],
        declarations: [
            dashboard_component_1.DashboardComponent,
            dashboard_home_component_1.DashboardHomeComponent,
            dashboard_course_component_1.DashboardCourseComponent
        ],
        exports: [
            dashboard_component_1.DashboardComponent,
            dashboard_home_component_1.DashboardHomeComponent,
            dashboard_course_component_1.DashboardCourseComponent
        ]
    })
], DashboardModule);
exports.DashboardModule = DashboardModule;
//# sourceMappingURL=dashboard.module.js.map