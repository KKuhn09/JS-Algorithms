/*
	Algorithm that will find the greatest common divisor (GCD)
	of two integers. 
*/

//initialize variables needed
var remainder;
//Creates our euclidsAlorithm function
function euclidsAlgorithm(A, B){
	
	/*
		The value of B decreases by at least a factor of 1/2 for every two trips through the loop
		Runs in time at most O(log B)
	*/
	//while the remainder of our two values is not 0
	while(B != 0){
		//if A is smaller then B, the values are swapped
		remainder = A%B;
		//euclidsAlgorithm(A, B) === euclidsAlgorithm(B, remainder)
		A = B;
		B = remainder;
	}
	//If the GCD of two integers is 1, A and B are said to be relatively prime or coprime 
	if(A === 1) A = "coprime";

	console.log(A);
	return A;
}

//test function
euclidsAlgorithm(24, 60);
euclidsAlgorithm(8, 50);
euclidsAlgorithm(4851, 3003);

console.log(Math.pow(7, 6));

