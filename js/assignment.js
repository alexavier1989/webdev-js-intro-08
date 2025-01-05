"use strict";

const submissionBtn = document.getElementById("submission-btn");
const smallestNumberElement = document.getElementById("smallest-number");
const largestNumberElement = document.getElementById("largest-number");
const averageNumberElement = document.getElementById("average-number");

const myNumbers = [35, 130, 354, 100, 25, 134, 99, 200, 35];


function findSmallestNumber(numbers) {
    let smallest = numbers[0];
    for (const number of myNumbers) {
        if (number < smallest) {
            smallest = number;
        }  
    }
    return smallest;
}

function findLargestNumber(numbers) {
    let largest = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > largest) {
            largest = numbers[i];
        }
    }
    return largest;
}

function findAverage(numbers) {
    let sum = 0;
    for (const number of myNumbers) {
        sum += number;
    }
    return sum / numbers.length;
}

function render() {
    smallestNumberElement.textContent = findSmallestNumber(myNumbers);
    largestNumberElement.textContent = findLargestNumber(myNumbers);
    averageNumberElement.textContent = findAverage(myNumbers);
}

submissionBtn.addEventListener("click", function () {
    render();
});