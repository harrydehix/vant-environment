/**
 * The rain collector's size. Is used to convert the (internally used) number of rain clicks to your configured rain unit.
 */
export type RainCollectorSize = "0.01in" | "0.2mm" | "0.1mm";
/** Array holding all valid rain collector sizes. */
export declare const RainCollectorSizes: string[];
/** Supported weather station models. */
export type Model = "Pro" | "Pro2" | "Vue";
/** Array holding all valid weather station models. */
export declare const Models: string[];
/** Weather station models supporting new features. */
export type AdvancedModel = "Pro2" | "Vue";
/** Array holding all valid weather station models supporting new features. */
export declare const AdvancedModels: string[];
/** A supported baud rate. Default is `19200`. Adjustable in the vantage console. */
export type BaudRate = 1200 | 2400 | 4800 | 9600 | 14400 | 19200;
/** Array holding all valid baud rates. */
export declare const BaudRates: number[];
