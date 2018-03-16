import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// App Core
import { AppComponent } from './app.component';
import { Routing } from './app-routing.module';
import { ComponentsModule } from 'app/shared/components/components.module';
import { DirectivesModule } from 'app/shared/directives/directives.module';
import { AppConfig } from './core/configs/app.dev.config';
import { AuthGuard } from './shared/guards/auth.guard';
import { AuthenticationService } from './core/services/authentication.service';

// Feature Modules
import { ApiModule } from './modules/api/api.module';
import { LoginModule } from './modules/login/login.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';


@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        Routing,
        ComponentsModule,
        DirectivesModule,
        ApiModule,
        LoginModule,
        DashboardModule
    ],
    declarations: [
        AppComponent
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