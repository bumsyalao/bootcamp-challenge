
const assert = require('chai').assert;
const myApp = require('../src/main.js');

describe("getPrimes", function() {

	describe("handle valid input", function() {

		it("should return 2 as prime for 2", function() {
			assert.deepEqual(myApp.getPrimes(2), 2);
		});

		it("should return [2,3,5,7,11,13,17,19] as prime for 20 ", function(){
			assert.deepEqual(myApp.getPrimes(20), [2,3,5,7,11,13,17,19]);
		});

		it("should return [2,3,5,7] as prime for 10", function(){
			assert.deepEqual(myApp.getPrimes(10),[2,3,5,7]);
		});

		it("should return [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47] as prime for 50", function(){
			assert.deepEqual(myApp.getPrimes(50),[2,3,5,7,11,13,17,19,23,29,31,37,41,43,47]);
		});

		it("should return [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67] as prime for 70", function(){
			assert.deepEqual(myApp.getPrimes(70),[2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67]);
		});

		it("should return [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97] as prime for 100", function(){
			assert.deepEqual(myApp.getPrimes(100),[2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97]);
		});

	})

	describe("handle invalid input", function() {

		it("should return 1 is not a prime number as prime for 1 ", function(){
			assert.deepEqual(myApp.getPrimes(1), "1 is not a prime number");
		});

		it ("should return is not a prime number as prime for -8", function() {
			assert.deepEqual(myApp.getPrimes(-8), "-8 is not a prime number")
		});

		it("should return positive integers only as prime for 'demo'", function(){
			assert.deepEqual(myApp.getPrimes('demo'), "positive integers only");
		});

		it("should return is not a prime number as prime for 0", function(){
			assert.deepEqual(myApp.getPrimes(0), "0 is not a prime number");
		});

		it("should return positive integers only as prime for boolean ", function(){
			assert.deepEqual(myApp.getPrimes(true), "positive integers only");
		});

	})

})
