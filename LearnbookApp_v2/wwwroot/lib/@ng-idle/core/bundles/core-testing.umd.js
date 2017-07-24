(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@ng-idle/core')) :
    typeof define === 'function' && define.amd ? define(['exports', '@ng-idle/core'], factory) :
    (factory((global.ngidle = global.ngidle || {}, global.ngidle.core = global.ngidle.core || {}, global.ngidle.core.testing = global.ngidle.core.testing || {}),global.ngidle.core));
}(this, (function (exports,_ngIdle_core) { 'use strict';

var __extends = (undefined && undefined.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var MockExpiry = (function (_super) {
    __extends(MockExpiry, _super);
    function MockExpiry() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MockExpiry.prototype.last = function (value) {
        if (value !== void 0) {
            this.lastDate = value;
        }
        return this.lastDate;
    };
    MockExpiry.prototype.now = function () {
        return this.mockNow || new Date();
    };
    return MockExpiry;
}(_ngIdle_core.IdleExpiry));

var __extends$1 = (undefined && undefined.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/*
 * A simple InterruptSource for mocking during tests.
 */
var MockInterruptSource = (function (_super) {
    __extends$1(MockInterruptSource, _super);
    function MockInterruptSource(attach, detach) {
        return _super.call(this, attach, detach) || this;
    }
    /*
     * Simulates the external interrupt, triggering onInterrupt.
     * @param innerArgs - The original event arguments or data, if any.
     */
    MockInterruptSource.prototype.trigger = function (innerArgs) {
        this.onInterrupt.emit(new _ngIdle_core.InterruptArgs(this, innerArgs));
    };
    return MockInterruptSource;
}(_ngIdle_core.InterruptSource));

var __extends$2 = (undefined && undefined.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var MockKeepaliveSvc = (function (_super) {
    __extends$2(MockKeepaliveSvc, _super);
    function MockKeepaliveSvc() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isRunning = false;
        return _this;
    }
    MockKeepaliveSvc.prototype.start = function () {
        this.isRunning = true;
    };
    MockKeepaliveSvc.prototype.stop = function () {
        this.isRunning = false;
    };
    MockKeepaliveSvc.prototype.ping = function () {
        // do nothing
    };
    return MockKeepaliveSvc;
}(_ngIdle_core.KeepaliveSvc));

exports.MockExpiry = MockExpiry;
exports.MockInterruptSource = MockInterruptSource;
exports.MockKeepaliveSvc = MockKeepaliveSvc;

Object.defineProperty(exports, '__esModule', { value: true });

})));