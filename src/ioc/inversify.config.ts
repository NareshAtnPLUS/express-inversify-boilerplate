
import { Container } from "inversify";
import { interfaces, InversifyExpressServer, TYPE } from "inversify-express-utils";
import { UserController } from "src/controllers/users.controller";
import { UserService } from "src/services/users.service";
import {} from 'inversify-express-utils'

const container = new Container();

// Register the UserService class as a singleton instance
container.bind<UserService>(UserService).toSelf().inSingletonScope();

// Register the UserController class as a controller
container.bind(UserController).to(UserController).inSingletonScope()


export default container;
