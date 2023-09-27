"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Contains basic realtime weather data. Works regardless of the weather station model (Vue, Pro, Pro 2) and its firmware version.
 */
class SimpleRealtimeData {
    /**
     * @hidden
     */
    constructor() {
        /**
         * Current pressure
         */
        this.press = null;
        /**
         * The pressure's trend. There are five possible trends:
         *  - Falling Rapidly
         *  - Falling Slowly
         *  - Steady
         *  - Rising Slowly
         *  - Rising Rapidly
         */
        this.pressTrend = null;
        /**
         * The pressure's trend encoded as number.
         *  - `-60` stands for *Falling Rapidly*
         *  - `-20` stands for *Falling Slowly*
         *  - `0` stands for *Steady*
         *  - `20` stands for *Rising Slowly*
         *  - `60` stands for *Rising Rapidly*
         */
        this.pressTrendID = null;
        /** Current outside temperature */
        this.tempOut = null;
        /** Current inside temperature (the console's temperature) */
        this.tempIn = null;
        /**
         * Current inside humidity in percent
         */
        this.humIn = null;
        /**
         * Current outside humidity in percent
         */
        this.humOut = null;
        /**
         * Currently measured wind speed
         */
        this.wind = null;
        /**
         * Average wind speed in the recent ten minutes
         */
        this.windAvg10m = null;
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
        this.windDir = null;
        /**
         * The wind speed direction in degrees (from `1` to `360`).
         * `90°` is East, `180°` is South, `270°`is West and `360°` is North.
         */
        this.windDirDeg = null;
        /**
         * The current rain rate
         */
        this.rainRate = null;
        /**
         * The amount of rain that fell today
         */
        this.rainDay = null;
        /**
         * The most recent rainstorm's amount of rain
         */
        this.stormRain = null;
        /**
         * The most recent rainstorm's start date (without time)
         */
        this.stormStartDate = null;
        /**
         * Measured evapotranspiration (ET) of the day
         */
        this.etDay = null;
        /**
         * Currently measured UV index
         */
        this.uv = null;
        /**
         * Currently measured solar radiation
         */
        this.solarRadiation = null;
        /**
         * The time the record was created
         */
        this.time = new Date();
    }
}
exports.default = SimpleRealtimeData;
//# sourceMappingURL=SimpleRealtimeData.js.map