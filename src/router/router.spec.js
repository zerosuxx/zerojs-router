const Router = require('./router');
const RouteCollection = require('./route-collection');
const expect = require('chai').expect;

describe('Router', function() {
    context('route', function() {
        it.only('should add route', function() {
            const collection = new RouteCollection();
            const router = new Router(collection);
            const route = router.route('/', {action: 'index'});
            expect(collection.findRoutes('/')[0]).to.be.eql(route);
        });
    });
});