"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Pointers pointing to the graph points in the vantage's EEPROM
 */
class GraphPointers {
    constructor() {
        /**
         * Points to the next 10-minute wind speed graph point. For current
         * graph point, just subtract 1 (range from 0 to 23 on VP/VP2
         * console and 0 to 24 on Vantage Vue console)
         */
        this.next10mWindSpeed = 0;
        /**
         * Points to the next 15-minute wind speed graph point. For current
         * graph point, just subtract 1 (range from 0 to 23 on VP/VP2
         * console and 0 to 24 on Vantage Vue console)
         */
        this.next15mWindSpeed = 0;
        /**
         * Points to the next hour wind speed graph point. For current
         * graph point, just subtract 1 (range from 0 to 23 on VP/VP2
         * console and 0 to 24 on Vantage Vue console)
         */
        this.nextHourWindSpeed = 0;
        /**
         * Points to the next daily wind speed graph point. For current
         * graph point, just subtract 1 (range from 0 to 23 on VP/VP2
         * console and 0 to 24 on Vantage Vue console)
         */
        this.nextDailyWindSpeed = 0;
        /**
         * Points to the next minute rain graph point. For current
         * graph point, just subtract 1 (range from 0 to 23 on VP/VP2
         * console and 0 to 24 on Vantage Vue console)
         */
        this.nextMinuteRain = 0;
        /**
         * Points to the next monthly rain graph point. For current
         * graph point, just subtract 1 (range from 0 to 23 on VP/VP2
         * console and 0 to 24 on Vantage Vue console)
         */
        this.nextMonthlyRain = 0;
        /**
         * Points to the next yearly rain graph point. For current
         * graph point, just subtract 1 (range from 0 to 23 on VP/VP2
         * console and 0 to 24 on Vantage Vue console)
         */
        this.nextYearlyRain = 0;
        /**
         * Points to the next seasonal rain graph point. Yearly rain always
         * resets at the beginning of the calendar, but seasonal rain resets
         * when rain season begins. For current graph point, just subtract 1
         * (range from 0 to 23 on VP/VP2 console and 0 to 24 on Vantage
         * Vue console)
         */
        this.nextSeasonalRain = 0;
        /**
         * Points to the next rain storm graph point. For current
         * graph point, just subtract 1 (range from 0 to 23 on VP/VP2
         * console and 0 to 24 on Vantage Vue console)
         */
        this.nextRainStorm = 0;
        /*
         * Keeps track of the minute within an hour for the rain
         * calculation. (range from 0 to 59)
         * */
        this.currentMinuteIndex = 0;
    }
}
exports.default = GraphPointers;
//# sourceMappingURL=GraphPointers.js.map