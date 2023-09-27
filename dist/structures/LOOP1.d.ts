import { LOOPPackageType } from "./LOOPPackageType";
import SimpleRealtimeData from "./SimpleRealtimeData";
import AlarmData from "./subtypes/AlarmData";
/**
 * The older LOOP(1) package used by Rev "A" firmware (dated before April 24, 2002).
 * Newer weather stations support this package type too.
 */
export default class LOOP1 extends SimpleRealtimeData {
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
    forecastID: 8 | 6 | 2 | 3 | 18 | 19 | 7 | 22 | 23 | null;
    /**
     * Not documented. Please create an issue on github if you know more about this.
     */
    forecastRule: number | null;
    /**
     * Points to the next archive record
     */
    nextArchiveRecord: number | null;
    /**
     * Current alarms states
     */
    alarms: AlarmData;
    /**
     * The transmitter's battery status (poorly documented)
     */
    transmitterBatteryStatus: number | null;
    /**
     * The console's battery voltage
     */
    consoleBatteryVoltage: number | null;
    /**
     * The today's sunrise time (e.g. `06:35`)
     */
    sunrise: string | null;
    /**
     * The today's sunset time (e.g. `19:35`)
     */
    sunset: string | null;
    /**
     * The package type (always `"LOOP1"`)
     */
    packageType: LOOPPackageType.LOOP1;
}
