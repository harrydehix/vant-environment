/**
 * Holds the daily, monthly and yearly lows of a specific weather element / sensor.
 */
export default class ElementLows {
    /**
     * @hidden
     */
    constructor();
    /**
     * The low of the current day
     */
    day: number | null;
    /**
     * The time the low of the current day was measured in the `"hh:mm"` format (e.g. `"11:17"`)
     */
    dayTime: string | null;
    /**
     * The low of the current month
     */
    month: number | null;
    /**
     * The low of the current year
     */
    year: number | null;
}
