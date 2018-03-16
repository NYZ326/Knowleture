import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Common Imports
import { DirectivesModule } from 'app/shared/directives/directives.module';

import { LoginComponent } from './login/login.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        DirectivesModule
    ],
    declarations: [
        LoginComponent
    ],
    exports: [
        LoginComponent
    ]
})

export class LoginModule { }