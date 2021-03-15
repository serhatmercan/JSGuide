// Reference GitHub Repo: https://github.com/trekhleb/javascript-algorithms

// BEST CASE: [5] => O(1)
// WORST CASE: [3, 1] => O(n)
function getMin(numbers) {
    if (!numbers.length) {
        throw new Error("Should not be an empty array!");
    }
    let currentMinimum = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < currentMinimum) {
            currentMinimum = numbers[i];
        }
    }

    return currentMinimum;
}

// T = n => Linear Time Complexity => O(n)

// BEST CASE: [1, 2, 3] => O(n^2)
// WORST CASE: [3, 2, 1] => O(n^2)
// AVERAGE CASE: [?, ?, ?] => O(n^2)
function getMin2(numbers) {
    if (!numbers.length) {
        throw new Error("Should not be an empty array!");
    }

    for (let i = 0; i < numbers.length; i++) {
        let outerElement = numbers[i];
        for (let j = i + 1; j < numbers.length; j++) {
            let innerElement = numbers[j];

            if (outerElement > innerElement) {
                numbers[i] = innerElement;
                numbers[j] = outerElement;

                outerElement = numbers[i];
                innerElement = numbers[j];
            }
        }
    }

    return numbers[0];
}

// Quadratic Time Complexity => n * n => O(n^2)

const testNumbers = [5, 1, 5];

const minNumber = getMin(testNumbers);
const minSorted = getMin2(testNumbers);

console.log(minNumber);
console.log(minSorted);

// Check Number: Even or Odd

function isEvenOrOdd(number) {
    return number % 2 ? "Odd" : "Even";
}

// Constant Time Complexity => O(1)

console.log(isEvenOrOdd(10)); // "Even"
console.log(isEvenOrOdd(11)); // "Odd"


// Sum of Array

function sumUp(numbers) {
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    return sum;
}

// Linear Time Complexity => O(n)

const array = [1, 2, 5];

console.log(sumUp(array)); // 8

