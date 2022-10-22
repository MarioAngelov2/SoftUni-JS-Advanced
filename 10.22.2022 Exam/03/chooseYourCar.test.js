let chooseYourCar = require('../chooseYourCar');
let { assert } = require('chai');

describe ('Test chooseYourCar', function() {
    describe ('Test choosingType', function () {
        it ('Test invalid year', () => {
            assert.throw(() => chooseYourCar.choosingType('Coupe', 'Red', 1899), "Invalid Year!");
            assert.throw(() => chooseYourCar.choosingType('Coupe', 'Red', 2023), "Invalid Year!");
        });

        it ('Test invalid type', () => {
            assert.throw(() => chooseYourCar.choosingType('Coupe', 'Red', 2010), "This type of car is not what you are looking for.");
        });

        it ('Test valid input', () => {
            assert.equal(chooseYourCar.choosingType('Sedan', 'Red', 2020), "This Red Sedan meets the requirements, that you have.");
            assert.equal(chooseYourCar.choosingType('Sedan', 'Red', 2010), "This Red Sedan meets the requirements, that you have.");
            assert.equal(chooseYourCar.choosingType('Sedan', 'Red', 2009), "This Sedan is too old for you, especially with that Red color.");
        });
    });

    describe ('Test brandName', function() {
        it ('Test invalid array index', () => {
            assert.throw(() => chooseYourCar.brandName([], 1), "Invalid Information!");
            assert.throw(() => chooseYourCar.brandName(['BMW'], 1), "Invalid Information!");
            assert.throw(() => chooseYourCar.brandName({}, 1), "Invalid Information!");
            assert.throw(() => chooseYourCar.brandName(['BMW'], 2), "Invalid Information!");
            assert.throw(() => chooseYourCar.brandName(['BMW'],'Toyota'), "Invalid Information!");
        });

        it ('Test valid array', () => {
            assert.equal(chooseYourCar.brandName(['BMW'], 0), '');
            assert.equal(chooseYourCar.brandName(['BMW', 'Toyota'], 0), 'Toyota');
            assert.equal(chooseYourCar.brandName(['BMW', 'Toyota', 'Peugeot'], 1), 'BMW, Peugeot');
        })
    });

    describe ('Test CarFuelConsumption', () => {
        it ('Test consumption less than 7L per 100km', () => {
            assert.equal(chooseYourCar.carFuelConsumption(100, 5), "The car is efficient enough, it burns 5.00 liters/100 km.");
            assert.equal(chooseYourCar.carFuelConsumption(100, 6), "The car is efficient enough, it burns 6.00 liters/100 km.");
            assert.equal(chooseYourCar.carFuelConsumption(100, 7), "The car is efficient enough, it burns 7.00 liters/100 km.");
        });
        
        it ('Test consumption more than 7L per 100km', () => {
            assert.equal(chooseYourCar.carFuelConsumption(100, 8), "The car burns too much fuel - 8.00 liters!");
            assert.equal(chooseYourCar.carFuelConsumption(100, 20), "The car burns too much fuel - 20.00 liters!");
        });

        it ('Test invalid input', () => {
            assert.throw(() => chooseYourCar.carFuelConsumption('str', 'pesho'), "Invalid Information!");
        })
    })
})