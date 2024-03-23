// Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
let ages = [3,9,23,64,2,8,28,93];
// Programmatically subtract the value of the first element in the array from the value in the last element of the array.
// Do not use numbers to reference the last element, find it programmatically.
// ages[7] - ages[0] is not allowed!
console.log(ages[ages.length-1] -ages[0])
// Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
ages.push(69);
console.log(ages[ages.length-1] -ages[0])
// Use a loop to iterate through the array and calculate the average age.
for (let i = 0; i < ages.length; i++) {
    function avgAge(arr) {
        // Condition if Array is Empty
        if (arr.length === 0) {
            return 0;
        }
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        let average = sum / arr.length;
        return average;
    }
}
console.log(avgAge(ages))
// Another way I was shown to do this:
// const avgAge = (arr) => {
//     // Condition if Array is Empty
//     if (arr.length === 0) {
//         return 0;
//     }
//     const sum = arr.reduce((acc, curr) => acc + curr, 0);
//     return sum / arr.length;
// };
// Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
const names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
// Use a loop to iterate through the array and calculate the average number of letters per name.
const characterAvg = (arr) => {
    let count = 0;

    arr.forEach((str) => {
        count += str.length;
    });

    return count;
}; 
console.log(characterAvg(names));
// Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.
const namesAllTogether = (arr) => {
    return arr.reduce((accumulator, currentValue, index) => {
        if (index === arr.length - 1) {
            return accumulator + currentValue;
        } else {
            return accumulator + currentValue + " &\n";
        }
    }, "");
};
console.log(namesAllTogether(names));
// How do you access the last element of any array?
// This is done by using array[array.length-1]
// How do you access the first element of any array?
// This is done by using array[0]
// Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
// For example:
// let names = ["Kelly", "Sam", "Kate"];    // starting with this array
// let nameLengths = [5, 3, 4];             // create a new array
let nameLengths = []
names.forEach(name => {
    nameLengths.push(name.length);
});
console.log(nameLengths);
// Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.
let totalCharacters = 0
nameLengths.forEach(nameLength => {
   totalCharacters += nameLength;
});
console.log(totalCharacters);
// Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').
let repeatedWord = '';
const echo = (word, n) => {
    for (let i = 0; i < n; i++) {
        repeatedWord += word;
    }
    return repeatedWord
}
console.log(echo('Yo',3));
// Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.
const fullName = (firstName, lastName) => {
    console.log(`${firstName} ${lastName}`);
}
fullName ('Dick', 'Butkis')
// Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
// const addEmUp = [6, 10, 18, 34, 52]

// const tripleDigits = (arr) => {
//     if (
//         let total = 0
//         for (let i = 0; i < addEmUp.length; i++) {
//             total += addEmUp[i];
//         }
//         total > 100, return true
//     )
// } This is what I did, and I knew it wasnt working at line 101, so I decided to leave it here to reexamine it later. For the moment, I used a corrected version thanks to CatGPT (Please note I'm running and testing the code, not just accepting it as a right answer)
const addEmUp = [6, 10, 18, 34, 52];
const tripleDigits = (arr) => {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total > 100;
};
console.log(tripleDigits(addEmUp));
// Write a function that takes an array of numbers and returns the average of all the elements in the array.
const numTBAvg = [152, 37, 89, 104, 56, 187, 23, 91, 198, 63, 177, 12, 45, 134, 72, 29, 166, 82, 109, 3, 60, 95, 117, 42, 175, 21, 193, 6, 150, 88];

const avgEmUp = (arr) => {
    let sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    let average = sum / arr.length;

    return average;
}
console.log(avgEmUp(numTBAvg))
// Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.
function calculateAverage(array) {
    const sum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    return sum / array.length;
}
function compareAverage(array1, array2) {
    const average1 = calculateAverage(array1);
    const average2 = calculateAverage(array2);
    return average1 > average2;
}
const array1 = [10, 20, 30];
const array2 = [5, 15, 25];
console.log(compareAverage(array1, array2)); // Output: true
// Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
function willBuyDrink(isHotOutside, moneyInPocket) {
    if (isHotOutside && moneyInPocket > 10.50) {
        return true;
    } else {
        return false;
    }
}
console.log(willBuyDrink(true, 15));
console.log(willBuyDrink(true, 8));
console.log(willBuyDrink(false, 20));
// // Create a function of your own that solves a problem. In comments, write what the function does and why you created it.
// Ok I definitely used Microsoft Copilot for inspiration on what JS functions would be handy to write as problem-solving tools. Most of the project inspirations they gave me didn't feel like things that were practical for this assignment, so I came up with this:
// const fuckItWeBall = (fuckingString) => {
//     return fuckingString.replace(/\s/g, '');
// };
// const mashAndCap = (sillyString) => {
//     return `${sillyString[0].toLowerCase()}${sillyString.slice(1)}`;
// }
// I console logged some of my failed attempts in the above lines.
const camelCase = (str) => {
    return str
        .replace(/\s(.)/g, function (a) {
            return a.toUpperCase();
        })
        .replace(/\s/g, '')
        .replace(/^(.)/, function (b) {
            return b.toLowerCase();
        });
}
// definitely had to look up how to do the /-_/g portion of this. For something that seemed to simple it took a lot more digging than I anticipated