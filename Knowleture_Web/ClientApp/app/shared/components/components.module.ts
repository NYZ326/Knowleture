import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Common Imports
import { Routing } from 'app/app-routing.module';

// Components
import { CardsComponent } from './cards/cards.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
    imports: [
        CommonModule,
        Routing
    ],
    declarations: [
        CardsComponent,
        NavigationComponent
    ],
    exports: [
        CardsComponent,
        NavigationComponent
    ]
})

export class ComponentsModule { }