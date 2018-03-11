import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './views/login/login.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { AuthGuard } from './shared/guards/auth.guard';

const appRoutes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },

    // Otherwise redirect to Login
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);