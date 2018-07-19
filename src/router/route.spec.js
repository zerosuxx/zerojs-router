const Route = require('./route');
const expect = require('chai').expect;

describe('Route', function() {
    context('getPath', function() {
        it('should return /test from /test template', function() {
            let route = new Route('/test');
            expect(route.getPath()).to.be.equal('/test');
        });

        it('should return /test from /test/:hello template', function() {
            let route = new Route('/test/:hello');
            expect(route.getPath()).to.be.equal('/test');
        });
    });
});