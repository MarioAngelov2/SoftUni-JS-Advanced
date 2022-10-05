let { assert } = require('chai');
let { lookupChar } = require('../03. charLookUp');

describe('test lookupChar with incorect value', () => {
    /*
    If the first parameter is NOT a string or the second parameter is NOT a number - return undefined 
    */
    it('Result should be undefined if the first parameter is not a string', () => {
        assert.equal(lookupChar(1, 1), undefined);
    });

    it('Result should be undefined if the second parameter is not a number', () => {
        assert.equal(lookupChar('text', 'text'), undefined);
    });

    it('Result should be undefined if the index is decimal number', () => {
        assert.equal(lookupChar('Name', 0.99), undefined);
    });

    /*
     If both parameters are of the correct type but the value of the index is incorrect (bigger than or equal to the string length or a negative number) - return "Incorrect index". 
    */
    it('Result should be Incorrect index if the value of the index is bigger than the string length', () => {
        assert.equal(lookupChar('Mario', 200), 'Incorrect index');
    });

    it('Result should be Incorrect index if the value of the index is equal to the string length', () => {
        assert.equal(lookupChar('Mario', 5), 'Incorrect index');
    });

    it('Result should be Incorrect index if the value of the index is negative number', () => {
        assert.equal(lookupChar('Mario', -1), 'Incorrect index');
    });
});

    /* 
    If both parameters have correct types and values - return the character at the specified index in the string.
    */

    describe('test lookupChar with correct type and value', () => {
        it ('Result should be M with zero index (Mario)', () => {
            assert.equal(lookupChar('Mario', 0), 'M');
        });

        it ('Result should be o with last index (Mario)', () => {
            assert.equal(lookupChar('Mario', 4), 'o');
        });
    });