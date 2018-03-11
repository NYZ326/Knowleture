import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from './../../core/services/authentication.service';

@Component({
    moduleId: module.id.toString(),
    selector: 'navigation',
    templateUrl: './navigation.component.html'
})

export class NavigationComponent implements OnInit {
    /*
     * Properties
     */
    userData: any;


    /*
     * Constructor
     */
    constructor(private authenticationService: AuthenticationService) {
        this.userData = authenticationService.user;
    }


    /*
     * Functions
     */
    ngOnInit() {
        console.log('NavigationComponent -> ngOnInit');
    }
}