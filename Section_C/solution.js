// A function that converts a number to words
const sayNumber = N => 
  // Ternary operator to check if the number is zero
  N == 0 ? 'Zero.' :
  // Convert the number to an array of strings and split into groups of three digits
  // using array.reduce and array.slice methods
  [...((m = (N+'')['length']) % 3 ? '0'.repeat(3 - (m % 3)) : '') + N]
    .reduce((A,_,i,P) => (p = P.slice(3*i,3*i+3).join().replace(/,/g,'')) ? [...A, p] : A, []).reverse()
    // Convert each group of three digits to words using the numericToWords function
    .reduceRight((W,e,i,T) => (w = numericToWords(e,i)) ? [...W, i < T['length']-1 ? w : w.replace(/^./g, c => c.toUpperCase())] : W, [])
    .join(', ').trim() + '.')
    // Replace the comma with 'and' for the last group of three digits
    .replace(/,(\s\w*\-?\w+\.)/g, ' and$1');

// Arrays of words for ones, teens, tens, and parts of a number
const ones = ['','one','two','three','four','five','six','seven','eight','nine'];
const teens = ['ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
const tens = [,,'twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
const parts = ['','thousand','million','billion','trillion'];

// Constants for SPACE and EMPTY strings
const [SPACE, EMPTY] = [' ', ''];

// A function that converts a numeric string to words
const numericToWords = (num,pos) => {
  // Check if the number is zero
  if (+num == 0) return EMPTY;
  let [words, cN, n] = [EMPTY, -1, [...(+num)+EMPTY]];
  // Switch statement to handle different lengths of the numeric string
  switch (n['length']) {
    // Case for a three-digit number
    case 3:
      cN = +n.splice(0,1);
      words += ones[cN] + ' hundred ' + (+num % 100 ? 'and ': EMPTY);
    // Case for a two-digit number
    case 2:
      cN = +n.splice(0,1);
      if (cN > 1) {
        words += tens[cN] + (+n ? '-' : SPACE);
        if (+n == 0) break;
      } else {
        if (cN == 1) {
          words += teens[+n] + SPACE;
          break;
        }
      }
    // Case for a one-digit number
    case 1:
      words += ones[+n] + SPACE;
  }
  // Add the appropriate part of the number (thousand, million, etc.)
  return words += parts[pos];
}
