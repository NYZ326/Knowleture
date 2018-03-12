"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const appBuild = require('./../../../../package.json');
class AppConfig {
    constructor() {
        this.buildVersion = appBuild.version;
        this.apiUrl = 'http://localhost:6776/';
        this.instructorConfig = {
            nav: [
                {
                    name: 'Dashboard',
                    icon: 'house'
                },
                {
                    name: 'Courses',
                    icon: 'textbook'
                },
                {
                    name: 'Assignments',
                    icon: 'paperwork'
                },
                {
                    name: 'Quizzes',
                    icon: 'quiz'
                },
                {
                    name: 'Reports',
                    icon: 'report'
                }
            ]
        };
        this.studentConfig = {
            nav: [
                {
                    name: 'Dashboard',
                    icon: 'house'
                },
                {
                    name: 'Courses',
                    icon: 'textbook'
                },
                {
                    name: 'Assignments',
                    icon: 'paperwork'
                },
                {
                    name: 'Quizzes',
                    icon: 'quiz'
                },
                {
                    name: 'Grades'
                }
            ]
        };
    }
}
exports.AppConfig = AppConfig;
;
//# sourceMappingURL=app.dev.config.js.map