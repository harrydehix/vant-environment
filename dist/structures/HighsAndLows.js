"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ElementHighs_1 = __importDefault(require("./subtypes/ElementHighs"));
const ElementHighsAndLows_1 = __importDefault(require("./subtypes/ElementHighsAndLows"));
const ElementLows_1 = __importDefault(require("./subtypes/ElementLows"));
const RainRateHighs_1 = __importDefault(require("./subtypes/RainRateHighs"));
/**
 * Holds daily, monthly and yearly highs and lows for all weather elements / sensors.
 *
 * Call {@link VantInterface.getHighsAndLows} to get the current highs and lows from your weather station.
 */
class HighsAndLows {
    /**
     * @hidden
     */
    constructor() {
        /**
         * Pressure's daily, monthly and yearly highs and lows
         */
        this.pressure = new ElementHighsAndLows_1.default();
        /**
         * Wind speed's daily, monthly and yearly highs
         */
        this.wind = new ElementHighs_1.default();
        /**
         * Inside temperature's daily, monthly and yearly highs and lows
         */
        this.tempIn = new ElementHighsAndLows_1.default();
        /**
         * Inside humditity's daily, monthly and yearly highs and lows
         */
        this.humIn = new ElementHighsAndLows_1.default();
        /**
         * Outside humditity's daily, monthly and yearly highs and lows
         */
        this.humOut = new ElementHighsAndLows_1.default();
        /**
         * Outside temperature's daily, monthly and yearly highs and lows
         */
        this.tempOut = new ElementHighsAndLows_1.default();
        /**
         * Dew point's daily, monthly and yearly highs and lows
         */
        this.dew = new ElementHighsAndLows_1.default();
        /**
         * Wind chill's daily, monthly and yearly lows
         */
        this.chill = new ElementLows_1.default();
        /**
         * Heat index's daily, monthly and yearly highs
         */
        this.heat = new ElementHighs_1.default();
        /**
         * THSW's daily, monthly and yearly highs
         */
        this.thsw = new ElementHighs_1.default();
        /**
         * Solar radiation's daily, monthly and yearly highs
         */
        this.solarRadiation = new ElementHighs_1.default();
        /**
         * UV index's daily, monthly and yearly highs
         */
        this.uv = new ElementHighs_1.default();
        /**
         * Rain rate's hourly, daily, monthly and yearly highs
         */
        this.rainRate = new RainRateHighs_1.default();
        /**
         * Daily, monthly and yearly highs and lows for the extra temperature sensors (up to 7)
         */
        this.extraTemps = [
            new ElementHighsAndLows_1.default(),
            new ElementHighsAndLows_1.default(),
            new ElementHighsAndLows_1.default(),
            new ElementHighsAndLows_1.default(),
            new ElementHighsAndLows_1.default(),
            new ElementHighsAndLows_1.default(),
            new ElementHighsAndLows_1.default(),
        ];
        /**
         * Daily, monthly and yearly highs and lows for the soil temperature sensors (up to 4)
         */
        this.soilTemps = [
            new ElementHighsAndLows_1.default(),
            new ElementHighsAndLows_1.default(),
            new ElementHighsAndLows_1.default(),
            new ElementHighsAndLows_1.default(),
        ];
        /**
         * Daily, monthly and yearly highs and lows for the leaf temperature sensors (up to 4)
         */
        this.leafTemps = [
            new ElementHighsAndLows_1.default(),
            new ElementHighsAndLows_1.default(),
            new ElementHighsAndLows_1.default(),
            new ElementHighsAndLows_1.default(),
        ];
        /**
         * Daily, monthly and yearly highs and lows for the extra humidity sensors (up to 7)
         */
        this.extraHums = [
            new ElementHighsAndLows_1.default(),
            new ElementHighsAndLows_1.default(),
            new ElementHighsAndLows_1.default(),
            new ElementHighsAndLows_1.default(),
            new ElementHighsAndLows_1.default(),
            new ElementHighsAndLows_1.default(),
            new ElementHighsAndLows_1.default(),
        ];
        /**
         * Daily, monthly and yearly highs and lows for the soil moisture sensors (up to 4)
         */
        this.soilMoistures = [
            new ElementHighsAndLows_1.default(),
            new ElementHighsAndLows_1.default(),
            new ElementHighsAndLows_1.default(),
            new ElementHighsAndLows_1.default(),
        ];
        /**
         * Daily, monthly and yearly highs and lows for the leaf wetness sensors (up to 4)
         */
        this.leafWetnesses = [
            new ElementHighsAndLows_1.default(),
            new ElementHighsAndLows_1.default(),
            new ElementHighsAndLows_1.default(),
            new ElementHighsAndLows_1.default(),
        ];
    }
}
exports.default = HighsAndLows;
//# sourceMappingURL=HighsAndLows.js.map