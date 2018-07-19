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
};