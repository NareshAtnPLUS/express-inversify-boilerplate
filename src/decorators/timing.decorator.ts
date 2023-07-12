import logger from '../logger';
import { commonConstants } from 'common-constants';
export function timeit() {
    return function (
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor,
    ) {
        const func: Function = descriptor.value;
        descriptor.value = async function (...args: any[]) {
            const start = Date.now();
            const v = await func.apply(this, args);
            const end = Date.now();
            const timeTaken = (end - start) / commonConstants.dateTime.msPerSec;

            logger.info(`${propertyKey} method executed in ${timeTaken}s.`);
            return v;
        };
    };
}
