import express, { Request, Response } from 'express';
import { injectable, inject } from 'inversify';
import {
    interfaces,
    controller,
    httpGet,
    httpPost,
    request,
    response,
} from 'inversify-express-utils';
import { UserService } from '../services/users.service';
import { tryCatch } from '../decorators/try-catch.decorator';
import {
    ResponseHandlerUtilsIdentifier,
    ResponseHandlerUtilsType,
} from '../utils/response-handler.utils';
import { statusCodes } from 'common-constants';

@controller('/api/users')
export class UserController implements interfaces.Controller {
    constructor(
        @inject(UserService) private userService: UserService,
        @inject(ResponseHandlerUtilsIdentifier)
        private responseHandlerUtils: ResponseHandlerUtilsType,
    ) {}

    @httpGet('/')
    async getUsers(req: Request, res: Response) {
        const users = await this.userService.getUsers();
        return res
            .status(statusCodes.ok)
            .send(
                this.responseHandlerUtils.successResponse(
                    users,
                    this.getUsers.name,
                ),
            );
    }
    @httpPost('/register')
    @tryCatch()
    async register(
        @request() req: express.Request,
        @response() res: express.Response,
    ) {
        const propertyManagers = req.body.users;
        const user = await this.userService.register(propertyManagers);
    }
}
// develop api for adding property,reading properties/id, udpate property info with id, delete with id
// assigning tenents
// sign up and login

// landlord
// propertyManager
