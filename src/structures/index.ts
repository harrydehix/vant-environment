export { default as BasicRealtimeData } from "./BasicRealtimeData.js";
export { BasicRealtimeDataElementID, BasicRealtimeDataElementIDs }  from "./BasicRealtimeData.js";
export { default as DetailedRealtimeData } from "./DetailedRealtimeData.js";
export { DetailedRealtimeDataElementID , DetailedRealtimeDataElementIDs }  from "./DetailedRealtimeData.js";
export { default as LOOP1 } from "./LOOP1.js";
export { LOOP1ElementID as LOOP1Element, LOOP1ElementIDs as LOOP1Elements }  from "./LOOP1.js";
export { default as LOOP2 } from "./LOOP2.js";
export { LOOP2ElementID as LOOP2Element, LOOP2ElementIDs as LOOP2Elements }  from "./LOOP2.js";
export { default as HighsAndLows } from "./HighsAndLows.js";
export { HighsAndLowsElementID, HighsAndLowsElementIDs }  from "./HighsAndLows.js";
export { LOOPPackageType } from "./LOOPPackageType.js";
export { ElementID, ElementType, ElementsNativeType, ElementsType } from "./Elements.js";

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
