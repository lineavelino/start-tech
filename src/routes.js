import { Router } from 'express';
import database from './database';
import UserController from './app/controllers/UserController';

const routes = new Router();

async () => {
    await database.connection.sync()
}

routes.post('/users', UserController.store)

export default routes;