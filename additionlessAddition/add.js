x = 0;
y = 0;
xBinary = 0;
yBinary = 0;
carry = [];
xBinaryArray = [];
yBinaryArray = [];
sumArrayByXOR = [];
carryArrayByAND = [];

function turnValuesToPositiveIfNegative(){
	if(x < 0){
		x *= -1;
		console.log("Values must be positive. Changed first given value to positive");
	}
	if(y < 0){
		y *= -1;
		console.log("Values must be positive. Changed second given value to positive");
	}
}

function convertToBinary(){
	xBinary = x.toString(2);
	yBinary = y.toString(2);
	console.log("Changed values from decimal to it's binary equivalency.");
	console.log( x + " = " + xBinary +  
		  "\n " + y + " = " + yBinary);
}

function convertValuesToNumbersAndTransformsToArray(){
	valueForResetting_xBinaryArray = [];
	valueForResetting_yBinaryArray = [];
	
	for(i = 0; i < xBinary.length; i++)
		valueForResetting_xBinaryArray[i] = parseInt(xBinary.charAt(i), 2);

	for(i = 0; i < yBinary.length; i++)
		valueForResetting_yBinaryArray[i] = parseInt(yBinary.charAt(i), 2);
	
	xBinaryArray = valueForResetting_xBinaryArray;
	yBinaryArray = valueForResetting_yBinaryArray;
	
	console.log("Convert values to numbers and transform to array:\n " +
			     xBinaryArray +"\n "+ yBinaryArray);
}

function zeropadIfValuesHaveDifferentLength(){
	while (xBinaryArray.length > yBinaryArray.length) 
		yBinaryArray.unshift(0);
	
	while (yBinaryArray.length > xBinaryArray.length)
		xBinaryArray.unshift(0);

	console.log("Zero padding if neccesary\n "+
				 xBinaryArray +"\n "+ yBinaryArray);
}

function addByXOR(){
	for(i = 0; i < xBinaryArray.length; i++)
		sumArrayByXOR[i] = xBinaryArray[i] ^ yBinaryArray[i];
	sumArrayByXOR.unshift( 0 );
}

function carryByAND(){
	for(i = 0; i < xBinaryArray.length; i++)
		carryArrayByAND[i] = xBinaryArray[i] & yBinaryArray[i];

	carryArrayByAND.reverse();
	carryArrayByAND.unshift(0);
	carryArrayByAND.reverse();
}

function add(x, y){
	turnValuesToPositiveIfNegative();

	convertToBinary();
	convertValuesToNumbersAndTransformsToArray();

	zeropadIfValuesHaveDifferentLength();

	addByXOR();
	carryByAND();

	for(i = 0; i < carryArrayByAND.length; i++){
		if(carryArrayByAND[i] === 1){
			console.log("TELL IF THERE'S ANY CARRY: Carry bit found");
			
		}
			
	}

}
