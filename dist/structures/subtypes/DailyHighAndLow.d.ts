/**
 * Holds a weather element's / sensor's high and low (and the time they were measured) of the current day.
 */
export default class DailyHighAndLow {
    /**
     * @hidden
     */
    constructor();
    /**
     * The low of the current day
     */
    low: number | null;
    /**
     * The high of the current day
     */
    high: number | null;
    /**
     * The time the low of the current day was measured in the `"hh:mm"` format (e.g. `"11:17"`)
     */
    lowTime: string | null;
    /**
     * The time the high of the current day was measured in the `"hh:mm"` format (e.g. `"11:17"`)
     */
    highTime: string | null;
}
