"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LOOPPackageType_1 = require("./LOOPPackageType");
const SimpleRealtimeData_1 = __importDefault(require("./SimpleRealtimeData"));
const AlarmData_1 = __importDefault(require("./subtypes/AlarmData"));
/**
 * The older LOOP(1) package used by Rev "A" firmware (dated before April 24, 2002).
 * Newer weather stations support this package type too.
 */
class LOOP1 extends SimpleRealtimeData_1.default {
    constructor() {
        super(...arguments);
        /**
         * Measured extra temperatures (from up to 7 sensors)
         */
        this.tempExtra = [null, null, null, null, null, null, null];
        /**
         * Measured leaf temperatures (from up to 4 sensors)
         */
        this.leafTemps = [null, null, null, null];
        /**
         * Measured soil temperatures (from up to 4 sensors)
         */
        this.soilTemps = [null, null, null, null];
        /**
         * Measured extra humidities (from up to 7 sensors)
         */
        this.humExtra = [null, null, null, null, null, null, null];
        /**
         * The amount of rain that has fallen in this month
         */
        this.rainMonth = null;
        /**
         * The amount of rain that has fallen in this year
         */
        this.rainYear = null;
        /**
         * Measured evapotranspiration (ET) in the current month
         */
        this.etMonth = null;
        /**
         * Measured evapotranspiration (ET) in the current year
         */
        this.etYear = null;
        /**
         * Measured soil moisture from up to 4 sensors
         */
        this.soilMoistures = [null, null, null, null];
        /**
         * Measured leaf wetness from up to 4 sensors
         */
        this.leafWetnesses = [null, null, null, null];
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
        this.forecast = null;
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
        this.forecastID = null;
        /**
         * Not documented. Please create an issue on github if you know more about this.
         */
        this.forecastRule = null;
        /**
         * Points to the next archive record
         */
        this.nextArchiveRecord = null;
        /**
         * Current alarms states
         */
        this.alarms = new AlarmData_1.default();
        /**
         * The transmitter's battery status (poorly documented)
         */
        this.transmitterBatteryStatus = null;
        /**
         * The console's battery voltage
         */
        this.consoleBatteryVoltage = null;
        /**
         * The today's sunrise time (e.g. `06:35`)
         */
        this.sunrise = null;
        /**
         * The today's sunset time (e.g. `19:35`)
         */
        this.sunset = null;
        /**
         * The package type (always `"LOOP1"`)
         */
        this.packageType = LOOPPackageType_1.LOOPPackageType.LOOP1;
    }
}
exports.default = LOOP1;
//# sourceMappingURL=LOOP1.js.map