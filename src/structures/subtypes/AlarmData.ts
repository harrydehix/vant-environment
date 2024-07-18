import HighLowAlarms from "./HighLowAlarms.js";
import PressureAlarms from "./PressureAlarms.js";
import RainAlarms from "./RainAlarms.js";
import UVAlarms from "./UVAlarms.js";
import WindAlarms from "./WindAlarms.js";

/**
 * Activity of all alarms
 */
export default class AlarmData {
    /**
     * @hidden
     */
    constructor() {}

    /**
     * Pressure alarms
     */
    public press = new PressureAlarms();

    /**
     * Inside temperature alarms
     */
    public tempIn = new HighLowAlarms();

    /**
     * Inside humdity alarms
     */
    public humIn = new HighLowAlarms();

    /**
     * Whether the time alarm is active
     */
    public time: boolean | null = null;

    /**
     * Rain (rate) alarms
     */
    public rain = new RainAlarms();

    /**
     * Whether the day ET alarm is active
     */
    public etDay: boolean | null = null;

    /**
     * Outside temperature alarms
     */
    public tempOut = new HighLowAlarms();

    /**
     * Wind alarms
     */
    public wind = new WindAlarms();
    /**
     * Dewpoint alarms
     */
    public dew = new HighLowAlarms();

    /**
     * Whether the high heat index alarm is active
     */
    public heat: boolean | null = null;

    /**
     * Whether the low wind chill alarm is active
     */
    public chill: boolean | null = null;

    /**
     * Whether the high THSW index alarm is active
     */
    public thsw: boolean | null = null;

    /**
     * Whether the high solar radiation alarm is active
     */
    public solarRadiation: boolean | null = null;

    /**
     * UV alarms
     */
    public uv = new UVAlarms();

    /**
     * Outside humidity alarms
     */
    public humOut = new HighLowAlarms();

    /**
     * Extra temperature alarms (for up to 7 sensors)
     * `tempExtra[i].low` is `true` when the low extra temperature alarm for sensor `i` is active,
     * `tempExtra[i].high` is `true` when the high extra temperature alarm for sensor `i` is active.
     */
    public tempExtra: [
        HighLowAlarms,
        HighLowAlarms,
        HighLowAlarms,
        HighLowAlarms,
        HighLowAlarms,
        HighLowAlarms,
        HighLowAlarms
    ] = [
        new HighLowAlarms(),
        new HighLowAlarms(),
        new HighLowAlarms(),
        new HighLowAlarms(),
        new HighLowAlarms(),
        new HighLowAlarms(),
        new HighLowAlarms(),
    ];

    /**
     * Extra humdity alarms (for up to 7 sensors)
     * `humExtra[i].low` is `true` when the low extra humidity alarm for sensor `i` is active,
     * `humExtra[i].high` is `true` when the high extra humidity alarm for sensor `i` is active.
     */
    public humExtra: [
        HighLowAlarms,
        HighLowAlarms,
        HighLowAlarms,
        HighLowAlarms,
        HighLowAlarms,
        HighLowAlarms,
        HighLowAlarms
    ] = [
        new HighLowAlarms(),
        new HighLowAlarms(),
        new HighLowAlarms(),
        new HighLowAlarms(),
        new HighLowAlarms(),
        new HighLowAlarms(),
        new HighLowAlarms(),
    ];

    /**
     * Leaf wetness alarms (for up to 4 sensors)
     * `leafWetnesses[i].low` is `true` when the low leaf wetness alarm for sensor `i` is active,
     * `leafWetnesses[i].high` is `true` when the high leaf wetness alarm for sensor `i` is active.
     */
    public leafWetnesses: [
        HighLowAlarms,
        HighLowAlarms,
        HighLowAlarms,
        HighLowAlarms
    ] = [
        new HighLowAlarms(),
        new HighLowAlarms(),
        new HighLowAlarms(),
        new HighLowAlarms(),
    ];

    /**
     * Soil moisture alarms (for up to 4 sensors)
     * `soilMoistures[i].low` is `true` when the low soil moisture alarm for sensor `i` is active,
     * `soilMoistures[i].high` is `true` when the high soil moisture alarm for sensor `i` is active.
     */
    public soilMoistures: [
        HighLowAlarms,
        HighLowAlarms,
        HighLowAlarms,
        HighLowAlarms
    ] = [
        new HighLowAlarms(),
        new HighLowAlarms(),
        new HighLowAlarms(),
        new HighLowAlarms(),
    ];

    /**
     * Leaf temperature alarms (for up to 4 sensors)
     * `leafTemps[i].low` is `true` when the low leaf temperature alarm for sensor `i` is active,
     * `leafTemps[i].high` is `true` when the high leaf temperature alarm for sensor `i` is active.
     */
    public leafTemps: [
        HighLowAlarms,
        HighLowAlarms,
        HighLowAlarms,
        HighLowAlarms
    ] = [
        new HighLowAlarms(),
        new HighLowAlarms(),
        new HighLowAlarms(),
        new HighLowAlarms(),
    ];

    /**
     * Soil temperature alarms (for up to 4 sensors)
     * `soilTemps[i].low` is `true` when the low soil temperature alarm for sensor `i` is active,
     * `soilTemps[i].high` is `true` when the high soil temperature alarm for sensor `i` is active.
     */
    public soilTemps: [
        HighLowAlarms,
        HighLowAlarms,
        HighLowAlarms,
        HighLowAlarms
    ] = [
        new HighLowAlarms(),
        new HighLowAlarms(),
        new HighLowAlarms(),
        new HighLowAlarms(),
    ];
}
