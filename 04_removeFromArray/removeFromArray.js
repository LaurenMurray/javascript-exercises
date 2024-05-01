const removeFromArray = function (array, ...valuesToRemove) {
    for (valueToRemove = 0; valueToRemove < valuesToRemove.length; valueToRemove++){
        array = array.filter(function (valueToCheck) {
            return valueToCheck !== valuesToRemove[valueToRemove];
        });
    }
    return array;
}

removeFromArray([1, 2, 3, 4], 3, 2);
// Do not edit below this line
module.exports = removeFromArray;
  