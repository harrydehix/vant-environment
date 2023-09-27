"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const HighLowAlarms_1 = __importDefault(require("./HighLowAlarms"));
const PressureAlarms_1 = __importDefault(require("./PressureAlarms"));
const RainAlarms_1 = __importDefault(require("./RainAlarms"));
const UVAlarms_1 = __importDefault(require("./UVAlarms"));
const WindAlarms_1 = __importDefault(require("./WindAlarms"));
/**
 * Activity of all alarms
 */
class AlarmData {
    /**
     * @hidden
     */
    constructor() {
        /**
         * Pressure alarms
         */
        this.pressure = new PressureAlarms_1.default();
        /**
         * Inside temperature alarms
         */
        this.tempIn = new HighLowAlarms_1.default();
        /**
         * Inside humdity alarms
         */
        this.humIn = new HighLowAlarms_1.default();
        /**
         * Whether the time alarm is active
         */
        this.time = null;
        /**
         * Rain (rate) alarms
         */
        this.rain = new RainAlarms_1.default();
        /**
         * Whether the daily ET alarm is active
         */
        this.dailyET = null;
        /**
         * Outside temperature alarms
         */
        this.tempOut = new HighLowAlarms_1.default();
        /**
         * Wind alarms
         */
        this.wind = new WindAlarms_1.default();
        /**
         * Dewpoint alarms
         */
        this.dewpoint = new HighLowAlarms_1.default();
        /**
         * Whether the high heat index alarm is active
         */
        this.heat = null;
        /**
         * Whether the low wind chill alarm is active
         */
        this.chill = null;
        /**
         * Whether the high THSW index alarm is active
         */
        this.thsw = null;
        /**
         * Whether the high solar radiation alarm is active
         */
        this.solarRadiation = null;
        /**
         * UV alarms
         */
        this.UV = new UVAlarms_1.default();
        /**
         * Outside humidity alarms
         */
        this.humOut = new HighLowAlarms_1.default();
        /**
         * Extra temperature alarms (for up to 7 sensors)
         * `extraTemps[i].low` is `true` when the low extra temperature alarm for sensor `i` is active,
         * `extraTemps[i].high` is `true` when the high extra temperature alarm for sensor `i` is active.
         */
        this.extraTemps = [
            new HighLowAlarms_1.default(),
            new HighLowAlarms_1.default(),
            new HighLowAlarms_1.default(),
            new HighLowAlarms_1.default(),
            new HighLowAlarms_1.default(),
            new HighLowAlarms_1.default(),
            new HighLowAlarms_1.default(),
        ];
        /**
         * Extra humdity alarms (for up to 7 sensors)
         * `extraHums[i].low` is `true` when the low extra humidity alarm for sensor `i` is active,
         * `extraHums[i].high` is `true` when the high extra humidity alarm for sensor `i` is active.
         */
        this.extraHums = [
            new HighLowAlarms_1.default(),
            new HighLowAlarms_1.default(),
            new HighLowAlarms_1.default(),
            new HighLowAlarms_1.default(),
            new HighLowAlarms_1.default(),
            new HighLowAlarms_1.default(),
            new HighLowAlarms_1.default(),
        ];
        /**
         * Leaf wetness alarms (for up to 4 sensors)
         * `leafWetnesses[i].low` is `true` when the low leaf wetness alarm for sensor `i` is active,
         * `leafWetnesses[i].high` is `true` when the high leaf wetness alarm for sensor `i` is active.
         */
        this.leafWetnesses = [
            new HighLowAlarms_1.default(),
            new HighLowAlarms_1.default(),
            new HighLowAlarms_1.default(),
            new HighLowAlarms_1.default(),
        ];
        /**
         * Soil moisture alarms (for up to 4 sensors)
         * `soilMoistures[i].low` is `true` when the low soil moisture alarm for sensor `i` is active,
         * `soilMoistures[i].high` is `true` when the high soil moisture alarm for sensor `i` is active.
         */
        this.soilMoistures = [
            new HighLowAlarms_1.default(),
            new HighLowAlarms_1.default(),
            new HighLowAlarms_1.default(),
            new HighLowAlarms_1.default(),
        ];
        /**
         * Leaf temperature alarms (for up to 4 sensors)
         * `leafTemps[i].low` is `true` when the low leaf temperature alarm for sensor `i` is active,
         * `leafTemps[i].high` is `true` when the high leaf temperature alarm for sensor `i` is active.
         */
        this.leafTemps = [
            new HighLowAlarms_1.default(),
            new HighLowAlarms_1.default(),
            new HighLowAlarms_1.default(),
            new HighLowAlarms_1.default(),
        ];
        /**
         * Soil temperature alarms (for up to 4 sensors)
         * `soilTemps[i].low` is `true` when the low soil temperature alarm for sensor `i` is active,
         * `soilTemps[i].high` is `true` when the high soil temperature alarm for sensor `i` is active.
         */
        this.soilTemps = [
            new HighLowAlarms_1.default(),
            new HighLowAlarms_1.default(),
            new HighLowAlarms_1.default(),
            new HighLowAlarms_1.default(),
        ];
    }
}
exports.default = AlarmData;
//# sourceMappingURL=AlarmData.js.map