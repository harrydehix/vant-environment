import { UnitConfiguration } from "../units/index.js";
import { HighsAndLowsElementID } from "./HighsAndLows.js";
import DetailedRealtimeData, { DetailedRealtimeDataElementID, DetailedRealtimeDataElementIDs } from "./DetailedRealtimeData.js";
import { BasicRealtimeDataElementID } from "./BasicRealtimeData.js";

/**
 * Every element has an element type. E.g. `tempIn` has the element type `temperature`.
 */
export type ElementType = keyof UnitConfiguration | "date" | "other";

/**
 * A valid element id, e.g. `tempIn` or `humExtra`.
 */
export type ElementID = DetailedRealtimeDataElementID | BasicRealtimeDataElementID | HighsAndLowsElementID;
/** An array holding all valid element ids. */
export const ElementIDs: ElementID[] = [...DetailedRealtimeDataElementIDs];

/** Returns the native element type of the passed element. E.g. `number | null` is returned for `tempIn`. */
export type ElementsNativeType<ID extends ElementID> = DetailedRealtimeData[ID];

/** Holds every element's type. E.g. `ElementsType["tempIn"]` returns `"temperature"`. */
export const ElementsType : { [ID in ElementID] : ElementType } = {
    altimeter: "elevation",
    chill: "temperature",
    consoleBatteryVoltage: "other",
    dew: "temperature",
    etDay: "evoTranspiration",
    etMonth: "evoTranspiration",
    etYear: "evoTranspiration",
    forecast: "other",
    forecastID: "other",
    forecastRule: "other",
    heat: "temperature",
    humExtra: "humidity",
    humIn: "humidity",
    humOut: "humidity",
    leafTemps: "leafTemperature",
    leafWetnesses: "other",
    press: "pressure",
    pressAbs: "pressure",
    pressCalibrationOffset: "pressure",
    pressRaw: "pressure",
    pressReductionMethod: "other",
    pressReductionMethodID: "other",
    pressTrend: "other",
    pressTrendID: "other",
    pressUserOffset: "pressure",
    rain15m: "rain",
    rain1h: "rain",
    rain24h: "rain",
    rainDay: "rain",
    rainMonth: "rain",
    rainRate: "rain",
    rainYear: "rain",
    soilMoistures: "soilMoisture",
    soilTemps: "soilTemperature",
    solarRadiation: "solarRadiation",
    stormRain: "rain",
    stormStartDate: "date",
    sunrise: "date",
    sunset: "date",
    tempExtra: "temperature",
    tempIn: "temperature",
    tempOut: "temperature",
    thsw: "temperature",
    time: "date",
    transmitterBatteryStatus: "other",
    uv: "other",
    wind: "wind",
    windAvg10m: "wind",
    windAvg2m: "wind",
    windDir: "other",
    windDirDeg: "other",
    windGust: "wind",
    windGustDir: "other",
    windGustDirDeg: "other",
}