/**
 * Activity of the wind alarms
 */
export default class WindAlarms {
    /**
     * @hidden
     */
    constructor();
    /**
     * Whether the wind speed alarm is active
     */
    speed: boolean | null;
    /** Whether the 10 min avg wind speed alarm is active */
    avg: boolean | null;
}
