import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';

import { LearnbookService } from './common/services/learnbook.service';

// App Components
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavigationComponent } from './navigation/navigation.component';
import { CourseViewComponent } from './dashboard/partials/course.partial.component';
import { AssignmentViewComponent } from './dashboard/partials/assignment.partial.component';

// App Custom Pipes
import { filterCoursePipe } from './common/pipes/course.filter';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        AppRoutingModule,
        NgbModule.forRoot()
    ],
    declarations: [
        AppComponent,
        DashboardComponent,
        NavigationComponent,
        CourseViewComponent,
        AssignmentViewComponent,
        filterCoursePipe
    ],
    bootstrap: [AppComponent],
    providers: [
        LearnbookService
    ]
})

export class AppModule { }