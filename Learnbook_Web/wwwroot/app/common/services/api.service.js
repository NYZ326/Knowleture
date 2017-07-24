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
const http_1 = require("@angular/http");
const Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
const learnbook_config_1 = require("./../config/learnbook.config");
let ApiService = class ApiService {
    constructor(_http) {
        this._http = _http;
        this.apiUrl = learnbook_config_1.LearnbookConfig.apiUrl;
    }
    // Service Calls
    getUser(name) {
        return this._http.get(this.apiUrl + 'user/' + name)
            .map((response) => response.json())
            .catch(this.handleError);
    }
    getCourses(role, name) {
        return this._http.get(this.apiUrl + 'course/' + role + '/' + name)
            .map((response) => response.json())
            .catch(this.handleError);
    }
    // Functions
    handleError(error) {
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || 'Server Error');
    }
};
ApiService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ApiService);
exports.ApiService = ApiService;
//# sourceMappingURL=api.service.js.map