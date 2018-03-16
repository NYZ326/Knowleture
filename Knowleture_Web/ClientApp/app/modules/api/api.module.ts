import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Common Imports

// Services
import { CoursesService } from './courses/courses.service';

@NgModule({
    imports: [
        CommonModule
    ],
    providers: [
        CoursesService
    ]
})

export class ApiModule { }