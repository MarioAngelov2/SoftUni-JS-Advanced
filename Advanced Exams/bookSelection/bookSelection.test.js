let bookSelection = require('../bookSelection');
let { assert } = require('chai');

describe('Test bookSelection', function() {
    describe('Test isGenreSuitable', function() {
        it ('Test invalid value', () => {
            assert.equal(bookSelection.isGenreSuitable('Thriller', 12), `Books with Thriller genre are not suitable for kids at 12 age`);
            assert.equal(bookSelection.isGenreSuitable('Horror', 1), `Books with Horror genre are not suitable for kids at 1 age`);
        });
        it ('Test valid value', () => {
            assert.equal(bookSelection.isGenreSuitable('Comedy', 1), `Those books are suitable`);
            assert.equal(bookSelection.isGenreSuitable('Action', 16), `Those books are suitable`);
        })
    });

    describe('Test isItAffordable', function() {
        it ('Test if book is affordable', () => {
            assert.equal(bookSelection.isItAffordable(10, 20), `Book bought. You have 10$ left`);
        });
        it ('Test if book is not affordable', () => {
            assert.equal(bookSelection.isItAffordable(10, 5), `You don't have enough money`);
        });
        it ('Test invalid value', () => {
            assert.throw(() => bookSelection.isItAffordable('str', 'pesho'), 'Invalid input');
        })
    });

    describe('Test suitableTitles', function() {
        it ('Test invalid input', () => {
            assert.throw(() => bookSelection.suitableTitles('pesho', 'gosho'), 'Invalid input');
            assert.throw(() => bookSelection.suitableTitles({}, 'gosho'), 'Invalid input');
            assert.throw(() => bookSelection.suitableTitles(['pesho'], {}), 'Invalid input');
        });
        it ('Test valid input', () => {
            assert.equal(bookSelection.suitableTitles)
        })
    })
})