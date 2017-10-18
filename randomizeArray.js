/*
  Algorithm that will randomize the order of
  values in an array
*/

//Creates randomizeArray function
function randomizeArray(array){
	//set max_i to length of array
	var max_i = array.length;
	//runs thru every position in the array once [O(N)]
	for(var i=0;i<max_i-1;i++){
		//assigns j a random value between 0 inclusive 
		//and the length of the array exclusive
		var j = Math.floor(Math.random() * max_i);
		//sets placeholder for value swap
		var placeholder = array[i];
		//swaps values of array[i] and array[j]
		array[i] = array[j];
		array[j] = placeholder;
	}
	console.log(array);
}

//Test array
numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
randomizeArray(numbers);