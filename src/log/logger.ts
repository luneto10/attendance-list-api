import winston from "winston";

const { combine, timestamp, printf, colorize, errors } = winston.format;

const logFormat = printf(({ level, message, timestamp, stack }) => {
    return `${timestamp} ${level}: ${stack || message}`;
});

const logger = winston.createLogger({
    level: process.env.NODE_ENV === "production" ? "info" : "debug",
    transports: [
        new winston.transports.Console({
            format: combine(
                colorize({ all: true }),
                timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
                errors({ stack: true }),
                logFormat
            ),
        }),
        new winston.transports.File({
            filename: "logs/error.log",
            level: "error",
        }),
        new winston.transports.File({ filename: "logs/combined.log" }),
    ],
    exceptionHandlers: [
        new winston.transports.File({ filename: "logs/exceptions.log" }),
    ],
});

export default logger;
