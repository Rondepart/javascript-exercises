const permutations = function(arr) {
  if (arr.length <= 1) return [arr];

  const result = [];

  for (let num of arr) {
    const remainingNum = arr.filter(n => n !== num);

    for (const perm of permutations(remainingNum)) {
      result.push([num, ...perm]);
    }
  }
  return result;
};
  
// Do not edit below this line
module.exports = permutations;
