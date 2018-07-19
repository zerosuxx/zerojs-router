module.exports = class RouteMatcher {
    constructor(collection) {
        this.collection = collection;
    }
    
    match(request) {
        const path = request.url;
        return this.collection.findRoutes(path);
    }
    
    parseArgs(url) {
        return url
            .split('/')
            .filter(value => value !== '')
            .map(value => decodeURIComponent(value));
    }
};