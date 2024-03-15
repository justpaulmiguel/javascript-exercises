const findTheOldest = function (people) {
  const oldest = people.sort((currPerson, nextPerson) => {
    const aAge = getAge(currPerson.yearOfBirth, currPerson.yearOfDeath);
    const bAge = getAge(nextPerson.yearOfBirth, nextPerson.yearOfDeath);
    return aAge > bAge ? -1 : 1;
  });
  // console.log(oldest[0]);
  return oldest[0];
};

const getAge = (birth, death) => {
    if(!death){
        death = new Date().getFullYear();
    }
    return death - birth;
};

// Do not edit below this line
module.exports = findTheOldest;
