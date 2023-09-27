import winston from "winston";
import { defaultLoggerSettings, MinimumLoggerSettings } from "./LoggerSettings";
import 'winston-daily-rotate-file';
import { inspect } from "util";
import merge from "lodash.merge";

export default function configureLogger(logger: winston.Logger, minimumSettings: MinimumLoggerSettings, label: string){
    const settings = merge(defaultLoggerSettings, minimumSettings);

    const consoleTransport = new winston.transports.Console({
        format: winston.format.combine(
                winston.format.colorize({all: true}),
                winston.format.label({label: label}),
                winston.format.timestamp(),
                winston.format.printf(
                    (info) => `${info.label}  ${info.timestamp}  ${info.level} : ${info.message}`
                )
            )
    });

    const fileTransport = new winston.transports.DailyRotateFile({ 
        filename: `./logs/${label}-%DATE%.log`, 
        datePattern: 'YYYY-MM-DD',
        maxFiles: '14d',
        format: winston.format.combine(
            winston.format.label({label: label}),
            winston.format.timestamp(),
            winston.format.printf(
                (info) => `${info.label}  ${info.timestamp}  ${info.level} : ${info.message}`
            )
        )
    });

    const transports = [];
    if(settings.consoleLog){
        transports.push(consoleTransport);
    }

    if(settings.fileLog){
        transports.push(fileTransport)
    }
    
    logger.clear();
    logger.configure({
        level: settings.logLevel,
        transports: transports,
    });

    
    (logger as any).error = (err: any) => {
        if (err instanceof Error) {
            err = err as any;
            logger.log({ level: 'error', message: 
                settings.logErrorInformation ? `${err.status ? `[${err.status}]` : ' '} ${err.stack || err}` : `${err.status ? `[${err.status}]` : ' '} ${err.message}`});
            if(err.details && settings.logErrorInformation){
                logger.log({ level: 'error', message: `Error details: ${inspect(err.details, false, null, false)}`});
            }
        } else {
            logger.log({ level: 'error', message: err });
        }
    };

    logger.info("Configured logger!");
}