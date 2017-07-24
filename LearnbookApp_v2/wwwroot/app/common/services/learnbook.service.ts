import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { LearnbookConfig } from './../config/learnbook.config';

@Injectable()

export class LearnbookService {
    constructor(private _http: Http) {
        
    }
}