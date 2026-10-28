const pascal = function(n) {
  if (n === 1) return [1];
  // each row edge can be considered to have 0
  // 0,1,0
  // 0,1,1,0
  // 0,1,2,1,0
  // 0,1,3,3,1,0
  // 0,1,4,6,4,1,0
  const prevArr = pascal(n-1);
  const currentArr = [];

  for (let i = 0; i < n; i++) {
    const prevArrLeftVal = prevArr[i - 1] === undefined ? 0 : prevArr[i - 1];
    const prevArrRightVal = prevArr[i] === undefined ? 0 : prevArr[i];
    currentArr[i] = prevArrLeftVal + prevArrRightVal;
  }
  return currentArr;
};
  
// Do not edit below this line
module.exports = pascal;
