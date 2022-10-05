// let {assert} = require("chai");
// let {isOddOrEven} = require("../02. evenOrOdd");

// describe('test isOddOrEven with incorrect value', () => {
//     it ('Result should be undefined with empty array arg', () => {
//         assert.equal(isOddOrEven([]), undefined);
//     });

//     it ('Result should be undefined with empty object arg', () => {
//         assert.equal(isOddOrEven({}), undefined);
//     });

//     it ('Result should be undefined with object arg', () => {
//         assert.equal(isOddOrEven({name:'Unknown Name'}), undefined);
//     });

//     it ('Result should be undefined with Number', () => {
//         assert.equal(isOddOrEven(1), undefined);
//     });

//     it ('Result should be undefined with boolean', () => {
//         assert.equal(isOddOrEven(Boolean), undefined);
//     });
// });

// describe('test isOddOrEven with correct value', () => {
//     it ('Result from string length should be even', () => {
//         assert.equal(isOddOrEven('Mari'), 'even');
//     });

//     it ('Result from string length should be odd', () => {
//         assert.equal(isOddOrEven('Mar'), 'odd');
//     });
// })