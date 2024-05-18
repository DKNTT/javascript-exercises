const removeFromArray = function (array, ...removeThis) {

    for (i = 0; i < array.length;) {
        removedElement = false;
        for (j = 0; j < removeThis.length; j++) {
            if (array[i] === removeThis[j]) {
                array.splice(i, 1);
                removedElement = true;
            }
        }
        if (!removedElement) {
            i++;
        }
    };
    return array
}

// Do not edit below this line
module.exports = removeFromArray;
