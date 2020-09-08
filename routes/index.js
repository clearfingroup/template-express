import express from 'express';
import { Log } from '../class/Class.js'

const router = express.Router();

router.get('/', async (request, response) => {
    Log.update('Router', 'GET', `Navigated to /`, 'blue');
    response.render('index');
});

export const indexRouter = router;