import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import * as Anime from 'animejs';

import { AppConfig } from 'app/core/configs/app.dev.config';
import { AuthenticationService } from 'app/core/services/authentication.service';

@Component({
    moduleId: module.id.toString(),
    templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
    // *** Properties ***
    model: any = {
        Username: '',
        Password: ''
    };
    userEmail: string = '';

    loading: boolean = false;
    error: boolean = false;
    isForgetPassword: boolean = false;
    
    returnUrl: string;
    errorMsg: string;
    currentYear: number;


    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private config: AppConfig,
        private authenticationService: AuthenticationService) {

        this.currentYear = new Date().getFullYear();
    }


    // *** Functions ***
    ngOnInit() {
        this.authenticationService.logout();

        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/dashboard';
    }


    toggleForgetPasswordForm() {
        this.isForgetPassword = !this.isForgetPassword;
    }

    onSubmit() {
        this.error = false;
        this.loading = true;

        this.authenticationService.login(this.model)
            .subscribe(
                data => {
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

                },
                error => {
                    if (error.status === 401) {
                        this.errorMsg = 'Unauthorized. Incorrect username or password provided.';
                    }
                    else {
                        this.errorMsg = `${error.statusText} - ${error.message}`;
                    }

                    this.error = true;
                    this.loading = false;
                }
            );
    }

    onForgetPasswordSubmit() {

    }
}