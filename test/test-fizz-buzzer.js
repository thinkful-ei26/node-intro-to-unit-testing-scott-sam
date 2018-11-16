'use strict';
// import chai, declare expect variable
const expect = require('chai').expect;

// import fizzBuzzer
const fizzBuzzer = require('../fizzBuzzer');

// unit tests for our `adder` function
describe('fizzBuzzer', function() {

  // test the normal case
  it('should show fizz for mult of 3 ', function() {
    // range of normal inputs, including
    // notable cases like negative answers
    const cases = [
      {num: 9, expected: 'fizz'},
      {num: 3, expected: 'fizz'},
      {num: 12, expected: 'fizz'},
      {num: 25, expected: 'buzz'},
      {num: 15, expected: 'fizz-buzz'},
      {num: 65, expected: 'fizz-buzz'},
      {num: 91, expected: 91}
    ];
    // for each set of inputs (a, b), `adder` should
    // produce the expected value
    cases.forEach(function(input) {
      const answer = fizzBuzzer(input.num);
      expect(answer).to.equal(input.expected);
    });
  });

  // it('should show buzz for mult of 5', function() {
  //   expect(fizzBuzzer(5)).to.equal('buzz');
  // });
  //
  // it('should show fizz-buzz for mult of 15 ', function() {
  //   // range of normal inputs, including
  //   // notable cases like negative answers
  //   const fizzCases = [
  //     {num: 15, expected: 'fizz-buzz'},
  //     {num: 75, expected: 'fizz-buzz'},
  //     {num: 91, expected: 91},
  //   ];
  //   // for each set of inputs (a, b), `adder` should
  //   // produce the expected value
  //   fizzCases.forEach(function(input) {
  //     const answer = fizzBuzzer(input.num);
  //     expect(answer).to.equal(input.expected);
  //   });
  // });

//   it('should raise error if args not numbers', function() {
//     // range of bad inputs where not both are numbers
//     const badInputs = [
//       ['a', 1],
//       ['1', 2],
//       [2, false]
//     ];
//     // prove that an error is raised for bad inputs
//     badInputs.forEach(function(input) {
//       expect(function() {
//         adder(input[0], input[1]);
//       }).to.throw(Error);
//     });
//   });
});
