import { UnitSettings } from "./units";

/**
 * The default unit settings.
 * - wind: `mph`
 * - temperature: `°F`
 * - solar radiation: `W/m²`
 * - pressure: `inHg`
 * - rain: `in`
 */
export const defaultUnitSettings: UnitSettings = {
    wind: "mph",
    temperature: "°F",
    solarRadiation: "W/m²",
    pressure: "inHg",
    rain: "in",
};