const sumAll = function (int1, int2) {
    if (typeof int1 !== 'number' || typeof int2 !== 'number') {
        return 'ERROR'
    }
    if (int1 < 0 || int2 < 0) {
        return 'ERROR'
    }

    if (int1 > int2) {
        let temp = int1 //switching round
        int1 = int2
        int2 = temp
    }
    let currentSum = 0;
    for (i = int1; i <= int2; i++) {
        currentSum += i
    }
    return currentSum
};

// Do not edit below this line
module.exports = sumAll;
