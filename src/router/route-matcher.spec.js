const RouteMatcher = require('./route-matcher');
const Route = require('./route');
const expect = require('chai').expect;
const RouteCollection = require('./route-collection');

describe('RouteMatcher', function() {
    context('parse', function() {
        it('should return null', function() {
            let routeMatcher = new RouteMatcher(new RouteCollection());
            let route = routeMatcher.match({url: '/'});
            expect(route).to.be.empty;
        });

        it('should return route', function() {
            let routeCollection = new RouteCollection();
            routeCollection.add(new Route('/'));
            let routeMatcher = new RouteMatcher(routeCollection);
            let routes = routeMatcher.match({url: '/'});
            expect(routes[0]).to.be.an.instanceOf(Route);
        });
    });
});