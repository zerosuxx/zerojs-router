const Route = require('./route');

module.exports = class RouteMatcher {
    constructor(collection) {
        this.collection = collection;
    }
    
    match(request) {
        const path = request.url;
        return this.collection.findRoutes(path);
    }
    
    parseArgs(path) {
        return path
            .split('/')
            .filter(value => value !== '')
            .map(value => decodeURIComponent(value));
    }

    /**
     * @param {Route} route 
     */
    _matchRoute(route) {
        
    }
};