const appBuild = require('./../../../../package.json');

export class AppConfig {
    public readonly buildVersion = appBuild.version;
    public readonly apiUrl = 'http://localhost:6776/';

    public readonly instructorConfig = {
        nav: [
            {
                name: 'Home',
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

    public readonly studentConfig = {
        nav: [
            {
                name: 'Home',
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
};