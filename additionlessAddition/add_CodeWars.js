/* this code is the one you submit on CodeWars. 
* console.log's eliminated because string concatenation symbol (+) 
* is wrongly intrepreted as addition symbol
*
* for testing run 
* Test.assertEquals(add(2, 3), 5)
*/

carryExists = false;

runBitLeft = function(a) {
	a.reverse();
	a.unshift(0);
	a.reverse();

	return a;
}

function convertBackToDecimalInteger(a) {
	decimalInteger = "";
	
	for(i = 0; i < a.length; i++) {
		decimalInteger += a[i];
	}

	decimalInteger = decimalInteger.toString();
	decimalInteger = parseInt(decimalInteger, 2);

	return decimalInteger;
}



function convertToBinary(a) {
	aBinary = a.toString(2);
		
	return aBinary;
}

function convertValueToNumberAndTransformToArray(a) {
	numbersArray = [];
	
	for(i = 0; i < a.length; i++)
		numbersArray[i] = parseInt(a.charAt(i), 2);
	
		
	return 	numbersArray;
}

function zeropadIfValuesHaveDifferentLength(a, b) {
	while (a.length > b.length) 
		b.unshift(0);
 
	while (b.length > a.length)
		a.unshift(0);
 
	
}

function addByXOR(a, b) {
	sumArrayByXOR = [];

	for (i = 0; i < a.length; i++) {

		sumArrayByXOR[i] = a[i] ^ b[i];  
	}

	// sumArrayByXOR.unshift(0);


	return sumArrayByXOR;
}

function carryByAND(a, b) {
	carryArrayByAND = [];

	for(i = 0; i < a.length; i++) {
		carryArrayByAND[i] = a[i] & b[i];
	}

	carryArrayByAND = runBitLeft(carryArrayByAND);

	return carryArrayByAND;
}

function verifyCarry(a) {
	
	for(i = 0; i < a.length; i++){
		if(a[i] === 1){
			carryExists = true;
			
			break;
		}
		carryExists = false;

	}
}

function add(x, y){
	addition = 0;


	x = convertToBinary(x);
	y = convertToBinary(y);

	x = convertValueToNumberAndTransformToArray(x);
	y = convertValueToNumberAndTransformToArray(y);

	zeropadIfValuesHaveDifferentLength(x, y);

	addition = addByXOR(x, y);
	carry = carryByAND(x, y);

	verifyCarry(carry);

	while(carryExists) {
		zeropadIfValuesHaveDifferentLength(addition, carry);
		
		oldAddition = addition;
		oldCarry = carry;
		
		addition = addByXOR(oldAddition, oldCarry);
		carry = carryByAND(oldAddition, oldCarry);

		verifyCarry(carry);
	}

	addition = convertBackToDecimalInteger(addition);
	return addition;
}
