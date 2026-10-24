const contains = function(obj, val) {
  if (Object.values(obj).includes(val)) return true;
  for (let nestedObj of Object.values(obj)) {
    if (typeof nestedObj === "object" && nestedObj !== null) {
      if (contains(nestedObj, val)) return true;
    }
  }
  return false;
};
  
// Do not edit below this line
module.exports = contains;
