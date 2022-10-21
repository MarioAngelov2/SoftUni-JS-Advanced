let companyAdministration = require('../companyAdministration');
let { assert } = require('chai');
const { hiringEmployee, calculateSalary } = require('../companyAdministration');

describe('Test companyAdministration', function() {
    describe('Test hiringEmployee', function() {
        it('Test Different Position', function() {
            assert.throw(() => companyAdministration.hiringEmployee('Mario', 'DifferentPosition', 10), `We are not looking for workers for this position.`);
        });

        it ('Test experience with greater 3 years', () => {
            assert.equal(companyAdministration.hiringEmployee('Mario', 'Programmer', 3), `Mario was successfully hired for the position Programmer.`);
            assert.equal(companyAdministration.hiringEmployee('Mario', 'Programmer', 10), `Mario was successfully hired for the position Programmer.`);
        });

        it ('Test experience with less 3 years', () => {
            assert.equal(companyAdministration.hiringEmployee('Mario', 'Programmer', 1), `Mario is not approved for this position.`);
        })
    })

    describe('Test calculateSalary', function() {
        it('Test calculateSalary with wrong value', () => {
            assert.throw(() => companyAdministration.calculateSalary(-10), 'Invalid hours');
            assert.throw(() => companyAdministration.calculateSalary('pesho'), 'Invalid hours');
        });

        it ('Test calculateSalary with valid value', () => {
            assert.equal(companyAdministration.calculateSalary(0), 0);
            assert.equal(companyAdministration.calculateSalary(1), 15);
            assert.equal(companyAdministration.calculateSalary(10), 10 * 15);
            assert.equal(companyAdministration.calculateSalary(160), 160 * 15);
        });

        it ('Test calculateSalary bonus', () => {
            assert.equal(companyAdministration.calculateSalary(161), 161 * 15 + 1000);
            assert.equal(companyAdministration.calculateSalary(200), 200 * 15 + 1000);
        })
    })

    describe('Test firedEmployee', () => {
        it ('Test firedEmployee with wrong names', () => {
            assert.throw(() => companyAdministration.firedEmployee([], 1), 'Invalid');
            assert.throw(() => companyAdministration.firedEmployee(['Pesho'], 1), 'Invalid');
            assert.throw(() => companyAdministration.firedEmployee({}, 1), 'Invalid');
            assert.throw(() => companyAdministration.firedEmployee(['Mario'], 2), 'Invalid');
            assert.throw(() => companyAdministration.firedEmployee(['Mario'], 'Pesho'), 'Invalid');
        });

        it ('Test removing employee from firedEmployee', () => {
            assert.equal(companyAdministration.firedEmployee(['Mario'], 0), '');
            assert.equal(companyAdministration.firedEmployee(['Mario', 'Pesho'], 0), 'Pesho')
            assert.equal(companyAdministration.firedEmployee(['Mario', 'Pesho', 'Gosho'], 1), 'Mario, Gosho')
        })
    })
})