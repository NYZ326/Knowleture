import { Directive, ElementRef, HostListener, Input, OnChanges } from '@angular/core';

@Directive({
    selector: '[checkInput]'
})
export class InputActionDirective implements OnChanges {
    @Input() public value: any;

    hasInput: boolean = false;

    /*
     * Constructor
     */
    constructor(private element: ElementRef) {

    }

    /*
     * Functions
     */
    ngOnChanges(changes) {
        if (changes.value.currentValue.length > 0) {
            this.hasInput = true;
        }
        else {
            this.hasInput = false;
        }
    }

    @HostListener('focus') onFocus() {
        this.element.nativeElement.parentElement.classList.add('form-control--has-input');
    }

    @HostListener('focusout') onFocusOut() {
        if (!this.hasInput) {
            this.element.nativeElement.parentElement.classList.remove('form-control--has-input');
        }
    }
}