function add(n1: number, n2 :number, printResult: boolean, phrase: string) {
    if (printResult) {
        console.log(phrase+(n1+n2) )
    } else {
        return n1+n2;
    }
    
}

const number1: number= 5;
const number2 = 2.8;
const printResult = true;
const printString = "fuck me: ";

const result = add(number1, number2, printResult, printString);
console.log(result);