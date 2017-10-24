import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

export function main(userSettings: any) {
    platformBrowserDynamic([{ provide: 'userSettings', useValue: userSettings }]).bootstrapModule(AppModule);
}