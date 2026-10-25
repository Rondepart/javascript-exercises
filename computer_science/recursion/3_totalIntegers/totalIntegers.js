const totalIntegers = function(storage) {
  if (typeof storage !== 'object' || storage === null) return undefined;

  let total = 0;
  for(let item of Object.values(storage)){
    if (Number.isInteger(item)) {
      total++;
    } else if (typeof item === "object" && item !== null) {
      total += totalIntegers(item);
    }
  }
  return total;
};
  
// Do not edit below this line
module.exports = totalIntegers;
