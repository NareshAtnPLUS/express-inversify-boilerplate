import { Request, Response } from 'express';
import { injectable, inject } from 'inversify';
import { interfaces, controller, httpGet } from 'inversify-express-utils';
import { UserService } from 'src/services/users.service';

@controller('/api/users')
export class UserController implements interfaces.Controller {
    constructor(@inject(UserService) private userService: UserService) {}

    @httpGet('/')
    async getUsers(req: Request, res: Response) {
        const users = await this.userService.getUsers();
        res.send(users);
    }
}
