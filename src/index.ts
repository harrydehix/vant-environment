/**
 * The rain collector's size. Is used to convert the (internally used) number of rain clicks to your configured rain unit.
 */
export type RainCollectorSize = "0.01in" | "0.2mm" | "0.1mm";
/** Array holding all valid rain collector sizes. */
export const RainCollectorSizes = ["0.01in", "0.2mm", "0.1mm"]

/** Supported weather station models. */
export type Model = "Pro" | "Pro2" | "Vue";
