/**
 * Pointers pointing to the graph points in the vantage's EEPROM
 */
export default class GraphPointers {
    /**
     * Points to the next 10-minute wind speed graph point. For current
     * graph point, just subtract 1 (range from 0 to 23 on VP/VP2
     * console and 0 to 24 on Vantage Vue console)
     */
    next10mWindSpeed: number;
    /**
     * Points to the next 15-minute wind speed graph point. For current
     * graph point, just subtract 1 (range from 0 to 23 on VP/VP2
     * console and 0 to 24 on Vantage Vue console)
     */
    next15mWindSpeed: number;
    /**
     * Points to the next hour wind speed graph point. For current
     * graph point, just subtract 1 (range from 0 to 23 on VP/VP2
     * console and 0 to 24 on Vantage Vue console)
     */
    nextHourWindSpeed: number;
    /**
     * Points to the next daily wind speed graph point. For current
     * graph point, just subtract 1 (range from 0 to 23 on VP/VP2
     * console and 0 to 24 on Vantage Vue console)
     */
    nextDailyWindSpeed: number;
    /**
     * Points to the next minute rain graph point. For current
     * graph point, just subtract 1 (range from 0 to 23 on VP/VP2
     * console and 0 to 24 on Vantage Vue console)
     */
    nextMinuteRain: number;
    /**
     * Points to the next monthly rain graph point. For current
     * graph point, just subtract 1 (range from 0 to 23 on VP/VP2
     * console and 0 to 24 on Vantage Vue console)
     */
    nextMonthlyRain: number;
    /**
     * Points to the next yearly rain graph point. For current
     * graph point, just subtract 1 (range from 0 to 23 on VP/VP2
     * console and 0 to 24 on Vantage Vue console)
     */
    nextYearlyRain: number;
    /**
     * Points to the next seasonal rain graph point. Yearly rain always
     * resets at the beginning of the calendar, but seasonal rain resets
     * when rain season begins. For current graph point, just subtract 1
     * (range from 0 to 23 on VP/VP2 console and 0 to 24 on Vantage
     * Vue console)
     */
    nextSeasonalRain: number;
    /**
     * Points to the next rain storm graph point. For current
     * graph point, just subtract 1 (range from 0 to 23 on VP/VP2
     * console and 0 to 24 on Vantage Vue console)
     */
    nextRainStorm: number;
    currentMinuteIndex: number;
}
