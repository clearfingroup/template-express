const Request = class {
    constructor() {
        this.xmlHttpRequest = new XMLHttpRequest();
        this.method = 'GET';
        this.headers = { };
        this.url = '/';
        this.data;
    }
};

Request.prototype.send = function() {
    return new Promise((resolve, reject) => {
        this.xmlHttpRequest.onreadystatechange = () => {
            if (this.xmlHttpRequest.readyState == 4) {
                if (this.xmlHttpRequest.status >= 300) {
                    reject(`Unable to perform HTTP request to ${this.url}. Request status: ${this.xmlHttpRequest.status}.`);
                } else {
                    resolve(this.xmlHttpRequest.responseText);
                }
            }
        };

        this.xmlHttpRequest.open(this.method, this.url, true);
        Object.entries(this.headers).forEach(entry => 
            this.xmlHttpRequest.setRequestHeader(entry[0], entry[1]));
        this.xmlHttpRequest.send(this.data);
    });
};

export default Request;