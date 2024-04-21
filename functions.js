
// Part1:Thinking Functionally
///sum of elements in a given array 

function sumOfArray(arr) {
    // initalize sum S
    let s = 0;
    // iterating through alla elements
    for (let i = 0; i < arr.length; i++) {
        // adding them to sum
        s = s + arr[i];
    }
    return s;
}

let myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(`Sum of Numbers in the array:${sumOfArray(myArr)}`)

console.log("--------------------------------------------------------------------------------")

// function for average of numbers
function avgOfNumber(arr) {
    // Determing length of array 
    let lenghthOfArray = arr.length;
    // caluculating average of numbers.
    avgOfNumber = sumOfArray(arr) / lenghthOfArray;
    return lenghthOfArray;
}
console.log(`Average of Numbers : ${avgOfNumber(myArr)}`)
console.log("--------------------------------------------------------------------------------")

//Take an array of strings and return the longest string.

function arrayOfLongestString(myStringArr) {
    // determining longestString using forloop
    // let strLength = 0;
    let longest = 0;
    let longestIndex = 0;
    // looping trough to find length of string
    for (let j = 0; j < myStringArr.length; j++) {
        //comparing string with length of nextstring
        if (myStringArr[j].length > longest) {
            longest = myStringArr[j].length;
            longestIndex = j;
        }

    }
    return myStringArr[longestIndex];
}
let StringArr = ["I", "am", "going", "to", "a", "good", "Programmar"]
console.log(arrayOfLongestString(StringArr))
console.log("--------------------------------------------------------------------------------")

//comparing Array of strings to number and returning array compared to number.

function stringLongerThan(myStringArr, num1) {
    let NewArray = [];

    // looping trough to find length of string
    for (let j = 0; j < myStringArr.length; j++) {
        //comparing string with length of nextstring
        if (myStringArr[j].length > num1) {
            NewArray.push(myStringArr[j])
        }

    }
    return NewArray;
}
let Array2 = ["I", "am", "going", "to", "a", "good", "Programmar"]
console.log(stringLongerThan(Array2, 5))
console.log("--------------------------------------------------------------------------------")

// Recursive Function

function printRecursiveNum(num2, currrentValue) {

    if (currrentValue > num2) {
        return;
    }
    console.log(currrentValue);
    printRecursiveNum(num2, currrentValue + 1)

}
const num2 = 8;
printRecursiveNum(num2, 1);
console.log("--------------------------------------------------------------------------------")
console.log("**********************************part2******************************************")
console.log("--------------------------------------------------------------------------------")

//Part 2: Thinking Methodically


const arr2 = [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },
{ id: "48", name: "Barry", occupation: "Runner", age: "25" },
{ id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
{ id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
{ id: "7", name: "Bilbo", occupation: "None", age: "111" }]

// sort array by age 
//using sort method and arrow function
arr2.sort((a, b) => a.age - b.age);
console.log(arr2)
console.log("--------------------------------------------------------------------------------")

//Using filter remove entries greater tahn 50
//using arrrow function and filter method
const ageResult = arr2.filter((ageOfPerson) => ageOfPerson.age < 50);
console.log(ageResult);
console.log("--------------------------------------------------------------------------------")

//Mapping Array to change the occupation key to job and incrementing age by 1

// const newKey = 'job';
// const newArray1 = array.reduce((acc, obj)) = acc[obj.occupation] = obj;
// return acc;

// console.log(newArray1)






