/// <binding Clean='clean' />
'use strict';

const gulp = require('gulp');
const config = require('./gulp.config')();
//var cleanCSS = require('gulp-clean-css');
const clean = require('gulp-clean');
const rename = require('gulp-rename');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const $ = require('gulp-load-plugins')({ lazy: true });

gulp.task('clean:js', (cb) => {
    //return $.rimraf('wwwroot/js/*.min.js', cb);
    return gulp.src('wwwroot/dist/js/*.min.js', { read: false }).pipe(clean());
});

//gulp.task('clean:css', (cb) => {
//    return $.rimraf('wwwroot/css/*.min.css', cb);
//    return gulp.src('wwwroot/css/*.min.css', { read: false }).pipe(clean());
//});

gulp.task('minify:css', () => {
    return gulp.src(config.css)
        .pipe(cleanCSS())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest(config.cssDest));
});

gulp.task('clean', ['clean:js']);
//gulp.task('minify', ['minify:css']);

gulp.task('copy:angular', () => {
    return gulp.src(config.angular,
        { base: config.node_modules + '@angular/' })
        .pipe(gulp.dest(config.libDest + '@angular/'));
});

gulp.task('copy:angularWebApi', () => {
    return gulp.src(config.angularWebApi,
        { base: config.node_modules })
        .pipe(gulp.dest(config.libDest));
});

gulp.task('copy:corejs', () => {
    return gulp.src(config.corejs,
        { base: config.node_modules })
        .pipe(gulp.dest(config.libDest));
});

gulp.task('copy:zonejs', () => {
    return gulp.src(config.zonejs,
        { base: config.node_modules })
        .pipe(gulp.dest(config.libDest));
});

gulp.task('copy:reflectjs', () => {
    return gulp.src(config.reflectjs,
        { base: config.node_modules })
        .pipe(gulp.dest(config.libDest));
});

gulp.task('copy:systemjs', () => {
    return gulp.src(config.systemjs,
        { base: config.node_modules })
        .pipe(gulp.dest(config.libDest));
});

gulp.task('copy:rxjs', () => {
    return gulp.src(config.rxjs,
        { base: config.node_modules })
        .pipe(gulp.dest(config.libDest));
});

gulp.task('copy:jasmine', () => {
    return gulp.src(config.jasminejs,
        { base: config.node_modules + 'jasmine-core/lib' })
        .pipe(gulp.dest(config.libDest));
});

gulp.task('copy:ngIdle', () => {
    return gulp.src(config.ngIdle,
        { base: config.node_modules })
        .pipe(gulp.dest(config.libDest));
});

gulp.task('copy:ngKeepAlive', () => {
    return gulp.src(config.ngIdleKeepAlive,
        { base: config.node_modules })
        .pipe(gulp.dest(config.libDest));
});

gulp.task('copy:angularMoment', () => {
    return gulp.src(config.angularMoment,
        { base: config.node_modules })
        .pipe(gulp.dest(config.libDest));
});

gulp.task('copy:ngBootstrap', () => {
    return gulp.src(config.ngBootstrap,
        { base: config.node_modules })
        .pipe(gulp.dest(config.libDest));
});

gulp.task('copy:lodash', () => {
    return gulp.src(config.lodash,
        { base: config.node_modules })
        .pipe(gulp.dest(config.libDest));
});

/*=== App Specific ===*/
gulp.task('copy:app', () => {
    return gulp.src(config.app)
        .pipe(gulp.dest(config.appDest));
});

gulp.task('prefix:css', () => {
    var plugins = [
        autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        })
    ];

    return gulp.src(config.css)
        .pipe(postcss(plugins))
        .pipe(gulp.dest(config.cssDest));
});

gulp.task('dependencies', [
    'copy:angular',
    'copy:angularWebApi',
    'copy:corejs',
    'copy:zonejs',
    'copy:reflectjs',
    'copy:systemjs',
    'copy:rxjs',
    'copy:jasmine',
    'copy:ngIdle',
    'copy:ngKeepAlive',
    'copy:angularMoment',
    'copy:ngBootstrap',
    'copy:lodash'
]);

gulp.task('app', [
    'copy:app',
    'prefix:css'
]);

gulp.task('watch', () => {
    return $.watch(config.app)
        .pipe(gulp.dest(config.appDest));
});

gulp.task('default', ['clean', 'app']);