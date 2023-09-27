"use strict";
/**
 * Activity of the rain alarms
 */
Object.defineProperty(exports, "__esModule", { value: true });
class RainAlarms {
    /**
     * @hidden
     */
    constructor() {
        /**
         * Whether the high rain rate alarm is active
         */
        this.rate = null;
        /**
         * Whether the 15min rain (flash flood) alarm is active
         */
        this.quarter = null;
        /**
         * Whether the 24 hour rain alarm is active
         */
        this.daily = null;
        /**
         * Whether the storm total rain alarm is active
         */
        this.stormTotal = null;
    }
}
exports.default = RainAlarms;
//# sourceMappingURL=RainAlarms.js.map