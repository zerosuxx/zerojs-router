const Route = require('./route');

module.exports = class RouteCollection {
    constructor() {
        this.routes = {};
    }
    
    /**
     * @param {Route} route 
     * @returns {RouteCollection}
     */
    add(route) {
        const path = route.getPath();
        if(!this.routes[path]) {
            this.routes[path] = [];
        }
        this.routes[path].push(route);
        return this;
    }

    /**
     * @param {String} path 
     * @returns {Route[]|Array}
     */
    findRoutes(path) {
        return this.routes[path] || [];
    }

    *getIterator() {
        for(let path of Object.keys(this.routes)) {
            yield *this.findRoutes(path);
        }
    }

    [Symbol.iterator]() { 
        return this.getIterator();
    }

    /*_findRoute(request) {
        const path = request.path;
        const method = request.method;
        const routes = this.findRoutes(path);
        const template = route.getTemplate();
        var templateRegex = /:([a-z0-9-_]+)/gim;

        const keys = [];
        let urlRegex = template.replace(/\/\*$/, '(?:/(.*))?');
        while(result = templateRegex.exec(template)) {
            urlRegex = urlRegex.replace(result[0], '(?:([^/]+))');
            keys.push(result[1]);
        }

        var params = new RegExp(urlRegex).exec(path);
        var args = [];
        if(keys.length && params) {
            for(var i = 0; i <= keys.length; i++) {
                
            }
            args = params.slice(keys.length).filter(value => value !== undefined);
        }
    }*/
};