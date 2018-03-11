import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    moduleId: module.id.toString(),
    selector: 'sub-navigation',
    templateUrl: './sub-navigation.component.html'
})

export class SubNavigationComponent {
    /*
     * Properties
     */
    @Input() parentComponent: any;
    @Input() navLinks: any;
    @Input() activeNavItem: any;

    @Output() activeNavItemChange = new EventEmitter<string>();

    /*
     * Constructor
     */
    constructor() {

    }


    /*
     * Functions
     */
    setActiveNav(name:string) {
        this.activeNavItem = name;
        this.activeNavItemChange.emit(name);
    }
}