var myName = "SateeshKumar";
var wishMsg = "Hello "+myName+", Welcome to JavaScript Learning.."
console.log(wishMsg);



/*
*   Variables
*/

var suit;
var card;
suit = "hearts";
console.log(suit);

var greeting = "Hello World!";

console.log(greeting);

//tweat

var tweep = "@sateesh";
console.log(tweep);

var message = "Hey! I need some help with programming";

var tweet = tweep + ": "+message;

console.log(tweet);


var age = 8;
var facebookMsg = "You're only "+ age +", too young to facebook";

console.log(facebookMsg);

var burritoPrice = 5.99;

var taxRate = 0.09;

var totalTax = burritoPrice*taxRate;

console.log("Tax is :"+totalTax);

var totalBurritoPrice = burritoPrice+totalTax;

console.log("The Total Burrito Price is "+totalBurritoPrice);



var totalNoOfBurritors = 5;
var totalCostOfBurritos = totalBurritoPrice*totalNoOfBurritors;

console.log("The Cost of "+totalNoOfBurritors +" is "+totalCostOfBurritos);



// Practise

unDeclaredVariable = "Not Declared";
console.log("Un Declared var value is : "+unDeclaredVariable);


// Variables syntaxes
var test232;
var test_123;
// var test!; Doesn't work
//var test@;
//var test#;
var test$;
//var test%;
//var test^;
//var test&;
//var test*;
//var test(;
//var test);
var test_;
//var test+;
//var test-;
//var test=;
//var test~;
//var 123test;

var hourlyWage = 100;
var noOfHoursWorked = 9;
var totalWage = hourlyWage*noOfHoursWorked;

console.log("Total Wage is :: "+totalWage);

// + symbol

var val1=10;
var val2 = 20;
var result = val1+val2;
console.log("Result with no is :: "+result);

var val3 = 30;
var val4 = "fourtey";


console.log("The Result of val1, val2 and val3 is (with out braces):: "+val1+val2+val3);
console.log("The Result of val1, val2 and val3 is :: "+(val1+val2+val3));
console.log("The Result of val1, val2 and val4 is :: "+(val1+val2+val4));
console.log("The Result of val4, val1 and val2 is :: "+(val4+val1+val2));


var openingTag = "<p>";
var closingTag = "</p>";
var text = "This is Paragraph";
var htmlTag = openingTag+text+closingTag;

console.log(htmlTag);

var tweet = "Hello World!";
var count = 0;

count = count +10;
tweet = tweet+count;

console.log("The value of count is "+count); // 10
console.log("The value of tweet is "+tweet); // Hello World!10

count = count*10;
tweet = count+tweet;

console.log("The value of count is "+count); //100
console.log("The value of tweet is "+tweet); //100Hello World!10


count = count*100;
tweet = tweet +". this is another sentence.";

console.log("The value of count is "+count); // 10000;
console.log("The value of tweet is "+tweet); // 100Hello World!10 . this is another sentence.



const constantValue = 90;
constantValue = 70;
console.log(constantValue);