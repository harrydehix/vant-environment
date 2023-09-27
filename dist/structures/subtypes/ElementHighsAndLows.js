"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DailyHighAndLow_1 = __importDefault(require("./DailyHighAndLow"));
const MonthlyHighAndLow_1 = __importDefault(require("./MonthlyHighAndLow"));
const YearlyHighAndLow_1 = __importDefault(require("./YearlyHighAndLow"));
/**
 * Holds the daily, monthly and yearly highs and lows of a specific weather element / sensor.
 */
class ElementHighsAndLows {
    /**
     * @hidden
     */
    constructor() {
        /**
         * The high and low (and the time they were measured) of the current day
         */
        this.day = new DailyHighAndLow_1.default();
        /**
         * The high and low of the current month
         */
        this.month = new MonthlyHighAndLow_1.default();
        /**
         * The high and low of the current year
         */
        this.year = new YearlyHighAndLow_1.default();
    }
}
exports.default = ElementHighsAndLows;
//# sourceMappingURL=ElementHighsAndLows.js.map