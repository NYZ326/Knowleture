"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
const core_1 = require("@angular/core");
require("./icons");
require("./assets/styles/Site.scss");
const app_module_1 = require("./app/app.module");
if (process.env.ENV === 'production') {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
if (module['hot']) {
    module['hot'].accept();
}
//# sourceMappingURL=main.js.map