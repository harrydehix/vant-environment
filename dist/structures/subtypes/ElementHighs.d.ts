/**
 * Holds the daily, monthly and yearly highs of a specific weather element / sensor.
 */
export default class ElementHighs {
    /**
     * @hidden
     */
    constructor();
    /**
     * The high of the current day
     */
    day: number | null;
    /**
     * The time the high of the current day was measured in the `"hh:mm"` format (e.g. `"11:17"`)
     */
    dayTime: string | null;
    /**
     * The high of the current month
     */
    month: number | null;
    /**
     * The high of the current year
     */
    year: number | null;
}
