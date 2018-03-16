import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

import { AuthenticationService } from 'app/core/services/authentication.service';

@Component({
    moduleId: module.id.toString(),
    selector: 'navigation',
    templateUrl: './navigation.component.html'
})

export class NavigationComponent implements OnInit {
    /*
     * Properties
     */
    @Input() parentComponent: any;
    @Input() navLinks: any;
    @Input() activeNavItem: any;

    @Output() activeNavItemChange = new EventEmitter<string>();

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

    setActiveNav(name: string) {
        this.activeNavItem = name;
        this.activeNavItemChange.emit(name);
    }
}