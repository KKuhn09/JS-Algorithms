/*
	Algorithm that will find the prime factors of a number.

	This is an improved version of the findPrimeFactors algorithm, and has a run time O(sqrt(N)) where
	N is the number it is factoring. If N gets really large, however, even O(sqrt(N)) isn't fast enough.
	If N is 100 digits long, sqrt(N) has 50 digits. If N happens to be prime, even a fast computer won't
	be able to try all the possible factors in a reasonable amount of time. This is what makes some
	cryptographic algorithms secure.

	The improvements are based on 3 key observations:
		1) You don't need to test whether the number is divisible by any even number other than 2 because,
		if it is divisible by any even number, it is also divisible by 2. Meaning, you only need to check
		divisibility by 2 and then by odd numbers, instead of by all possible factors. Doing so cuts runtime 
		in half.
		
		2)You only need to check for factors up to the square root of the number. If (n = p * q) either p or q
		must be less than or equal to sqrt(n). If you check possible factors up to sqrt(n), you will find the 
		smaller factor, and when you divide n by that factor, you will find the other factor. This reduces the
		runtime to O(sqrt(n)).

		3)Every time you divide the number by a factor, you can update the upper bound on the possible factors
		you need to check.
*/

function findPrimeFactorsImproved(num){
	var factors = [];

	//Pull out factors of 2
	while(num%2 == 0){
		factors.push(2);
		num = num/2;
	}

	//Look for odd factors
	var i = 3;
	var max_factor = Math.sqrt(num);

	while(i<= max_factor){
		//Pull out factors of i
		while(num%i == 0){
			//i is a factor. Add it to array
			factors.push(i);

			//Divide the number by i
			num = num/i;

			//Set a new upper bound
			max_factor = Math.sqrt(num);
		}

		//Check next possible odd factor
		i = i+2;
	}

	//If there's anything left of the number, it is a factor, too
	if(num>1) factors.push(num);

	console.log(factors);
}

findPrimeFactorsImproved(127);
findPrimeFactorsImproved(1000);