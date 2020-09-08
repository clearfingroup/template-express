import Request from './class/Request/Request.js';
import { TESTING } from '../config.js';

const Project = class {
    constructor() {
        this.init();
    }
};

Project.prototype.init = function() {

};

window.Project = new Project();