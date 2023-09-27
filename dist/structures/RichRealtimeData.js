"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SimpleRealtimeData_1 = __importDefault(require("./SimpleRealtimeData"));
/**
 * Contains a lot of useful realtime weather data. Only works on Vantage Vue and Vantage Pro 2 (having firmware dated after April 24, 2002 / v1.90 or above).
 */
class RichRealtimeData extends SimpleRealtimeData_1.default {
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
         * The transmitter's battery status (poorly documented)
         */
        this.transmitterBatteryStatus = null;
        /**
         * The console's battery voltage
         */
        this.consoleBatteryVoltage = null;
        /**
         * The today's sunrise time (e.g. `"06:35"`)
         */
        this.sunrise = null;
        /**
         * The today's sunset time (e.g. `"19:35"`)
         */
        this.sunset = null;
        /** Barometric sensor raw reading */
        this.pressRaw = null;
        /** Absolute barometric pressure. Equals to the raw sensor ({@link pressRaw}) reading plus user entered offset ({@link pressUserOffset}). */
        this.pressAbs = null;
        /**
         * The used barometric reduction method to calculate the ground pressure.
         * There are three different settings:
         *  - user offset
         *  - altimeter setting
         *  - NOAA bar reduction
         */
        this.pressReductionMethod = null;
        /**
         * The used barometric reduction method encoded as number.
         * `0` is user offset, `1` is altimeter setting and `2` is NOAA bar reduction.
         */
        this.pressReductionMethodID = null;
        /**
         * The user-entered barometric offset
         */
        this.pressUserOffset = null;
        /**
         * The barometer calibration number
         */
        this.pressCalibrationOffset = null;
        /**
         * The altimeter setting
         */
        this.altimeter = null;
        /**
         * The measured heat index
         */
        this.heat = null;
        /**
         * The calculated dew point
         */
        this.dewpoint = null;
        /**
         * Average wind speed in the recent two minutes
         */
        this.windAvg2m = null;
        /**
         * Speed of the heaviest gust in the recent 10 minutes
         */
        this.windGust = null;
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
        this.windGustDir = null;
        /**
         * The heaviest wind gust's ({@link windGust}) direction in degrees (from `1` to `360`).
         * `90°` is East, `180°` is South, `270°`is West and `360°` is North.
         */
        this.windGustDirDeg = null;
        /**
         * The current wind chill
         */
        this.chill = null;
        /**
         * The currently measured THSW index. Requires a solar radiation sensor.
         */
        this.thsw = null;
        /**
         * The amount of rain that has fallen in the recent 15 minutes
         */
        this.rain15m = null;
        /**
         * The amount of rain that has fallen in the recent hour
         */
        this.rain1h = null;
        /**
         * The amount of rain that has fallen in the recent 24 hours
         */
        this.rain24h = null;
    }
}
exports.default = RichRealtimeData;
//# sourceMappingURL=RichRealtimeData.js.map