import { Component, OnInit, Inject } from '@angular/core';

import { LearnbookConfig } from './common/config/learnbook.config';
import { UserSpecs } from './common/models/userSpecs';
import { ApiService } from './common/services/api.service';

@Component({
    selector: 'learnbook-app',
    templateUrl: './app/app.component.html', 
    providers: [ApiService]
})

export class AppComponent implements OnInit {
    userSpecs: UserSpecs = {
        userName: this._userSettings.id,
        userRole: this._userSettings.role
    }
    user: Object = {};

    constructor( @Inject('userSettings') public _userSettings: any, private _apiService: ApiService) {

    }

    ngOnInit() {
        console.log('LearnbookApp -> ngOnInit');
        this._apiService.getUser(this.userSpecs.userName)
            .subscribe((data: any) => {
                this.user = data;
                console.log(this.user);
            });
    }
}