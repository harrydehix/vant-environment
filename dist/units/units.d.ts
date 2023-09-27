/**
 * A supported rain unit. The default rain unit is `"in"`.
 */
export type RainUnit = "in" | "mm";
/** Array holding all supported rain units. */
export declare const RainUnits: string[];
/**
 * A supported wind unit. The default wind unit is `"mph"`.
 */
export type WindUnit = "km/h" | "mph" | "ft/s" | "knots" | "Bft" | "m/s";
/** Array holding all supported wind units. */
export declare const WindUnits: string[];
/**
 * A supported temperature unit. The default temperature unit is `"°F"`.
 */
export type TemperatureUnit = "°C" | "°F";
/** Array holding all supported wind units. */
export declare const TemperatureUnits: string[];
/**
 * A supported solar radiation unit. The default solar radiation unit is `"W/m²"`.
 */
export type SolarRadiationUnit = "W/m²";
/** Array holding all supported solar radiation units. */
export declare const SolarRadiationUnits: string[];
/**
 * A supported pressure unit. The default pressure unit is `"inHg"`.
 */
export type PressureUnit = "hPa" | "inHg" | "mmHg" | "mb";
/** Array holding all supported pressure units. */
export declare const PressureUnits: string[];
export interface UnitConfiguration {
    /** The desired rain unit. Default is 'in'. */
    rain: RainUnit;
    /** The desired wind unit. Default is 'mph'. */
    wind: WindUnit;
    /** The desired temperature unit. Default is '°F'. */
    temperature: TemperatureUnit;
    /** The desired solar radiation unit. Default is 'W/m²'. */
    solarRadiation: SolarRadiationUnit;
    /** The desired pressure unit. Default is 'inHg'. */
    pressure: PressureUnit;
}
export interface UnitSettings {
    /** The set up rain unit. Default is 'in'. */
    readonly rain: RainUnit;
    /** The set up wind unit. Default is 'mph'. */
    readonly wind: WindUnit;
    /** The set up temperature unit. Default is '°F'. */
    readonly temperature: TemperatureUnit;
    /** The set up solar radiation unit. Default is 'W/m²'. */
    readonly solarRadiation: SolarRadiationUnit;
    /** The set up pressure unit. Default is 'inHg'. */
    readonly pressure: PressureUnit;
}
