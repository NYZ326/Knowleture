import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'navigation',
    templateUrl: './app/navigation/navigation.component.html'
})

export class NavigationComponent implements OnInit {
    @Input()
    data: Object = {};

    constructor() {

    }

    ngOnInit() {
        console.log('NavigationComponent -> ngOnInit');
    }
}