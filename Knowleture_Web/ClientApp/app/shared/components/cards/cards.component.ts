import { Component, Input } from '@angular/core';

@Component({
    moduleId: module.id.toString(),
    selector: 'card',
    templateUrl: './cards.component.html'
})

export class CardsComponent {
    /*
     * Properties
     */
    @Input() type: string;
    @Input() width: number;
    @Input() data: any;

    /*
     * Constructor
     */
    constructor() {

    }


    /*
     * Functions
     */
}