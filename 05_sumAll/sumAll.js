const sumAll = function (num1, num2) {
    if (num1 < 0 || num2 < 0 || typeof(num1) != 'number' || typeof(num2) != 'number') return 'ERROR';
    let finalSum = 0;
    for (i = Math.min(num1, num2); i <= Math.max(num1, num2); i++) {
        finalSum +=i;
    }
    console.log(finalSum);
    return finalSum;
};
// Do not edit below this line
module.exports = sumAll;
