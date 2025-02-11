import morgan from "morgan";
import chalk from "chalk";
import logger from "./logger";
import express from "express";

// Define custom tokens for colored output

morgan.token("colored-method", (req) => {
    const method = req.method;
    switch (method) {
        case "GET":
            return chalk.green(method);
        case "POST":
            return chalk.blue(method);
        case "PUT":
            return chalk.yellow(method);
        case "DELETE":
            return chalk.red(method);
        default:
            return chalk.white(method);
    }
});

morgan.token("colored-status", (req, res) => {
    const status = res.statusCode;
    if (status >= 500) return chalk.red(status.toString());
    if (status >= 400) return chalk.yellow(status.toString());
    if (status >= 300) return chalk.cyan(status.toString());
    if (status >= 200) return chalk.green(status.toString());
    return chalk.white(status.toString());
});

morgan.token("colored-url", (req: express.Request) => {
    return chalk.magenta(req.originalUrl);
});

const customFormat =
    ":colored-method :colored-status :colored-url :response-time ms - :res[content-length]";

const stream = {
    write: (message: string) => logger.http(message.trim()),
};

// Optionally, skip logging in test environments.
const skip = () => process.env.NODE_ENV === "test";

const morganMiddleware = morgan(customFormat, { stream, skip });

export default morganMiddleware;
