import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id.toString(),
    selector: 'knowleture-app',
    templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {
    constructor() {

    }

    ngOnInit() {
        console.log('KnowletureApp -> ngOnInit');
    }
}