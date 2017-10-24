"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const platform_browser_1 = require("@angular/platform-browser");
const http_1 = require("@angular/http");
const forms_1 = require("@angular/forms");
const ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
const app_routing_module_1 = require("./app-routing.module");
const learnbook_service_1 = require("./common/services/learnbook.service");
// App Components
const app_component_1 = require("./app.component");
const dashboard_component_1 = require("./dashboard/dashboard.component");
const navigation_component_1 = require("./navigation/navigation.component");
const course_partial_component_1 = require("./dashboard/partials/course.partial.component");
const assignment_partial_component_1 = require("./dashboard/partials/assignment.partial.component");
// App Custom Pipes
const course_filter_1 = require("./common/pipes/course.filter");
const reverse_pipe_1 = require("./common/pipes/reverse.pipe");
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            http_1.HttpModule,
            forms_1.FormsModule,
            app_routing_module_1.AppRoutingModule,
            ng_bootstrap_1.NgbModule.forRoot()
        ],
        declarations: [
            app_component_1.AppComponent,
            dashboard_component_1.DashboardComponent,
            navigation_component_1.NavigationComponent,
            course_partial_component_1.CourseViewComponent,
            assignment_partial_component_1.AssignmentViewComponent,
            course_filter_1.FilterCoursePipe,
            reverse_pipe_1.ReversePipe
        ],
        bootstrap: [app_component_1.AppComponent],
        providers: [
            learnbook_service_1.LearnbookService
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map