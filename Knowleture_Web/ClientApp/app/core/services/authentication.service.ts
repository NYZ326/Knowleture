import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { AppConfig } from './../configs/app.dev.config';
import { User } from './../../shared/models/user';
import { AuthGuard } from './../../shared/guards/auth.guard';

@Injectable()
export class AuthenticationService {
    /*
     * Properties
     */
    user: User = new User();


    /*
     * Constructors
     */
    constructor(private http: HttpClient, private config: AppConfig) {

    }


    /*
     * Functions
     */
    login(userModal: any) {
        return this.http.post(this.config.apiUrl + 'authorize/login', { Username: userModal.Username, Password: userModal.Password })
            .map(data => {
                let userData = data;

                if (userData) {
                    this.user = userData as User;
                    localStorage.setItem('currentUser', JSON.stringify(userData));
                }
            });
    }


    logout() {
        this.user = <User>{};
        localStorage.removeItem('currentUser');
    }
}