import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

//const platform = platformBrowserDynamic();

//platform.bootstrapModule(AppModule);

export function main(userSettings: any) {
    platformBrowserDynamic([{ provide: 'userSettings', useValue: userSettings }]).bootstrapModule(AppModule);
}