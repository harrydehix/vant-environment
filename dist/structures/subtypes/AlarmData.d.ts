import HighLowAlarms from "./HighLowAlarms";
import PressureAlarms from "./PressureAlarms";
import RainAlarms from "./RainAlarms";
import UVAlarms from "./UVAlarms";
import WindAlarms from "./WindAlarms";
/**
 * Activity of all alarms
 */
export default class AlarmData {
    /**
     * @hidden
     */
    constructor();
    /**
     * Pressure alarms
     */
    pressure: PressureAlarms;
    /**
     * Inside temperature alarms
     */
    tempIn: HighLowAlarms;
    /**
     * Inside humdity alarms
     */
    humIn: HighLowAlarms;
    /**
     * Whether the time alarm is active
     */
    time: boolean | null;
    /**
     * Rain (rate) alarms
     */
    rain: RainAlarms;
    /**
     * Whether the daily ET alarm is active
     */
    dailyET: boolean | null;
    /**
     * Outside temperature alarms
     */
    tempOut: HighLowAlarms;
    /**
     * Wind alarms
     */
    wind: WindAlarms;
    /**
     * Dewpoint alarms
     */
    dewpoint: HighLowAlarms;
    /**
     * Whether the high heat index alarm is active
     */
    heat: boolean | null;
    /**
     * Whether the low wind chill alarm is active
     */
    chill: boolean | null;
    /**
     * Whether the high THSW index alarm is active
     */
    thsw: boolean | null;
    /**
     * Whether the high solar radiation alarm is active
     */
    solarRadiation: boolean | null;
    /**
     * UV alarms
     */
    UV: UVAlarms;
    /**
     * Outside humidity alarms
     */
    humOut: HighLowAlarms;
    /**
     * Extra temperature alarms (for up to 7 sensors)
     * `extraTemps[i].low` is `true` when the low extra temperature alarm for sensor `i` is active,
     * `extraTemps[i].high` is `true` when the high extra temperature alarm for sensor `i` is active.
     */
    extraTemps: [
        HighLowAlarms,
        HighLowAlarms,
        HighLowAlarms,
        HighLowAlarms,
        HighLowAlarms,
        HighLowAlarms,
        HighLowAlarms
    ];
    /**
     * Extra humdity alarms (for up to 7 sensors)
     * `extraHums[i].low` is `true` when the low extra humidity alarm for sensor `i` is active,
     * `extraHums[i].high` is `true` when the high extra humidity alarm for sensor `i` is active.
     */
    extraHums: [
        HighLowAlarms,
        HighLowAlarms,
        HighLowAlarms,
        HighLowAlarms,
        HighLowAlarms,
        HighLowAlarms,
        HighLowAlarms
    ];
    /**
     * Leaf wetness alarms (for up to 4 sensors)
     * `leafWetnesses[i].low` is `true` when the low leaf wetness alarm for sensor `i` is active,
     * `leafWetnesses[i].high` is `true` when the high leaf wetness alarm for sensor `i` is active.
     */
    leafWetnesses: [
        HighLowAlarms,
        HighLowAlarms,
        HighLowAlarms,
        HighLowAlarms
    ];
    /**
     * Soil moisture alarms (for up to 4 sensors)
     * `soilMoistures[i].low` is `true` when the low soil moisture alarm for sensor `i` is active,
     * `soilMoistures[i].high` is `true` when the high soil moisture alarm for sensor `i` is active.
     */
    soilMoistures: [
        HighLowAlarms,
        HighLowAlarms,
        HighLowAlarms,
        HighLowAlarms
    ];
    /**
     * Leaf temperature alarms (for up to 4 sensors)
     * `leafTemps[i].low` is `true` when the low leaf temperature alarm for sensor `i` is active,
     * `leafTemps[i].high` is `true` when the high leaf temperature alarm for sensor `i` is active.
     */
    leafTemps: [
        HighLowAlarms,
        HighLowAlarms,
        HighLowAlarms,
        HighLowAlarms
    ];
    /**
     * Soil temperature alarms (for up to 4 sensors)
     * `soilTemps[i].low` is `true` when the low soil temperature alarm for sensor `i` is active,
     * `soilTemps[i].high` is `true` when the high soil temperature alarm for sensor `i` is active.
     */
    soilTemps: [
        HighLowAlarms,
        HighLowAlarms,
        HighLowAlarms,
        HighLowAlarms
    ];
}
