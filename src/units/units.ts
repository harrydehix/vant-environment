/**
 * A supported rain unit. The default rain unit is `"in"`.
 */
export type RainUnit = "in" | "mm";
/** Array holding all supported rain units. */
export const RainUnits = ["in" , "mm"];

/**
 * A supported wind unit. The default wind unit is `"mph"`.
 */
export type WindUnit = "km/h" | "mph" | "ft/s" | "knots" | "Bft" | "m/s";
/** Array holding all supported wind units. */
export const WindUnits = ["km/h", "mph", "ft/s", "knots", "Bft", "m/s"];

/**
 * A supported temperature unit. The default temperature unit is `"°F"`.
 */
export type TemperatureUnit = "°C" | "°F";
/** Array holding all supported wind units. */
export const TemperatureUnits = ["°C", "°F"];


/**
 * A supported solar radiation unit. The default solar radiation unit is `"W/m²"`.
 */
export type SolarRadiationUnit = "W/m²";
/** Array holding all supported solar radiation units. */
export const SolarRadiationUnits = ["W/m²"];

/**
 * A supported pressure unit. The default pressure unit is `"inHg"`.
 */
export type PressureUnit = "hPa" | "inHg" | "mmHg" | "mb";
/** Array holding all supported pressure units. */
export const PressureUnits = ["hPa", "inHg", "mmHg", "mb"];

export interface UnitConfiguration{
    /** The desired rain unit. Default is 'in'. */
    rain: RainUnit,
    /** The desired wind unit. Default is 'mph'. */
    wind: WindUnit,
    /** The desired temperature unit. Default is '°F'. */
    temperature: TemperatureUnit,
    /** The desired solar radiation unit. Default is 'W/m²'. */
    solarRadiation: SolarRadiationUnit,
    /** The desired pressure unit. Default is 'inHg'. */
    pressure: PressureUnit,
}

export interface UnitSettings{
    /** The set up rain unit. Default is 'in'. */
    readonly rain: RainUnit,
    /** The set up wind unit. Default is 'mph'. */
    readonly wind: WindUnit,
    /** The set up temperature unit. Default is '°F'. */
    readonly temperature: TemperatureUnit,
    /** The set up solar radiation unit. Default is 'W/m²'. */
    readonly solarRadiation: SolarRadiationUnit,
    /** The set up pressure unit. Default is 'inHg'. */
    readonly pressure: PressureUnit,
}
