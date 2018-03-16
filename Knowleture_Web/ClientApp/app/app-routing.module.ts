import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './modules/login/login/login.component';
import { DashboardComponent } from './modules/dashboard/dashboard/dashboard.component';
import { AuthGuard } from './shared/guards/auth.guard';

const appRoutes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },

    // Otherwise redirect to Login
    { path: '**', redirectTo: '' }
];

export const Routing = RouterModule.forRoot(appRoutes);