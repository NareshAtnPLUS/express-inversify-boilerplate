import winston from 'winston';
// Create a Winston logger instance
const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'conversphere-app' },
    transports: [
        new winston.transports.Console(),
        // new winston.transports.File({ filename: 'combined.log' }),
    ],
});
export default logger;
