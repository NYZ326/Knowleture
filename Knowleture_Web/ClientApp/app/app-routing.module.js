"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = require("@angular/router");
const login_component_1 = require("./modules/login/login/login.component");
const dashboard_component_1 = require("./modules/dashboard/dashboard/dashboard.component");
const auth_guard_1 = require("./shared/guards/auth.guard");
const appRoutes = [
    { path: '', component: login_component_1.LoginComponent },
    { path: 'dashboard', component: dashboard_component_1.DashboardComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: '**', redirectTo: '' }
];
exports.Routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app-routing.module.js.map