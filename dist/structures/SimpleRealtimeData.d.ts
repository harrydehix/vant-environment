/**
 * Contains basic realtime weather data. Works regardless of the weather station model (Vue, Pro, Pro 2) and its firmware version.
 */
export default class SimpleRealtimeData {
    /**
     * @hidden
     */
    constructor();
    /**
     * Current pressure
     */
    press: number | null;
    /**
     * The pressure's trend. There are five possible trends:
     *  - Falling Rapidly
     *  - Falling Slowly
     *  - Steady
     *  - Rising Slowly
     *  - Rising Rapidly
     */
    pressTrend: "Falling Rapidly" | "Steady" | "Rising Rapidly" | "Rising Slowly" | "Falling Slowly" | null;
    /**
     * The pressure's trend encoded as number.
     *  - `-60` stands for *Falling Rapidly*
     *  - `-20` stands for *Falling Slowly*
     *  - `0` stands for *Steady*
     *  - `20` stands for *Rising Slowly*
     *  - `60` stands for *Rising Rapidly*
     */
    pressTrendID: -60 | -20 | 0 | 20 | 60 | null;
    /** Current outside temperature */
    tempOut: number | null;
    /** Current inside temperature (the console's temperature) */
    tempIn: number | null;
    /**
     * Current inside humidity in percent
     */
    humIn: number | null;
    /**
     * Current outside humidity in percent
     */
    humOut: number | null;
    /**
     * Currently measured wind speed
     */
    wind: number | null;
    /**
     * Average wind speed in the recent ten minutes
     */
    windAvg10m: number | null;
    /**
     * Currently measured wind direction encoded as string. Possible values are:
     * - NNE
     * - NE
     * - ENE
     * - E
     * - ESE
     * - SE
     * - SSE
     * - S
     * - SSW
     * - SW
     * - WSW
     * - W
     * - WNW
     * - NW
     * - NNW
     * - N
     */
    windDir: "NNE" | "NE" | "ENE" | "E" | "ESE" | "SE" | "SSE" | "S" | "SSW" | "SW" | "WSW" | "W" | "WNW" | "NW" | "NNW" | "N" | null | null;
    /**
     * The wind speed direction in degrees (from `1` to `360`).
     * `90°` is East, `180°` is South, `270°`is West and `360°` is North.
     */
    windDirDeg: number | null;
    /**
     * The current rain rate
     */
    rainRate: number | null;
    /**
     * The amount of rain that fell today
     */
    rainDay: number | null;
    /**
     * The most recent rainstorm's amount of rain
     */
    stormRain: number | null;
    /**
     * The most recent rainstorm's start date (without time)
     */
    stormStartDate: Date | null;
    /**
     * Measured evapotranspiration (ET) of the day
     */
    etDay: number | null;
    /**
     * Currently measured UV index
     */
    uv: number | null;
    /**
     * Currently measured solar radiation
     */
    solarRadiation: number | null;
    /**
     * The time the record was created
     */
    time: Date;
}
