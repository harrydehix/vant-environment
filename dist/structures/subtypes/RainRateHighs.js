"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Holds the hourly, daily, monthly and yearly highs of the rain rate.
 */
class RainRateHighs {
    /**
     * @hidden
     */
    constructor() {
        /**
         * The highest rain rate of the current hour
         */
        this.hour = null;
        /**
         * The highest rain rate of the current day
         */
        this.day = null;
        /**
         * The time the highest rain rate of the current day was measured in the `"hh:mm"` format (e.g. `"11:17"`)
         */
        this.dayTime = null;
        /**
         * The highest rain rate of the current month
         */
        this.month = null;
        /**
         * The highest rain rate of the current year
         */
        this.year = null;
    }
}
exports.default = RainRateHighs;
//# sourceMappingURL=RainRateHighs.js.map