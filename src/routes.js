import { Router } from 'express';
import User from './app/models/User';
import database from './database';

const routes = new Router();

routes.get('/', async (req, res) => {
    await database.connection.sync()

    const user = await User.create({
        name: 'Aline',
        email: 'aline@email.com',
        password_hash: '45641651',
    });
    return res.json(user);
});

export default routes;