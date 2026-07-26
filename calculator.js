const { log } = require('console');
const readline = require('readline');

function add(a, b) {
	return a + b;
}

function subtract(a, b) {
	return a - b;
}

function multiply(a, b) {
	return a * b;
}

function divide(a, b) {
	if (b === 0) {
		throw new Error('zero le divide garna mildaina');
	}
	return a / b;
}

function calculate(a, b, operation) {
	switch (operation) {
		case '+':
		case 'add':
			return add(a, b);
		case '-':
		case 'subtract':
			return subtract(a, b);
		case '*':
		case 'x':
		case 'multiply':
			return multiply(a, b);
		case '/':
		case 'divide':
			return divide(a, b);
		default:
			throw new Error('operation not available');
	}
}
console.log(calculate(2,3,"add"));
