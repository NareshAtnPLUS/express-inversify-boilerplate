import 'reflect-metadata';
import express from 'express';
import container from '../ioc/inversify.config';
import logger from '../logger';
import { commonConstants } from 'common-constants';
import { ResponseHandlerUtils } from '../utils/response-handler.utils';

export function tryCatch() {
    return function (
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor,
    ) {
        const func: Function = descriptor.value;

        descriptor.value = async function (...args: any[]) {
            const res: express.Response = args[1];
            try {
                const v = await func.apply(this, args);
            } catch (err) {
                ResponseHandlerUtils.errorHandler(err, res, func.name);
                console.error(err);
            }
            const start = Date.now();
            const v = await func.apply(this, args);
            const end = Date.now();
            const timeTaken = (end - start) / commonConstants.dateTime.msPerSec;

            logger.info(`${propertyKey} method executed in ${timeTaken}s.`);
            return v;
        };
    };
}
