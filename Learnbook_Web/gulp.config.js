module.exports = function () {

    var base = {
        dist: "./wwwroot/dist/",
        webroot: "./wwwroot/src/",
        node_modules: "./node_modules/"
    };

    var config = {
        /**
         * Files paths
         */
        angular: base.node_modules + "@angular/**/*.js",
        app: "App/src/**/*.*",
        appDest: base.dist + "app",
        js: base.webroot + "js/*.js",
        jsDest: base.dist + 'js',
        css: "./App/styles/Site.css",
        cssDest: base.dist + 'css/',
        lib: base.webroot + "lib/",
        libDest: base.dist + "lib/",
        node_modules: base.node_modules,
        angularWebApi: base.node_modules + "angular2-in-memory-web-api/*.js",
        angularMoment: base.node_modules + "angular2-moment/*",
        ngIdle: base.node_modules + "@ng-idle/core/**",
        ngIdleKeepAlive: base.node_modules + "@ng-idle/keepalive/**",
        ngBootstrap: base.node_modules + "@ng-bootstrap/ng-bootstrap/**/*.js",
        corejs: base.node_modules + "core-js/client/shim*.js",
        zonejs: base.node_modules + "zone.js/dist/zone*.js",
        reflectjs: base.node_modules + "reflect-metadata/Reflect*.js",
        systemjs: base.node_modules + "systemjs/dist/*.js",
        rxjs: base.node_modules + "rxjs/**/*.js",
        jasminejs: base.node_modules + "jasmine-core/lib/jasmine-core/*.*",
        lodash: base.node_modules + "lodash/**"
    };

    return config;
};