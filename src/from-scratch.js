const myForEach = (array, callback) => {
  for (let i = 0; i < array.length; i++) {
    callback(array[i]);
  }
};

const myMap = (array, callback) => {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(callback(array[i]));
  }
  return result;
};

const myFind = (array, callback) => {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      return array[i];
    }
  }
  return undefined;
};

const myFilter = (array, callback) => {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i]) === true) {
      result.push(array[i]);
    }
  }
  return result;
};

const sortWords = (array) => {
  return [...array].sort();
};

const sortNumbers = (array) => {
  return [...array].sort((a, b) => a - b);
};

const sortNumbersBetter = (array, isDescending) => {
  if (isDescending !== true) {
    return [...array].sort((a, b) => a - b);
  } else return [...array].sort((a, b) => b - a);
};

const sortUsersByOrder = (array) => {
  return [...array].sort((a, b) => a.order - b.order);
};

const sortUsersByName = (array) => {
  return [...array].sort((a, b) => {
    const nameA = a.name.toUpperCase(); // ignore upper and lowercase
    const nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });
};
module.exports = {
  myForEach,
  myMap,
  myFind,
  myFilter,

  sortWords,
  sortNumbers,
  sortNumbersBetter,
  sortUsersByOrder,
  sortUsersByName,
};
