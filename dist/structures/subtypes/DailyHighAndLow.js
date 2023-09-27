"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Holds a weather element's / sensor's high and low (and the time they were measured) of the current day.
 */
class DailyHighAndLow {
    /**
     * @hidden
     */
    constructor() {
        /**
         * The low of the current day
         */
        this.low = null;
        /**
         * The high of the current day
         */
        this.high = null;
        /**
         * The time the low of the current day was measured in the `"hh:mm"` format (e.g. `"11:17"`)
         */
        this.lowTime = null;
        /**
         * The time the high of the current day was measured in the `"hh:mm"` format (e.g. `"11:17"`)
         */
        this.highTime = null;
    }
}
exports.default = DailyHighAndLow;
//# sourceMappingURL=DailyHighAndLow.js.map