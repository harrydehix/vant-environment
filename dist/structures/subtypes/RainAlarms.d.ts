/**
 * Activity of the rain alarms
 */
export default class RainAlarms {
    /**
     * @hidden
     */
    constructor();
    /**
     * Whether the high rain rate alarm is active
     */
    rate: boolean | null;
    /**
     * Whether the 15min rain (flash flood) alarm is active
     */
    quarter: boolean | null;
    /**
     * Whether the 24 hour rain alarm is active
     */
    daily: boolean | null;
    /**
     * Whether the storm total rain alarm is active
     */
    stormTotal: boolean | null;
}
