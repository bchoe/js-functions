/**
 * Converts a number a string.
 * @param {number} n
 * @return {string} the number as a string
 */

function numberToString(n){

 var num=n.toString(); 
 console.log(num);

	return num;

}

numberToString(6);


/**
 * Adds one to a given number.
 * @param {number} n
 * @return {number}
 */
function increase(n){
	
	var num = n + 1 ;
	
	console.log(num);

	return num;
}
increase(6);


/**
 * Subtracts one from a given number.
 * @param {number} n
 * @return {number}
 */
function decrease(n){
	var num = n - 1;
	console.log(num);
	return num;
}
decrease(2);

/**
 * Adds two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the sum
 */

function add(x,y){
	var sum= x+y;
	console.log(sum);
	return sum;
}
add(2,2);

/**
 * Subtracts the second number from the first.
 * @param {number} x
 * @param {number} y
 * @return {number} the difference
 */

function subtract(x,y){
	var difference=x-y;
	console.log(difference);
	return difference;
}
subtract(4,1);

/**
 * Multiplies two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the product
 */
function multiply(x,y){
	var product=x*y;
	console.log(product);
	return product;
}
multiply(5,2);

/**
 * Divides the first number by the second.
 * @param {number} x
 * @param {number} y
 * @return {number} the quotient
 */

function divide(x,y){
	var quotient=x/y;
	console.log(quotient);
	return quotient;
}
divide(10,2);

/**
 * Multiplies a number by itself.
 * @param {number} x, number to be squared
 * @return {number} squared
 */

function square(x){
	var squared= x*x ;
	console.log(squared);
	return squared;
}

square(2);
/**
 * Performs a mathematical operation on two numbers.
 * Also prints out the equation: (i.e.) "1 + 5 = 6" or "8 / 2 = 4".
 * @param {string} operation "add", "subtract", "multiply", or "divide"
 * @param {number} x
 * @param {number} y
 * @return {number} the result
 */

function calculate(opp,x,y){
	if(opp==='add'){
		console.log(x + " + " + y + " = " + (x+y));
		return add(x,y);
	}else if(opp==='subtract'){
		console.log(x + " - " + y + " = " + (x-y));
		return subtract(x,y);
	}else if(opp==='multiply'){
		console.log(x + " * " + y + " = " + (x*y));
		return multiply(x,y);
	}else if(opp==='divide'){
		console.log(x + " / " + y + " = " + (x/y));
		return divide(x,y);
	}else{
		return false;
	}
	
}
	console.log(calculate("add",2,2));


/**
 * Returns true if `a` is greater than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is larger than `b`
 */

function isGreaterThan(a,b){
	if(a>b){
		return true;
	}else{
		return false;
	}
}
console.log (isGreaterThan(10,5));
/**
 * Returns true if `a` is less than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is smaller than `b`
 */

function isLessThan(a,b){
	if(a<b){
		return true;
	}else{
		return false;
	}
}
console.log(isLessThan(5,10));
/**
 * Returns true if `a` and `b` are equal.
 * @param {number} a
 * @param {number} b
 * @return {boolean} the numbers are equal
 */

function areEqual(a,b){
	if(a===b){
		return true;
	}else{
		return false;
	}
}
console.log (areEqual(5,5));
/**
 * Returns the smallest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the smallest number
 */

function minimum(x,y){
	if (x<y) {
		return x;
	} else {
		return y;
	}
}
minimum(4,8);

/**
 * Returns the largest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the largest number
 */

function maximum(x,y){
	if(x>y){
		return x;
	}else{
		return y;
	}
}
maximum (8,4);
/**
 * Returns true if `n` is even.
 * @param {number} n
 * @return {boolean} the number is even
 */


/**
 * Returns true if `n` is odd.
 * @param {number} n
 * @return {boolean} the number is odd
 */


/**
 * Returns a letter grade.
 * "A": 90-100%
 * "B": 80-89%
 * "C": 70-79%
 * "D": 60-69%
 * "F": 0-59%
 * @param {number} score
 * @param {number} total maximum possible score
 * @return {string} the score represented as a letter grade
 */


/**
 * Checks if a `restaurant` object has a `reviews` property.
 * If it does, increase the property's `reviews` value by 1.
 * If it does not, set the `reviews` value to 1.
 * @param {object} restaurant   represents a restaurant object
 * @return {object} restaurant
 */


/**
 * Joins two strings with a space.
 * @param {string} word1
 * @param {string} word2
 * @return {string} joined the words joined with a space
 */


/**
 * Returns a circle object with the properties `circumference` and `area`.
 * Use Math.PI for the value π.
 * (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/PI)
 * @param {number} radius
 * @return {object} circle
 */

