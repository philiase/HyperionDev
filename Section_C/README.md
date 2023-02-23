# Section C: Code Challenge
## Option 1: Say the Number
### Solution Overview
The function also uses the numericToWords function to convert a group of digits to its word representation. This function takes two parameters: the group of digits as a string and its position in the array of groups. The function converts the group of digits to its word representation by following the rules of English grammar and adding the appropriate part (thousand, million, billion, etc.) based on its position in the array.
The function works as follows:

- First, it checks if the input number is zero. If it is zero, the function returns the string "Zero."
- If the input number is not zero, the function converts the number to a string and calculates its length (number of digits).
- If the length of the number is not divisible by 3, the function adds zeros to the left of the number to make its length divisible by 3. This   is done so that the number can be split into groups of three digits each.
- The function splits the number into groups of three digits each and stores them in an array. It then reverses the array so that the largest   group comes first.
- The function then iterates over each group of digits, converts it to its word representation, and adds the appropriate part (thousand,         million, billion, etc.) based on its position in the array.
- The function then joins all the word representations together with commas and returns the final string. It also replaces the last comma       with the word "and" for proper English grammar

## Prerequisites
***the instructions and scripts necessary to test, and run this solution on Linux, macOS, and Windows operating systems.***
Before proceeding, make sure you have the following software installed on your machine:

- Node.js (version 10 or higher)

### Installation
To install the solution, follow these steps:

Clone the repository to your local machine:
~~~
git clone https://github.com/philiase/HyperionDev.git

~~~
Navigate to the root directory of the repository:
~~~
cd Section_c/
~~~

Install the necessary dependencies:
~~~
npm install
~~~

once complete
### Building the Solution
To build the solution, run the following command in the root directory of the repository:
~~~
npm run build
~~~
This will compile the TypeScript code into JavaScript and output the resulting files in the `dist` directory.

### Testing the Solution
To run the test suite for the solution, run the following command in the root directory of the repository:
~~~
npm test
~~~
This will run the test suite using the Jasmine testing framework and output the results in the console.

### Running the Solution
To run the solution and generate the word representation of a number, run the following command in the root directory of the repository:
~~~
node dist/solution.js number
~~~
Replace `number` with the number you want to convert to words. For example:
~~~
node dist/solution.js 1234
~~~
this will output the following
~~~
one thousand, two hundred and thirty-four.
~~~
Hope you will have Fun as i did building this 🎉🥳👍


## Worst-Case Space Complexity Analysis
The space complexity of the solution can be divided into two main parts: the space used by the algorithm itself and the space used by the input.

***Space Used by the Algorithm***
The algorithm uses a few variables to store intermediate values and results, such as `m`, `p`, `w`, `A`, `e`, `i`, `T`, `words`, `cN`, and `n`. However, the maximum size of these variables is constant and independent of the input size, so the space used by the algorithm is O(1).

***Space Used by the Input***
The space used by the input depends on the size of the number being converted to words. Specifically, the input is stored as a string in the N variable, which has a length of m.
To convert the input string into an array of substrings (each representing a group of up to three digits), the algorithm creates a new array with a length of `(m + 2) / 3`. This array contains at most `m / 3` elements, each of which can have a length of up to 3 digits. Therefore, the total space used by the input array is O(m).
The numericToWords function also creates a few local variables `(words, cN, and n)` to store intermediate values. However, the maximum size of these variables is also constant and independent of the input size, so the space used by numericToWords is `O(1)`.

### Overall Worst-Case Space Complexity
In the worst case, the input string has a length of m, so the overall worst-case space complexity of the solution is `O(m)`. This occurs when the input contains a very large number, such as a 309-digit number (the maximum length of a JavaScript number). However, since the input is stored as a string, the actual memory usage may be higher due to the internal representation of the string by the JavaScript engine.

## Reference
- [GeekforGeeks](https://www.geeksforgeeks.org/convert-number-to-words/): Program to convert a given number to words
- [GeekforGeeks](https://www.geeksforgeeks.org/analysis-algorithms-big-o-analysis/): Analysis of Algorithms | Big-O analysis
- [freecodecamp](https://www.freecodecamp.org/news/javascript-split-how-to-split-a-string-into-an-array-in-js/): JavaScript Split – How to Split a String into an Array in JS
- [javascript.info](https://javascript.info/array-methods): Array methods





























