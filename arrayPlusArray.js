const arrayPlusArray = (arr1, arr2) => {
  let arrOne = arr1.reduce((acc, curr) => acc + curr, 0);
  let arrTwo = arr2.reduce((acc, curr) => acc + curr, 0);
  return arrOne + arrTwo;
};