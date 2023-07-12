import { Container } from 'inversify';
import {
    interfaces,
    InversifyExpressServer,
    TYPE,
} from 'inversify-express-utils';

import {} from 'inversify-express-utils';
import { UserService } from '../services/users.service';
import { UserController } from '../controllers/users.controller';
import {
    ResponseHandlerUtils,
    ResponseHandlerUtilsIdentifier,
    ResponseHandlerUtilsType,
} from '../utils/response-handler.utils';

const container = new Container();

// Register the UserService class as a singleton instance
container.bind<UserService>(UserService).toSelf().inSingletonScope();

// Register the UserController class as a controller
container.bind(UserController).to(UserController).inSingletonScope();

container
    .bind<ResponseHandlerUtilsType>(ResponseHandlerUtilsIdentifier)
    .toConstantValue(ResponseHandlerUtils);
export default container;
