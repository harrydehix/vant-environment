import ElementHighs from "./subtypes/ElementHighs";
import ElementHighsAndLows from "./subtypes/ElementHighsAndLows";
import ElementLows from "./subtypes/ElementLows";
import RainRateHighs from "./subtypes/RainRateHighs";
/**
 * Holds daily, monthly and yearly highs and lows for all weather elements / sensors.
 *
 * Call {@link VantInterface.getHighsAndLows} to get the current highs and lows from your weather station.
 */
export default class HighsAndLows {
    /**
     * @hidden
     */
    constructor();
    /**
     * Pressure's daily, monthly and yearly highs and lows
     */
    pressure: ElementHighsAndLows;
    /**
     * Wind speed's daily, monthly and yearly highs
     */
    wind: ElementHighs;
    /**
     * Inside temperature's daily, monthly and yearly highs and lows
     */
    tempIn: ElementHighsAndLows;
    /**
     * Inside humditity's daily, monthly and yearly highs and lows
     */
    humIn: ElementHighsAndLows;
    /**
     * Outside humditity's daily, monthly and yearly highs and lows
     */
    humOut: ElementHighsAndLows;
    /**
     * Outside temperature's daily, monthly and yearly highs and lows
     */
    tempOut: ElementHighsAndLows;
    /**
     * Dew point's daily, monthly and yearly highs and lows
     */
    dew: ElementHighsAndLows;
    /**
     * Wind chill's daily, monthly and yearly lows
     */
    chill: ElementLows;
    /**
     * Heat index's daily, monthly and yearly highs
     */
    heat: ElementHighs;
    /**
     * THSW's daily, monthly and yearly highs
     */
    thsw: ElementHighs;
    /**
     * Solar radiation's daily, monthly and yearly highs
     */
    solarRadiation: ElementHighs;
    /**
     * UV index's daily, monthly and yearly highs
     */
    uv: ElementHighs;
    /**
     * Rain rate's hourly, daily, monthly and yearly highs
     */
    rainRate: RainRateHighs;
    /**
     * Daily, monthly and yearly highs and lows for the extra temperature sensors (up to 7)
     */
    extraTemps: [
        ElementHighsAndLows,
        ElementHighsAndLows,
        ElementHighsAndLows,
        ElementHighsAndLows,
        ElementHighsAndLows,
        ElementHighsAndLows,
        ElementHighsAndLows
    ];
    /**
     * Daily, monthly and yearly highs and lows for the soil temperature sensors (up to 4)
     */
    soilTemps: [
        ElementHighsAndLows,
        ElementHighsAndLows,
        ElementHighsAndLows,
        ElementHighsAndLows
    ];
    /**
     * Daily, monthly and yearly highs and lows for the leaf temperature sensors (up to 4)
     */
    leafTemps: [
        ElementHighsAndLows,
        ElementHighsAndLows,
        ElementHighsAndLows,
        ElementHighsAndLows
    ];
    /**
     * Daily, monthly and yearly highs and lows for the extra humidity sensors (up to 7)
     */
    extraHums: [
        ElementHighsAndLows,
        ElementHighsAndLows,
        ElementHighsAndLows,
        ElementHighsAndLows,
        ElementHighsAndLows,
        ElementHighsAndLows,
        ElementHighsAndLows
    ];
    /**
     * Daily, monthly and yearly highs and lows for the soil moisture sensors (up to 4)
     */
    soilMoistures: [
        ElementHighsAndLows,
        ElementHighsAndLows,
        ElementHighsAndLows,
        ElementHighsAndLows
    ];
    /**
     * Daily, monthly and yearly highs and lows for the leaf wetness sensors (up to 4)
     */
    leafWetnesses: [
        ElementHighsAndLows,
        ElementHighsAndLows,
        ElementHighsAndLows,
        ElementHighsAndLows
    ];
}
