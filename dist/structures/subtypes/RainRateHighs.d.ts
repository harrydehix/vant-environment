/**
 * Holds the hourly, daily, monthly and yearly highs of the rain rate.
 */
export default class RainRateHighs {
    /**
     * @hidden
     */
    constructor();
    /**
     * The highest rain rate of the current hour
     */
    hour: number | null;
    /**
     * The highest rain rate of the current day
     */
    day: number | null;
    /**
     * The time the highest rain rate of the current day was measured in the `"hh:mm"` format (e.g. `"11:17"`)
     */
    dayTime: string | null;
    /**
     * The highest rain rate of the current month
     */
    month: number | null;
    /**
     * The highest rain rate of the current year
     */
    year: number | null;
}
