/*
	Algorithm that will find all the primes up to a given limit.
*/

//Find primes between 2 and max_num (inclusive)
function findPrimes(max_num){
	//Allocate an array for the numbers
	var is_composite = [];
	for(var i=0;i<max_num;i++){
		is_composite[i] = i+1;
	}
	console.log(is_composite);
	//"Cross out" multiples of 2, not 2
	for(var i = 4; i<=max_num;i+=2){
		is_composite[i-1] = true;
	}
	console.log(is_composite);

	//"Cross out" multiples of primes found so far
	var next_prime = 3;
	var stop_at = Math.sqrt(max_num);
	// while(next_prime <= stop_at){
	// 	//"Cross out" multiples of this prime
	// 	for(var i=next_prime*2;i<=max_num;i++){
	// 		is_composite[i] = true;
	// 	}
	// 	//Move to the next prime, skipping the even numbers.
	// 	next_prime = next_prime + 2;
	// 	while(next_prime <= max_num && is_composite[next_prime]){
	// 		next_prime = next_prime + 2;
	// 	}
	// }
	// console.log(is_composite);

	//Copy primes into a list.
	var primes = [];
	for(i=0;i<max_num;i++){
		if(is_composite[i] != true) primes.push(is_composite[i]);
		i++;
	}
	console.log(primes);
}

findPrimes(25);