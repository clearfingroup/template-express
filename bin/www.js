import http from 'http';
import app from '../app.js';
import { SERVER } from '../config.js';
import { Log } from '../class/class.js';

app.set('port', SERVER.PORT);

const HTTP_SERVER = http.createServer(app);
HTTP_SERVER.listen(SERVER.PORT);
HTTP_SERVER.on('listening', () =>
    Log.update('Server', 'init', `Server started listening on port ${SERVER.PORT}`, 'yellow'));