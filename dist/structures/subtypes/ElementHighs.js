"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Holds the daily, monthly and yearly highs of a specific weather element / sensor.
 */
class ElementHighs {
    /**
     * @hidden
     */
    constructor() {
        /**
         * The high of the current day
         */
        this.day = null;
        /**
         * The time the high of the current day was measured in the `"hh:mm"` format (e.g. `"11:17"`)
         */
        this.dayTime = null;
        /**
         * The high of the current month
         */
        this.month = null;
        /**
         * The high of the current year
         */
        this.year = null;
    }
}
exports.default = ElementHighs;
//# sourceMappingURL=ElementHighs.js.map