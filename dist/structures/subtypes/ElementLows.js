"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Holds the daily, monthly and yearly lows of a specific weather element / sensor.
 */
class ElementLows {
    /**
     * @hidden
     */
    constructor() {
        /**
         * The low of the current day
         */
        this.day = null;
        /**
         * The time the low of the current day was measured in the `"hh:mm"` format (e.g. `"11:17"`)
         */
        this.dayTime = null;
        /**
         * The low of the current month
         */
        this.month = null;
        /**
         * The low of the current year
         */
        this.year = null;
    }
}
exports.default = ElementLows;
//# sourceMappingURL=ElementLows.js.map