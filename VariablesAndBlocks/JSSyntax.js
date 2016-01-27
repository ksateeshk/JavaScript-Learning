a = 42;
var a;


var b =42;

//let c =42;

//const d = 42;

console.log("Value of b is :: "+b);
//console.log("Value of c is :: "+c);
//console.log("Value of d is :: "+d);


void 42;

//console.log("Void value is :: "+void);



// Loops
/*
3 clasues
	1. Inititalinzation clause  i = 5;
	2. Condition clause	i < 10
	3. Update clause i++
*/
for(i = 5; i < 10; i++) {
	console.log("I value is :: "+i)
}


//while

j = 5;
while(true) {
	if(j >= 10) {
		break;
	}
	console.log("Value of j is :: "+j);
	j++;
}



//Functions

var a = 3.143243245;

a.toFixed(3);
console.log("Value of a after fixed is :: "+a.toFixed(3));


function foo() {
	a = a+2;
	a = a+3;
}

a =10;
console.log("Before function a value is :: "+a);
foo();
console.log("After funcation a value is :: "+a)



// Challenge 1

const taxRate = 14.5;
const phonePrice = 6000;
const accessoryPrice = 700;
const spendingThreshold = 8000;
var amountInBank = 56000;

function calculateTotalAmount() {
	amountInBank -= spendingThreshold;
	var remainingThresholdBal = spendingThreshold;
	var totalNoOfPhones = 0;
	for(remainingBalance; remainingBalance > 0;) {
		totalNoOfPhones++;
		remainingBalance -= phonePrice+calculateTax(phonePrice);
		remainingThresholdBal -= spendingThreshold;
	}
	console.log("You have bought "+totalNoOfPhones+" No of phones with worth of "+formatAmount(totalNoOfPhones*(phonePrice+calculateTax(phonePrice))));

}

function calculateTax(amount) {
	return amount*(taxRate/100);
}

function formatAmount(amount) {
	return "$"+amount.toFixed(2);
}

calculateTotalAmount();


