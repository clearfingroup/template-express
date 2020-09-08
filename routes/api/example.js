import express from 'express';
import Log from '../../utils/Log.js';

const router = express.Router();

router.get('/', async (request, response) => {
    Log.update('Router', 'GET', `Navigated to /api/example`, 'blue');
    response.json();
});

export const exampleRouter = router;