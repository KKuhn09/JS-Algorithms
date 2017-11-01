/*
	Algorithm that will find the prime factors of a number.
	If the number is N, the algorithm has a runtime of O(N)
*/

function findPrimeFactors(num){
	//Prime factors will be stored inside factors[]
	var factors = [];
	var i = 2;

	while(i<num){
		//Pull out factors of i
		while(num%i == 0){
			//i is a factor. Add it to the list
			factors.push(i);

			//Divide the number by i
			num = num/i;
		}
		//Check next possible factor
		i++;
	}
	//If there's anything left of the number, it is a factor, too.
	if(num>1) factors.push(num);

	//Log our prime factors
	console.log(factors);
}

findPrimeFactors(127);
findPrimeFactors(1000);