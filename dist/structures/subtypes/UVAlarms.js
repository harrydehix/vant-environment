"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Activity of the UV alarms
 */
class UVAlarms {
    /**
     * @hidden
     */
    constructor() {
        /**
         * Whether the UV Dose alarm is active
         */
        this.dose = null;
        /**
         * Whether a UV dose alarm threshold has been entered AND the daily UV dose has been manually cleared
         */
        this.enabledAndCleared = null;
        /**
         * Whether the high UV index alarm is active
         */
        this.high = null;
    }
}
exports.default = UVAlarms;
//# sourceMappingURL=UVAlarms.js.map