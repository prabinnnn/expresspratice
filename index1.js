const arr1 = ["pasta", "pizza", "icecream"];
const arr2 = ["pasta", "cake", "icecream"];
const result = (solution) => {
  return solution;
};
const itemfinder = (arr1, arr2, result) => {
  const answer = arr1.filter((food) => arr2.includes(food));
  return result(answer);
};
const respone = itemfinder(arr1, arr2, result);
console.log({ respone });
