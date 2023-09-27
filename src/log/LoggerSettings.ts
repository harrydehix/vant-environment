import LogLevel from "./LogLevel";

export default interface LoggerSettings{
    /** The minimimum log level that will be output. Default is `"info"`. Corresponding environment variable: `LOG_LEVEL` */
    logLevel: LogLevel,
    /** Whether the console log is enabled. Default is `true`. Corresponding environment variable: `CONSOLE_LOG` */
    consoleLog: boolean,
    /** Whether file logging is enabled. Default is `true`. Corresponding environment variable: `FILE_LOG` */
    fileLog: boolean,
    /** Whether to log detailed error information. Default is `true`. Corresponding environment variable: `LOG_ERROR_INFORMATION´ */
    logErrorInformation: boolean,
}

export type MinimumLoggerSettings = Partial<LoggerSettings>;

export const defaultLoggerSettings : LoggerSettings = {
    logLevel: "info",
    consoleLog: true,
    fileLog: true,
    logErrorInformation: true,
}