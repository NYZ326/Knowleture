import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';

import './icons';
import './assets/styles/Site.scss';

import { AppModule } from './app/app.module';

if (process.env.ENV === 'production') {
    enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);

if (module['hot']) {
    module['hot'].accept();
} 