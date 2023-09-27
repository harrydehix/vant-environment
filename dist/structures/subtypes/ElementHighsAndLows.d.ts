import DailyHighAndLow from "./DailyHighAndLow";
import MonthlyHighAndLow from "./MonthlyHighAndLow";
import YearlyHighAndLow from "./YearlyHighAndLow";
/**
 * Holds the daily, monthly and yearly highs and lows of a specific weather element / sensor.
 */
export default class ElementHighsAndLows {
    /**
     * @hidden
     */
    constructor();
    /**
     * The high and low (and the time they were measured) of the current day
     */
    day: DailyHighAndLow;
    /**
     * The high and low of the current month
     */
    month: MonthlyHighAndLow;
    /**
     * The high and low of the current year
     */
    year: YearlyHighAndLow;
}
