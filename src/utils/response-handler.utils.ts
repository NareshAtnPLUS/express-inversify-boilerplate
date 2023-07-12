import express from 'express';
import logger from '../logger';
import { APIResponse } from '../types/api-response.type';
import { statusCodes } from 'common-constants';
import { injectable } from 'inversify';

export const ResponseHandlerUtils = {
    errorHandler(
        err: any,
        res: express.Response,
        controller: string,
        meta?: any,
    ) {
        return res
            .status(statusCodes.internalServerError)
            .send(this.failureResponse(err, controller, meta));
    },
    successResponse(
        message: Object | [],
        controller: string,
        meta?: any,
    ): APIResponse {
        logger.info({
            message: `${controller} completed successfully`,
            time: new Date().toISOString(),
        });
        return {
            success: true,
            message,
            meta,
        };
    },
    failureResponse(
        message: Object | [] | any,
        controller: string,
        meta?: any,
    ): APIResponse {
        logger.error({
            message: `${controller} failed for some reasons.`,
            time: new Date().toISOString(),
        });
        return {
            success: false,
            message,
            meta,
        };
    },
};
export const ResponseHandlerUtilsIdentifier = Symbol('ResponseHandlerUtils');
export type ResponseHandlerUtilsType = typeof ResponseHandlerUtils;
