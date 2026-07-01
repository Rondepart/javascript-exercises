const getAge = function (birthDate, deathDate) {
  if (!deathDate) {
    deathDate = new Date().getFullYear();
  }
  return deathDate - birthDate;
};

const findTheOldest = function(array) {
    return array.reduce((oldest, person) =>  {
        const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        const age = getAge(person.yearOfBirth, person.yearOfDeath);

        return age > oldestAge ? person : oldest;
    })
};

// Do not edit below this line
module.exports = findTheOldest;
