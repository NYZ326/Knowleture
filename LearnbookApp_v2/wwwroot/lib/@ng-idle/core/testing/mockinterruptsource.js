var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { InterruptArgs, InterruptSource } from '@ng-idle/core';
/*
 * A simple InterruptSource for mocking during tests.
 */
var MockInterruptSource = (function (_super) {
    __extends(MockInterruptSource, _super);
    function MockInterruptSource(attach, detach) {
        return _super.call(this, attach, detach) || this;
    }
    /*
     * Simulates the external interrupt, triggering onInterrupt.
     * @param innerArgs - The original event arguments or data, if any.
     */
    MockInterruptSource.prototype.trigger = function (innerArgs) {
        this.onInterrupt.emit(new InterruptArgs(this, innerArgs));
    };
    return MockInterruptSource;
}(InterruptSource));
export { MockInterruptSource };
//# sourceMappingURL=mockinterruptsource.js.map