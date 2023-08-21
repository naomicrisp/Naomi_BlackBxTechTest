import fs from "node:fs/promises";
const fileName = "./numbers.json"

  // Main function to generate number list
export async function writeNumbers() {

// STEP 1: create a function to create list of numbers 1-100 and write to numbers.json
    const numbers = Array.from({ length: 100 }, (_, i) => i + 1);

// STEP 2: Replace multiples of 3 and 5 with FizBuzz
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 3 === 0 && numbers[i] % 5 === 0) {
        numbers[i] = "FizzBuzz";
    }

// STEP 3: Replace multiples of only 3 with Fizz
    else if (numbers[i] % 3 === 0) {
            numbers[i] = "Fizz";
        }

// STEP 4: replace multiples of only 5 with Buzz
    else if (numbers[i] % 5 === 0) {
            numbers[i] = "Buzz";
        }

    else numbers[i] = numbers[i]
    }  

// STEP 5: write the numbers to numbers.json

    await fs.writeFile(fileName, JSON.stringify(numbers));
  
    return numbers;
  }
