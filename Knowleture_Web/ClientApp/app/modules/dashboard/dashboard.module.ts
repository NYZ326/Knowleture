import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Common Imports
import { ApiModule } from 'app/modules/api/api.module';
import { ComponentsModule } from 'app/shared/components/components.module';
import { DirectivesModule } from 'app/shared/directives/directives.module';

// Components
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardHomeComponent } from './dashboard/components/dashboard-home/dashboard-home.component';
import { DashboardCourseComponent } from './dashboard/components/dashboard-course/dashboard-course.component';

@NgModule({
    imports: [
        CommonModule,
        ApiModule,
        ComponentsModule,
        DirectivesModule
    ],
    declarations: [
        DashboardComponent,
        DashboardHomeComponent,
        DashboardCourseComponent
    ],
    exports: [
        DashboardComponent,
        DashboardHomeComponent,
        DashboardCourseComponent
    ]
})

export class DashboardModule { }