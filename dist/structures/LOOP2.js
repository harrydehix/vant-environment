"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LOOPPackageType_1 = require("./LOOPPackageType");
const SimpleRealtimeData_1 = __importDefault(require("./SimpleRealtimeData"));
const GraphPointers_1 = __importDefault(require("./subtypes/GraphPointers"));
/**
 * The newer LOOP2 package used by Rev "B" firmware (dated after April 24, 2002 / v1.90 or above).
 * Older weather stations don't support this package type. The Vantage Pro doesn't support this package at all.
 */
class LOOP2 extends SimpleRealtimeData_1.default {
    constructor() {
        super(...arguments);
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
        /**
         * The current graph's pointers
         */
        this.graphPointers = new GraphPointers_1.default();
        /**
         * The package type (always "LOOP2")
         */
        this.packageType = LOOPPackageType_1.LOOPPackageType.LOOP2;
    }
}
exports.default = LOOP2;
//# sourceMappingURL=LOOP2.js.map