import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { AppConfig } from 'app/core/configs/app.dev.config';
import { Course } from 'app/shared/models/course';

@Injectable()
export class CoursesService {
    // Properties
    courses: Array<Course>;


    constructor(private http: HttpClient, private config: AppConfig) {

    }


    // Functions
    getCourses(userData: any) {
        return this.http.get(`${this.config.apiUrl}/course/${userData.role.toLowerCase()}/${userData.id}`)
            .map(data => {
                let courseData = data;

                if (courseData) {
                    this.courses = courseData as Array<Course>;
                    return this.courses;
                }
            });
    }
}