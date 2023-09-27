/**
 * Activity of the UV alarms
 */
export default class UVAlarms {
    /**
     * @hidden
     */
    constructor();
    /**
     * Whether the UV Dose alarm is active
     */
    dose: boolean | null;
    /**
     * Whether a UV dose alarm threshold has been entered AND the daily UV dose has been manually cleared
     */
    enabledAndCleared: boolean | null;
    /**
     * Whether the high UV index alarm is active
     */
    high: boolean | null;
}
