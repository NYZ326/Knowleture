"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var add_pipe_1 = require("./add.pipe");
var calendar_pipe_1 = require("./calendar.pipe");
var date_format_pipe_1 = require("./date-format.pipe");
var difference_pipe_1 = require("./difference.pipe");
var duration_pipe_1 = require("./duration.pipe");
var from_unix_pipe_1 = require("./from-unix.pipe");
var parse_pipe_1 = require("./parse.pipe");
var subtract_pipe_1 = require("./subtract.pipe");
var time_ago_pipe_1 = require("./time-ago.pipe");
var utc_pipe_1 = require("./utc.pipe");
var local_pipe_1 = require("./local.pipe");
var locale_pipe_1 = require("./locale.pipe");
var ANGULAR_MOMENT_PIPES = [
    add_pipe_1.AddPipe,
    calendar_pipe_1.CalendarPipe,
    date_format_pipe_1.DateFormatPipe,
    difference_pipe_1.DifferencePipe,
    duration_pipe_1.DurationPipe,
    from_unix_pipe_1.FromUnixPipe,
    parse_pipe_1.ParsePipe,
    subtract_pipe_1.SubtractPipe,
    time_ago_pipe_1.TimeAgoPipe,
    utc_pipe_1.UtcPipe,
    local_pipe_1.LocalTimePipe,
    locale_pipe_1.LocalePipe
];
var MomentModule = (function () {
    function MomentModule() {
    }
    return MomentModule;
}());
MomentModule = __decorate([
    core_1.NgModule({
        declarations: ANGULAR_MOMENT_PIPES,
        exports: ANGULAR_MOMENT_PIPES
    })
], MomentModule);
exports.MomentModule = MomentModule;
//# sourceMappingURL=moment.module.js.map