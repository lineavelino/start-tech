import { Router } from 'express';
import database from './database';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

const routes = new Router();

async () => {
    await database.connection.sync()
}

routes.post('/users', UserController.store)

routes.post('/session', SessionController.store)

export default routes;