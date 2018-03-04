var entArr = []; // array of entries to be calculated.
var entriesStr = ''; // string of valid entries to be pushed onto the array.
var result = 0;  // variable to hold the result value, once calculation is complete.
var check = ''; // string to advise if should overwride the values on the screen

// add numbers to the entries string and show values on the screen.
function numBtn(val) {
		if (check !== 'overwrite') {
			entriesStr += val
			document.getElementById('screen').value += val
		} else {
			entArr = []
			result = 0
			entriesStr = val
			document.getElementById('screen').value = val
		}	
	}

// .push the numbers and operator to the entArr and clear the entries string, ready for new values.
function opBtn(val) {
		entArr.push(entriesStr)
		entArr.push(val)
		entriesStr = ''
    document.getElementById('screen').value += val
}

// clear the screen, entArr and entries string, ready for all new values.
function c() {
	entArr = []
	entriesStr = ''
	result = 0
	document.getElementById('screen').value = ''
}

// function to calculate the entries
function calc() {
	document.getElementById('screen').value = result
	entArr.push(entriesStr)  // .push the lastest entries to the entArr.
	entriesStr = '' // empty the entries string, awaiting new values.
	var x = Number(entArr[0]);  // convert the initial number from string to number.
	for (var i = 1; i < entArr.length; i++) {  // loop over the remaining elements in the string.
		var y = Number(entArr[i+1]) // convert the next number from string to number and continue until reach an operator.
		var operatorSymbol = entArr[i];  // when get to operator, just put that straight into the entArr.
		
		// perform the calculations
		if (operatorSymbol === '+') {result = x += y;} 
		else if (operatorSymbol === '-') {result = x -= y;}
		else if (operatorSymbol === '*') {result = x *= y;} 
		else if (operatorSymbol === '/') {result = x /= y;}
		i++;
		}
		document.getElementById('screen').value = result  // update screen to show result of calculation.
		entArr.push(result)  // result now becomes the new initial number to start subsequent calculations from.
	}

// event listener to check if screen values and entArr need to be overwritten
// i.e. last action was evaluate, next button pushed is a number value. So new calculation to commence.
document.addEventListener('click',overwriteCheck);

// function to check if should overwrite value and begin new calculation
function overwriteCheck() {
	if (entArr.slice(-1)[0] === '+') {check = ''}
	else if (entArr.slice(-1)[0] === '-') {check = ''}
	else if (entArr.slice(-1)[0] === '/') {check = ''}
	else if (entArr.slice(-1)[0] === '*') {check = ''}
	else if (entArr.slice(-1)[0] === 'undefined') {check = ''}
	else if (entriesStr !== '') {check = ''}
	else {check = 'overwrite'}
}
