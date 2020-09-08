import path from 'path';

export const SERVER = {
	'PORT': 80,
	'VIEW_ENGINE': 'ejs'
};

export const DIRECTORY = {
    'VIEWS': path.join(path.resolve(), 'views'),
    'PUBLIC': path.join(path.resolve(), 'public'),
    'ROUTES': path.join(path.resolve(), 'routes'),
    'DATABASE': path.join(path.resolve(), 'database')
};

export const ROUTES = {
    'INDEX': {
        'name': 'index',
        'path': '/'
    }
};

export const DATABASE = {
    'DATABASE': 'database.json'
};