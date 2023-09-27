import LOOP1 from "./LOOP1";
import LOOP2 from "./LOOP2";
import SimpleRealtimeData from "./SimpleRealtimeData";
/**
 * Contains a lot of useful realtime weather data. Only works on Vantage Vue and Vantage Pro 2 (having firmware dated after April 24, 2002 / v1.90 or above).
 */
export default class RichRealtimeData extends SimpleRealtimeData implements Omit<LOOP1, "nextArchiveRecord" | "packageType" | "alarms">, Omit<LOOP2, "packageType" | "graphPointers"> {
    /**
     * Measured extra temperatures (from up to 7 sensors)
     */
    tempExtra: [
        number | null,
        number | null,
        number | null,
        number | null,
        number | null,
        number | null,
        number | null
    ];
    /**
     * Measured leaf temperatures (from up to 4 sensors)
     */
    leafTemps: [
        number | null,
        number | null,
        number | null,
        number | null
    ];
    /**
     * Measured soil temperatures (from up to 4 sensors)
     */
    soilTemps: [
        number | null,
        number | null,
        number | null,
        number | null
    ];
    /**
     * Measured extra humidities (from up to 7 sensors)
     */
    humExtra: [
        number | null,
        number | null,
        number | null,
        number | null,
        number | null,
        number | null,
        number | null
    ];
    /**
     * The amount of rain that has fallen in this month
     */
    rainMonth: number | null;
    /**
     * The amount of rain that has fallen in this year
     */
    rainYear: number | null;
    /**
     * Measured evapotranspiration (ET) in the current month
     */
    etMonth: number | null;
    /**
     * Measured evapotranspiration (ET) in the current year
     */
    etYear: number | null;
    /**
     * Measured soil moisture from up to 4 sensors
     */
    soilMoistures: [
        number | null,
        number | null,
        number | null,
        number | null
    ];
    /**
     * Measured leaf wetness from up to 4 sensors
     */
    leafWetnesses: [
        number | null,
        number | null,
        number | null,
        number | null
    ];
    /**
     * Current forecast computed by the connected vantage console
     *
     * There are the following options:
     * - Sun
     * - Partly Cloudy
     * - Mostly Cloudy
     * - Mostly Cloudy, Rain within 12 hours
     * - Mostly Cloudy, Snow within 12 hours
     * - Partly Cloudy, Rain or Snow within 12 hours
     * - Partly Cloudy, Rain within 12 hours
     * - Partly Cloudy, Snow within 12 hours
     * - Partly Cloudy, Rain or Snow within 12 hours
     */
    forecast: "Mostly Clear" | "Partly Cloudy" | "Mostly Cloudy" | "Mostly Cloudy, Rain within 12 hours" | "Mostly Cloudy, Snow within 12 hours" | "Mostly Cloudy, Rain or Snow within 12 hours" | "Partly Cloudy, Rain within 12 hours" | "Partly Cloudy, Rain or Snow within 12 hours" | "Partly Cloudy, Snow within 12 hours" | null;
    /**
     * The calculated forecast encoded as number:
     * - `8` => Mostly Clear
     * - `6` => Partly Cloudy
     * - `2` => Mostly Cloudy
     * - `3` => Mostly Cloudy, Rain within 12 hours
     * - `18` => Mostly Cloudy, Snow within 12 hours
     * - `19` => Partly Cloudy, Rain or Snow within 12 hours
     * - `7` => Partly Cloudy, Rain within 12 hours
     * - `22` => Partly Cloudy, Snow within 12 hours
     * - `23` => Partly Cloudy, Rain or Snow within 12 hours
     */
    forecastID: 7 | 8 | 6 | 2 | 3 | 18 | 19 | 22 | 23 | null;
    /**
     * Not documented. Please create an issue on github if you know more about this.
     */
    forecastRule: number | null;
    /**
     * The transmitter's battery status (poorly documented)
     */
    transmitterBatteryStatus: number | null;
    /**
     * The console's battery voltage
     */
    consoleBatteryVoltage: number | null;
    /**
     * The today's sunrise time (e.g. `"06:35"`)
     */
    sunrise: string | null;
    /**
     * The today's sunset time (e.g. `"19:35"`)
     */
    sunset: string | null;
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
}
