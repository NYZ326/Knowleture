import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { LearnbookConfig } from './../config/learnbook.config';

@Injectable()

export class ApiService {
    apiUrl = LearnbookConfig.apiUrl;

    constructor(private _http: Http) {

    }


    // Service Calls
    getUser(name: string): Observable<any> {
        return this._http.get(this.apiUrl + 'user/' + name)
            .map((response: Response) => <any>response.json())
            .catch(this.handleError);
    }


    getCourses(role: string, name: string): Observable<any> {
        return this._http.get(this.apiUrl + 'course/' + role + '/' + name)
            .map((response: Response) => <any>response.json())
            .catch(this.handleError);
    }


    // Functions
    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server Error');
    }
}