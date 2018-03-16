"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const common_1 = require("@angular/common");
const app_routing_module_1 = require("app/app-routing.module");
const cards_component_1 = require("./cards/cards.component");
const navigation_component_1 = require("./navigation/navigation.component");
let ComponentsModule = class ComponentsModule {
};
ComponentsModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            app_routing_module_1.Routing
        ],
        declarations: [
            cards_component_1.CardsComponent,
            navigation_component_1.NavigationComponent
        ],
        exports: [
            cards_component_1.CardsComponent,
            navigation_component_1.NavigationComponent
        ]
    })
], ComponentsModule);
exports.ComponentsModule = ComponentsModule;
//# sourceMappingURL=components.module.js.map