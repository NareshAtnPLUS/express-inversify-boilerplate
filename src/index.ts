import "reflect-metadata";
import * as express from "express";
import { InversifyExpressServer, getControllersFromContainer } from "inversify-express-utils";
import { serverConfig } from "./config/server.config";
import container from "./ioc/inversify.config";
import listEndpoints from 'express-list-endpoints'
import morgan from 'morgan';
import compression from 'compression';
const server = new InversifyExpressServer(container);
server.setConfig((app: express.Application) => {
    app.use(express.json());
    // app.use(morgan('tiny'));
    app.use(morgan('combined'));
    app.use(compression())

});

const app = server.build();

app.listen(serverConfig.PORT||3000, () => {
    console.log(`Server started on port ${serverConfig.PORT}`);
    listEndpoints(app)
    .filter(it=> it.path !== "*")
    .map(it=> console.log(`${it.methods}: ${it.path}`))
    
})
