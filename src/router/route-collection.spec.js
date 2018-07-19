const RouteCollection = require('./route-collection');
const Route = require('./route');
const expect = require('chai').expect;

describe('RouteCollection', function() {
    context('add/findRoutes', function() {
        it('should add one route', function() {
            const routeCollection = new RouteCollection();
            routeCollection.add(new Route('/'));
            expect(routeCollection.findRoutes('/').length).to.be.equal(1);
        });
    });

    context('getIterator', function() {
        it('should return generator', function() {
            const routeCollection = new RouteCollection();
            routeCollection.add(new Route('/'));
            routeCollection.add(new Route('/'));
            const it = routeCollection.getIterator();

            let generatorData = [];
            for(let value of it) {
                generatorData.push(value);
            }
            expect(generatorData.length).to.be.equal(2);
            expect(generatorData[0]).to.be.instanceOf(Route);
            expect(generatorData[1]).to.be.instanceOf(Route);
        });
    });

    context('iterable', function() {
        it('should return iterable', function() {
            const routeCollection = new RouteCollection();
            routeCollection.add(new Route('/'));
            routeCollection.add(new Route('/'));

            let iteratorData = [];
            for(let value of routeCollection) {
                iteratorData.push(value);
            }
            expect(iteratorData.length).to.be.equal(2);
            expect(iteratorData[0]).to.be.instanceOf(Route);
            expect(iteratorData[1]).to.be.instanceOf(Route);
        });
    });
});