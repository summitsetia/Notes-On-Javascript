console.log("hello world") // this is a comment 
console.log("gay") /* this
is a 
multi line comment */

var myName = "summit"
myName = "sunny" /* var allows you to set a variable that can be changed throughout the code */

var a; /* this is declaring a variable */
console.log(a) /* it wil come up as undefined as a is not asigned */
a = 7; /* assigning a value to a, did not have to declare a as it was already declared */

var b = 2; /*this is declaring and assigning a variable in one line */
console.log(a) 
console.log(b)

var d = 5;
var e = "I am a"

d = d + 1 /* updating the variable d to add 1 */
e = e + " string " /* updating the variable by adding two strings */
console.log(d)
console.log(e)

var incrimentNumber = 10
incrimentNumber++ /* this allows me to incriment a number, this is the same as incrimentNumber = incrimentNumber + 1 */ 
console.log(incrimentNumber)

var decrementNumber = 8
decrementNumber-- /* this allows me to decrement a number, this is the same as decrementNumber = decrementNumber + 1 */ 
console.log(decrementNumber)

var remainder = 11 % 3 /* this is a remainder operator, this is typically used to find if a number is even or odd */
console.log(remainder)

var f = 3
f += 1 /* this is the same as f = f + 1, this can be used for subtracting, multiplying and dividing */
console.log(f)

var myStr = "I am \"straight\" not \"gay\""; /* this allows me to have a double quoted string */
console.log(myStr)

var myStr1 = 'I am "straight" not "gay"' /* this accomplishes the same goal as before */
console.log(myStr1)

var myStr2 = "This is the first sentence " /* this adds the two strings with the += operator */
myStr2 += "This is the second sentence"
console.log(myStr2)

var myName1 = "Summit "
var myStr3 = "My name is " + myName1 + "Setia" /* this adds a variable inside another variable */
console.log(myStr3)

var sexuality = " straight";
var sentence = "I am";

var result = sentence += sexuality /* each variable contains a string, this combines the two strings */
console.log(result)

var firstName = "Summit";
var firstNameLength = firstName.length /* this variable shows the amount of characters in a string */
console.log(firstNameLength)

var firstLetterOfFirstName = firstName[0] /* most programming languages start indexing at 0 rather than 1, S represents 0th term */
console.log(firstLetterOfFirstName)

var lastLetterOfFirstName = firstName[firstName.length - 1] /* firstNameLength finds the amount of characters in the variable firstName and subtracts 1, as indexing starts at 0 it represents the last character */
console.log(lastLetterOfFirstName)

var myArray = ["John",75,93]
var myData = myArray[0] /* this is an array with stores different data types (numbers, strings, floats etc.), the myData variable gets the 0th term in the array */
console.log(myData)

var myArray1 = [60,30,25]
myArray1[1] = 2 /* this updates the 1st term in the array to a new value which I set to 2 */
console.log(myArray1)

var bigArray = [[1,2,3], [4,5,6], [7,8,9]]
var myData1 = bigArray[1][2] /* the variable bigArray contains an array within an array, the myData1 variable chooses the second array and the third number within that array */
console.log(myData1) 

bigArray.push([10,11,12]) /* this adds/pushes another array onto the existing array */
console.log(bigArray)

var removedFromMyArray = bigArray.pop() /* this will remove/pop the last element of the array and put it in the variable removedFromMyArray */
console.log(bigArray)
console.log(removedFromMyArray)

var removedFromMyArray1 = bigArray.shift() /* this will shift the array and will save what was shifted in the removedFromMyArray1 variable, you can also unshift with bigArray.unshift(["Paul, 23"]) */
console.log(bigArray)
console.log(removedFromMyArray1)

function ourResusableFunction() {
    console.log("whats up")
}

ourResusableFunction() /* everytime this function is called the console will log "whats up" */
ourResusableFunction()
ourResusableFunction()
ourResusableFunction()

function passingFunction(a,b) {
    console.log(a - b) 
}

passingFunction(10,5) /* this is an argument which is passed through the paramater in the function, eg. I used 10 for the paramater a and 5 for the paramater b, my function subtracts the two numbers, as I have passed 10 and 5 through it subtracts 10-5 */
passingFunction(2,8)

/* scope refers to visbility of variables, variables defined outisde of a function block have global scope(can be seen anywhere in the javascript code)*/
/* varaibles declared in a function have local scope which means they are only visible in the function */
/* it is possible to have both global and local variables with the same name however local variables take priority */

var outerWear = "T-Shirt"

function myOutfit() {
    var outerWear = "Pants"
    return outerWear
} 

console.log(myOutfit()) /* the variable outerWear is declared outside and inside of the function, when I log the output of the function It returns with pants as it being declared in the function takes priority */
console.log(outerWear)

function returnNumber(num) {
    return num - 7

}
console.log(returnNumber(5)) /* the number 5 is passed through the function in place of 'num' and is reduced by 7 and logged */

var processed = 0

function processArg(num) {
    return num + 5 / 2
}

processed = processArg(4)
console.log(processed) /* a variable processed is declared, we update the variable to be equal to the result of 4 being used in the function */

function nextInLine(arr,item){
    arr.push(item)
    return arr.shift();
}

var testArr = [1,2,3,4,5]
console.log(testArr)
console.log(nextInLine(testArr,6))
console.log(testArr)

function trueOrFalse(wasThatTrue){
    if (wasThatTrue) {
        return "Yes, That was True"  /* this is an if statement, wasThatTrue paramater is set to true it will return a different string if set to false */
    }
    return "No, That was False "
}

console.log(trueOrFalse(false))

function testEqual(value) {
    if (value == 12){
        return "It is equal"
    }
    return "It is not equal"
}

console.log(testEqual(10)) /* using the == operator it checks if the values are equal in an if statement inside a function*/

function compareEquality(a,b){
    if (a === b) {
        return "it is equal"
    }
    return "it is not equal "
}

console.log(compareEquality(5,"5")) /* using the === operator if you pass in a string as a paramter it will say it is not equal while with a == operator it would say it is equal as the string is converted into a number */

/* the inequality operators are != and !== and work the same as the equality operators */

function testLogicalAnd(values) {
    if(values <=50 && values >= 25) {
        return "Yes"
    }
    return "No"
}

console.log(testLogicalAnd(30)) /* by using the and operator (&&) I can have two if statements that have to be true */

function testLogicalOr(val) {
    if(val <=50 || val <=100) {
        return "Yes"
    }
    return "No"
}

console.log(testLogicalOr(70)) /* by using the or operator (||) I can have either if statement to be true to return a "Yes" */

function testElse(val){
    if(val >= 5) {
        result = "Value is greater than 5"
    } else {
        result = "Value is less than 5"
    }

    return result
}

console.log(testElse(4)) /* else staments allow for an alternate block of code to be executed if the if statement is not true */

function testElseIf(val) {
    if (val > 10) {
        return "Greater than 10"
    }   else if (val < 5) {
        return "Smaller than 5"
    }   else {
        return "Number is between 5 and 10"
    }
}

console.log(testElseIf(6)) /* Else if statments allow multiple conditions to be adressed */

function caseInSwitch(val) {
    var answer = ""
    switch(val) {
        case 1:
            answer = "alpha"
            break
        case 2:
            answer = "beta"
            break
        case 3:
            answer = "nigga"
            break
        default:
            answer = "chigga"
            break

    }
    return answer
}

console.log(caseInSwitch(10)) /* This is a switch statement, the value passed through represents a different case and a case not listed called a default will result in something else such as an else in an if statement */

function sequentialSizes(val) {
    var answer = ""
    switch(val) {
        case 1:
        case 2:
        case 3:
            answer = "low"
            break
        case 4:
        case 5:
        case 6:
            answer = "mid"
            break
        case 7:
        case 8:
        case 9:
            answer = "high"
            break
    }
    return answer
}

console.log(sequentialSizes(6)) /* if you do not break between cases in a switch statment multiple cases will lead to the same result */

function isLess(a,b) {
    return a < b
}

console.log(isLess(10,15)) /* instead of using an if statement, as all comparison operators return a boolean true or false value if you set up the function like this it will return a true or false based on the argument */

/* if you return undefined in a function based on the argument it will exit the function and the result will be null */

var myDog = {
    "name": "Quincy",
    "legs": 3,
    "trails": 2,
    "friends": []
}

/* this is an object, objects are similar to arrays but instead of using indexing to access data you use properties, in this case "name" is the property, you can use any data type such as strings numbers and arrays */

var legsValue = myDog.legs;
var friendsValue = myDog.friends;
console.log(legsValue)
console.log(friendsValue)

var legsValue = myDog["legs"];
var friendsValue = myDog["friends"];
console.log(legsValue)
console.log(friendsValue)

/* to find out the value of the property in the object you can use dot notation or bracket notation */

myDog.name = "nigga"
console.log(myDog.name)
/* this updates the name in the object */

myDog['bark'] = "woof"
console.log(myDog) /* adds a new property to the object */

delete myDog.friends;
console.log(myDog) /* the friends property is deleted */

var myObj = {
    gift: "pony",
    pet: "kitten",
    bed: "sleigh"
}

function checkObj (checkprop) {
    if (myObj.hasOwnProperty(checkprop)) {
        return myObj[checkprop]
    } else {
        return "Not Found"
    }
}

console.log(checkObj("gift"))

/* this function takes in an argument and checks whether it is in the object and returns the property or returns a message if not in object */

var myMusic = [
    {
        "artist": "Drake",
        "title": "Passionfruit",
        "release_year": 2017
    },
    {
        "artist": "Drake",
        "title": "Jungle",
        "release_year": 2015
    }
]

/* this is an array with multiple objects inside it */

var title = myMusic[1].title /* this allows me to access a property inside of the object inside of the array */
console.log(title) 

var myArray2 = []

var i = 0
while(i < 5) {
    myArray2.push(i)
    i++
}

console.log(myArray2) /* this is a while loop that states while I is less than 5 I is pushed onto the array, each time it goes through the loop I is incrimented so it eventually ends and meets the condition */

for (var i = 1; i < 6; i++) {
    myArray2.push(i) /* this is a for loop that adds 1 to the number and is pushed to the array until that number is greater than 6 */
}

console.log(myArray2)

var ourArr = [9,10,11,12];
var ourTotal = 0;

for (var i = 0; i < ourArr.length; i++) {
    ourTotal += ourArr[i];
}

console.log(ourTotal) /* this is a for loop that finds out each number in the array and adds them together */

function multiplyAll (arr) {
    var product = 1;

    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            product *= arr[i][j]
        }
    }
    return product;
}

product = multiplyAll([[1,2],[3,4],[5,6,7]])
console.log(product) /* The code defines a function that multiplies all elements of a two-dimensional array and calculates the product, then applies it to the array [[1,2],[3,4],[5,6,7]], resulting in the product 5040 */

i = 10
do {
    myArray.push(i);
    i++;
} while (i < 5)
/* the do runs the loop once before reaching the while condition which will stop the loop in this case */

function randomFraction() {
    return Math.random() /* this returns a random decimal number */
}
console.log(randomFraction())

function randomWholeNumber() {
    return Math.floor(Math.random() * 20)
}

console.log(randomWholeNumber()) /* this gives a random whole number from 0 to 19, the math.floor rounds down to the nearest whole number */

function convertToInteger(str) {
    return parseInt(str);
}

console.log(convertToInteger("7")) /* this converts the string into an integer */

function checkEqual(a,b) {
    return a === b ? true : false;
}

console.log(checkEqual(1,2))

let catName = "pussy"
/* let catName = "nigga" */
/* this wil give an error as when declaring a variable with let you cannot declare the same variable twice as you can with var */
/* however you can go let catName = "pussy" than go catName = "nigga", as long as you don't use let twice */
/* the scope of the let keyword is limited to block/expression it was declared in */

const sentence1 = "Hello World!"
/* sentence1 = "Hello Earth" */
/* when using const to declare a variable you cannot reasign it later in the code */
console.log(sentence1)

/* when you have an object and you don't want any of the items inside the object to change use object.freeze() */

/* const magic = function() {
    return new Date
} */

const magic = () => new date();

/* these two functions do the same effect, however the second way it looks cleaner */

const myConcat = (arr1, arr2) => arr1.concat(arr2);

console.log(myConcat([1,2], [3,4,5]))

const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

const squareList = (arr) => {
    const squaredNumbers = arr.filter(summit => Number.isInteger(summit) && summit > 0).map(x => x * x);
    return squaredNumbers;
}

const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);

/* the code above is the same as this
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

console.log("Stage 1:");
const filteredArray = realNumberArray.filter(summit => Number.isInteger(summit) && summit > 0);
console.log(filteredArray);

console.log("Stage 2:");
const mappedArray = filteredArray.map(x => x * x);;
console.log(mappedArray); */

const incriment = function (number, value = 1) {
    return number + value;
}

console.log(incriment(5,2))
console.log(incriment(5)) /* if the value is not said in the argument in this case it will take value as 1 */

var voxel = {x: 3.6, y: 7.4, z: 6.54}
var x = voxel.x;
var y = voxel.y;
var z = voxel.z;

console.log(x,y,z) /* this is the old way of doing this */

const {x : nigga, y : trigga, z : biiga} = voxel;
console.log(nigga) /* this is the new way of doing it */

const AVG_temperatures = {
    today: 77.5,
    tommorow: 79
}

function getTempOfTmrw(input) {
    "use strict";
    const {tommorow : tempOfTommorow} = input; /* this gets the tommorow field from the AVG_temperatures object and then asigns it to the temp of Tommorow variable */
    return tempOfTommorow
}

console.log(getTempOfTmrw(AVG_temperatures))

const Local_Forecast = {
    today: { min: 72, max: 83},
    tommorow: {min: 73.3, max:84.4}
}

function getMaxOfTommorow(input) {
    "use strict";
    const {tommorow: {max: maxOfTommorow}} = input /* deestructured twice to get the max temp of tommorow as it is a nested object */
    return maxOfTommorow
}

console.log(getMaxOfTommorow(Local_Forecast))

const [o,p, ,u] = [1,2,3,4,5,6]
console.log(o,p,u)

const person = {
    name: "bitch",
    age: 18
}

const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old. `; /* this is a string using template literals (backticks) which allow you to use variables in the string */
console.log(greeting)

const createPerson = (name,age,gender) => ({name,age,gender});
console.log(createPerson("nigga",56,"gay")) /* write concise object literals declarations using simple fields */

const bicycle = {
    gear: 2,
    setGear: function(newGear) {
        "use strict";
        bicycle.gear = newGear;
    }
}
bicycle.setGear(3);
console.log(bicycle.gear)









    


