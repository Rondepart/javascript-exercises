const sumAll = function(num1, num2) {
    if (!Number.isInteger(num1) || !Number.isInteger(num2)) return ("ERROR");
    if (num1 < 0 || num2 < 0) return ("ERROR");

    let bigNum = (num1 >= num2) ? num1 : num2;
    let smallNum = (num1 >= num2) ? num2 : num1;
    let totalSum = 0;

    for (let i = smallNum; smallNum<=bigNum; smallNum++) {
        totalSum+= smallNum;
    }
    return totalSum;

}

// Do not edit below this line
module.exports = sumAll;
