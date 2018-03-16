import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Directives
import { InputActionDirective } from './input-action/input-action.directive';

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [
        InputActionDirective
    ],
    exports: [
        InputActionDirective
    ]
})

export class DirectivesModule { }