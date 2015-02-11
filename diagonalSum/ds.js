function diagonalSum(squareArray) {
	sum = 0;
	for(i = 0; i < squareArray.length; i++){
		sum += squareArray[i][i];
	}
	return sum;
}
