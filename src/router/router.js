const Route = require('./route');

module.exports = class Router {

    constructor(collection) {
        this.collection = collection;
    }

    route(path, defaults) {
        const route = this._buildRoute(path, defaults);
        this.collection.add(route);
        return route;
    }
    
    _buildRoute(path, defaults) {
        return new Route(path, defaults);
    }
    
}