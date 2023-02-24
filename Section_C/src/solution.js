const sayNumber = N => N == 0 ? 'Zero.' : ([...((m = (N+'')['length']) % 3 ? '0'.repeat(3 - (m % 3)) : '') + N]
  .reduce((A,_,i,P) => (p = P.slice(3*i,3*i+3).join().replace(/,/g,'')) ? [...A, p] : A, []).reverse()
  .reduceRight((W,e,i,T) => (w = numericToWords(e,i)) ? [...W, i < T['length']-1 ? w : w.replace(/^./g, c => c
  .toUpperCase())] : W, []).join(', ').trim() + '.').replace(/,(\s\w*\-?\w+\.)/g, ' and$1'),
  ones = ['','One','two','Three','four','five','six','seven','eight','nine'],
  teens = ['ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'],
  tens = [,,'Twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'],
  parts = ['','thousand','million','billion','trillion'], [SPACE, EMPTY] = [' ', ''],
  numericToWords = (num,pos) => {
    if (+num == 0) return EMPTY;
    let [words, cN, n] = [EMPTY, -1, [...(+num)+EMPTY]]
    switch (n['length']) {
      case 3: cN = +n.splice(0,1)
        words += ones[cN] + ' hundred ' + (+num % 100 ? 'and ': EMPTY)
      case 2: cN = +n.splice(0,1)
        if (cN > 1) { words += tens[cN] + (+n ? '-' : SPACE); if (+n == 0) break; }
        else { if (cN == 1) { words += teens[+n] + SPACE; break; } }
      case 1: words += ones[+n] + SPACE }
    return words += parts[pos] 
  }
module.exports = {
  sayNumber
};
const number = process.argv[2];
console.log(sayNumber(number));

