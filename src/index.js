module.exports = function getZerosCount(number) {
	let result = 0;
	let i = 1;  
	for(let i = 1; Math.floor(number / Math.pow(5, i)) > 0; i++){
		result += Math.floor(number / Math.pow(5, i));
	}
	return result;
}