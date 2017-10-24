"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
const app_module_1 = require("./app.module");
function main(userSettings) {
    platform_browser_dynamic_1.platformBrowserDynamic([{ provide: 'userSettings', useValue: userSettings }]).bootstrapModule(app_module_1.AppModule);
}
exports.main = main;
//# sourceMappingURL=main.js.map