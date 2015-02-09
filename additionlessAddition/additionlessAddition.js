carryExists = false;

runBitLeft = function(a) {
	a.reverse();
	a.unshift(0);
	a.reverse();

	console.log("run one bit to the left on carry");

	return a;
}

function turnValueToPositiveIfNegative(a) {
	positiveValue = 0;
	
	if (a < 0)
		positiveValue = -1 * a;
	else
		positiveValue = a;

	console.log("Positive Value: " + positiveValue);
	return positiveValue;
}

convertToBinary = function(a) {
	aBinary = a.toString(2);
	console.log("Converting " +a+ " to Binary equivalent: " + aBinary);		
	return aBinary;
}

convertValueToNumberAndTransformToArray = function(a) {
	numbersArray = [];
	
	for(i = 0; i < a.length; i++)
		numbersArray[i] = parseInt(a.charAt(i), 2);
	
	console.log("Convert Value To Number And Transform To Array:\n " +
			     a +" : "+ numbersArray);
	
	return 	numbersArray;
}

function zeropadIfValuesHaveDifferentLength(a, b) {
	while (a.length > b.length) 
		b.unshift(0);
 
	while (b.length > a.length)
		a.unshift(0);
 
	console.log("Zero padding if neccesary"
				+ "\n\t" + a
				+ "\n\t" + b);
}

function addByXOR(a, b) {
	sumArrayByXOR = [];

	for(i = 0; i < a.length; i++)
		sumArrayByXOR[i] = a[i] ^ b[i];
	sumArrayByXOR.unshift(0);
 
	console.log("Sum by XOR:\n\t" + sumArrayByXOR);
	return sumArrayByXOR;
}

function carryByAND(a, b) {
	carryArrayByAND = [];

	for(i = 0; i < a.length; i++)
		carryArrayByAND[i] = a[i] & b[i];

	carryArrayByAND = runBitLeft(carryArrayByAND);

	console.log("Carry:\n\t" + 
				carryArrayByAND);

	return carryArrayByAND;
}

function verifyCarry(a) {
	console.log("looking for carry bits");
	for(i = 0; i < a.length; i++){
		if(a[i] === 1){
			carryExists = true;
			break;
		}
		carryExists = false;
	}
}

function convertBackToDecimalInteger(a) {
	decimalInteger = "";
	
	for(i = 0; i < a.length; i++)
		decimalInteger += a[i];

	decimalInteger = decimalInteger.toString();
	decimalInteger = parseInt(decimalInteger, 2);

	return decimalInteger;
}

function add(x, y){
	addition = 0;	

	x = turnValueToPositiveIfNegative(x);
	y = turnValueToPositiveIfNegative(y);

	x = convertToBinary(x);
	y = convertToBinary(y);

	x = convertValueToNumberAndTransformToArray(x);
	y = convertValueToNumberAndTransformToArray(y);

	zeropadIfValuesHaveDifferentLength(x, y);

	addition = addByXOR(x, y);
	carry = carryByAND(x, y);

	verifyCarry(carry);	

	while(carryExists) {
		zeropadIfValuesHaveDifferentLength(x, y);

		addition = addByXOR(addition, carry);
		carry = carryByAND(addition, carry);

		verifyCarry(carry);	
	}

}
