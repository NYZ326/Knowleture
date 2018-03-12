import { AppComponent } from './../app.component';
import { LoginComponent } from './../containers/login/login.component';
import { DashboardComponent } from './../containers/dashboard/dashboard.component';
import { DashboardHomeComponent } from './../containers/dashboard/components/dashboard-home/dashboard-home.component';
import { DashboardCourseComponent } from 'app/containers/dashboard/components/dashboard-course/dashboard-course.component';
import { NavigationComponent } from './../components/navigation/navigation.component';
import { CardsComponent } from 'app/components/cards/cards.component';

export const ComponentsList = [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    DashboardHomeComponent,
    DashboardCourseComponent,
    NavigationComponent,
    CardsComponent
];