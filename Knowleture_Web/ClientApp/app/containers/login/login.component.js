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
const router_1 = require("@angular/router");
const Anime = require("animejs");
const app_dev_config_1 = require("./../../core/configs/app.dev.config");
const authentication_service_1 = require("./../../core/services/authentication.service");
let LoginComponent = class LoginComponent {
    constructor(route, router, config, authenticationService) {
        this.route = route;
        this.router = router;
        this.config = config;
        this.authenticationService = authenticationService;
        this.model = {
            Username: '',
            Password: ''
        };
        this.loading = false;
        this.error = false;
        this.version = config.buildVersion;
        this.currentYear = new Date().getFullYear();
    }
    ngOnInit() {
        this.authenticationService.logout();
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/dashboard';
    }
    onSubmit() {
        this.error = false;
        this.loading = true;
        this.authenticationService.login(this.model)
            .subscribe(data => {
            const scope = this;
            const transitionAnim = Anime.timeline();
            scope.loading = false;
            transitionAnim
                .add({
                targets: '.app-version-container',
                opacity: [1, 0],
                easing: 'easeOutExpo',
                duration: 400
            })
                .add({
                targets: '.login-container',
                translateY: '100%',
                easing: 'easeInOutCubic',
                duration: 500,
                offset: '-=400'
            })
                .add({
                targets: '.feature-container',
                translateX: '100%',
                easing: 'easeInOutCubic',
                duration: 500,
                offset: '-=300',
                complete: (anim) => {
                    setTimeout(() => {
                        scope.router.navigate([scope.returnUrl]);
                    }, 300);
                }
            });
        }, error => {
            if (error.status === 401) {
                this.errorMsg = 'Unauthorized. Incorrect username or password provided.';
            }
            else {
                this.errorMsg = `${error.statusText} - ${error.message}`;
            }
            this.error = true;
            this.loading = false;
        });
    }
};
LoginComponent = __decorate([
    core_1.Component({
        moduleId: module.id.toString(),
        templateUrl: 'login.component.html'
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        app_dev_config_1.AppConfig,
        authentication_service_1.AuthenticationService])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map