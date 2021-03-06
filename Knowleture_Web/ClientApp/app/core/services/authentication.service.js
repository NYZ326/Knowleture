"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const http_1 = require("@angular/common/http");
require("rxjs/add/operator/map");
const app_dev_config_1 = require("app/core/configs/app.dev.config");
const user_1 = require("app/shared/models/user");
let AuthenticationService = class AuthenticationService {
    constructor(http, config) {
        this.http = http;
        this.config = config;
        this.user = new user_1.User();
    }
    login(userModal) {
        return this.http.post(this.config.apiUrl + 'authorize/login', { Username: userModal.Username, Password: userModal.Password })
            .map(data => {
            let userData = data;
            if (userData) {
                this.user = userData;
                localStorage.setItem('currentUser', JSON.stringify(userData));
            }
        });
    }
    logout() {
        this.user = {};
        localStorage.removeItem('currentUser');
    }
};
AuthenticationService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.HttpClient, app_dev_config_1.AppConfig])
], AuthenticationService);
exports.AuthenticationService = AuthenticationService;
//# sourceMappingURL=authentication.service.js.map