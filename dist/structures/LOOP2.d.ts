import { LOOPPackageType } from "./LOOPPackageType";
import SimpleRealtimeData from "./SimpleRealtimeData";
import GraphPointers from "./subtypes/GraphPointers";
/**
 * The newer LOOP2 package used by Rev "B" firmware (dated after April 24, 2002 / v1.90 or above).
 * Older weather stations don't support this package type. The Vantage Pro doesn't support this package at all.
 */
export default class LOOP2 extends SimpleRealtimeData {
    /** Barometric sensor raw reading */
    pressRaw: number | null;
    /** Absolute barometric pressure. Equals to the raw sensor ({@link pressRaw}) reading plus user entered offset ({@link pressUserOffset}). */
    pressAbs: number | null;
    /**
     * The used barometric reduction method to calculate the ground pressure.
     * There are three different settings:
     *  - user offset
     *  - altimeter setting
     *  - NOAA bar reduction
     */
    pressReductionMethod: "user offset" | "altimeter setting" | "NOAA bar reduction" | null;
    /**
     * The used barometric reduction method encoded as number.
     * `0` is user offset, `1` is altimeter setting and `2` is NOAA bar reduction.
     */
    pressReductionMethodID: 0 | 1 | 2 | null;
    /**
     * The user-entered barometric offset
     */
    pressUserOffset: number | null;
    /**
     * The barometer calibration number
     */
    pressCalibrationOffset: number | null;
    /**
     * The altimeter setting
     */
    altimeter: number | null;
    /**
     * The measured heat index
     */
    heat: number | null;
    /**
     * The calculated dew point
     */
    dewpoint: number | null;
    /**
     * Average wind speed in the recent two minutes
     */
    windAvg2m: number | null;
    /**
     * Speed of the heaviest gust in the recent 10 minutes
     */
    windGust: number | null;
    /**
     * The heaviest wind gust's ({@link windGust}) direction encoded as string. Possible values are:
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
    windGustDir: "NNE" | "NE" | "ENE" | "E" | "ESE" | "SE" | "SSE" | "S" | "SSW" | "SW" | "WSW" | "W" | "WNW" | "NW" | "NNW" | "N" | null | null;
    /**
     * The heaviest wind gust's ({@link windGust}) direction in degrees (from `1` to `360`).
     * `90°` is East, `180°` is South, `270°`is West and `360°` is North.
     */
    windGustDirDeg: number | null;
    /**
     * The current wind chill
     */
    chill: number | null;
    /**
     * The currently measured THSW index. Requires a solar radiation sensor.
     */
    thsw: number | null;
    /**
     * The amount of rain that has fallen in the recent 15 minutes
     */
    rain15m: number | null;
    /**
     * The amount of rain that has fallen in the recent hour
     */
    rain1h: number | null;
    /**
     * The amount of rain that has fallen in the recent 24 hours
     */
    rain24h: number | null;
    /**
     * The current graph's pointers
     */
    graphPointers: GraphPointers;
    /**
     * The package type (always "LOOP2")
     */
    packageType: LOOPPackageType.LOOP2;
}
