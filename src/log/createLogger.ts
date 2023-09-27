import winston from "winston";

export default function createLogger(){
    return winston.createLogger({
        silent: true,
    });
}