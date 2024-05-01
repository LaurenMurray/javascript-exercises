const sumAll = function (min, max) {
    if (min < 0 || max < 0 || !Number.isInteger(min) || !Number.isInteger(max)) return 'ERROR';
    if (min > max) [min, max] = [max, min];
    let finalSum = 0;
    for (i = min; i <= max; i++) {
        finalSum +=i;
    }
    console.log(finalSum);
    return finalSum;
};
// Do not edit below this line
module.exports = sumAll;