import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// App Core
import { AppComponent } from './app.component';
import { routing } from './app-routing.module';
import { AppConfig } from './core/configs/app.dev.config';
import { AuthGuard } from './shared/guards/auth.guard';

// Services
import { AuthenticationService } from './core/services/authentication.service';

// Components List
import { ComponentsList } from './constants/components';

// Directives List
import { DirectivesList } from './constants/directives';


@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        routing
    ],
    declarations: [
        ...ComponentsList,
        ...DirectivesList
    ],
    providers: [
        Title,
        AppConfig,
        AuthGuard,
        AuthenticationService
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }