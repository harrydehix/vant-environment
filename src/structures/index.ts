export { default as SimpleRealtimeData } from "./SimpleRealtimeData";
export { default as RichRealtimeData } from "./RichRealtimeData";
export { default as LOOP1 } from "./LOOP1";
export { default as LOOP2 } from "./LOOP2";
export { default as HighsAndLows } from "./HighsAndLows";
export { LOOPPackageType } from "./LOOPPackageType";

/** Array holding all valid weather station models. */
export const Models = ["Pro", "Pro2", "Vue"]

/** Weather station models supporting new features. */
export type AdvancedModel = "Pro2" | "Vue";
/** Array holding all valid weather station models supporting new features. */
export const AdvancedModels = ["Pro2", "Vue"]

/** A supported baud rate. Default is `19200`. Adjustable in the vantage console. */
export type BaudRate = 1200 | 2400 | 4800 | 9600 | 14400 | 19200
/** Array holding all valid baud rates. */
export const BaudRates = [ 1200, 2400, 4800, 9600, 14400, 19200]

/**
 * The rain collector's size. Is used to convert the (internally used) number of rain clicks to your configured rain unit.
 */
export type RainCollectorSize = "0.01in" | "0.2mm" | "0.1mm";

/** Array holding all valid rain collector sizes. */
export const RainCollectorSizes = ["0.01in", "0.2mm", "0.1mm"]

/** Supported weather station models. */
export type Model = "Pro" | "Pro2" | "Vue";