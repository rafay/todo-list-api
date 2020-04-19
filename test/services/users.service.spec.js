var chai = require('chai');
var chaiAsPromised = require("chai-as-promised");
var usersService = require('../../services/users.service');

chai.use(chaiAsPromised);
chai.should();

describe('UsersService', function () {
    describe('authenticate', function () {

        it('Should resolve a promise succesfully for correct credentials', function () {
            this.timeout(5000);
            let userData = {name: 'rafay', password: 'rafay123'};
            return usersService.authenticate(userData).should.be.fulfilled;
        });

        it('Should reject a promise for wrong credentials', function () {
            this.timeout(5000);
            let userData = {name: 'rafay', password: 'rafay1234'};
            return usersService.authenticate(userData).should.be.rejected;
        });
    });
});