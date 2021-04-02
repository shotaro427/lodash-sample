import { difference, throttle } from "lodash";
import groupBy from "lodash.groupby";
import orderBy from "lodash.orderby";

function jsSort() {
  const array = [...new Array(5).keys()];

  console.log("origin", array);

  // 破壊系
  const newArr = array.sort((a, b) => b - a);

  console.log("origin", array);
  console.log("sorted", newArr);
}

function lodashSort() {
  const array = [...new Array(5).keys()];

  console.log("origin", array);

  // 破壊系
  const newArr = orderBy(array, undefined, "desc");

  // 昇順Only
  // const newArr = orderBy(array, undefined, "desc");

  console.log("origin", array);
  console.log("sorted", newArr);
}

console.log("\nJS sort");
jsSort();

console.log("\nLodash sort");
lodashSort();

function lodashGroupBy() {
  const data = [
    { id: "111", name: "A", score: 100 },
    { id: "111", name: "B", score: 50 },
    { id: "222", name: "C", score: 100 },
    { id: "222", name: "C", score: 50 },
    { id: "222", name: "D", score: 70 },
  ];

  const groups = groupBy(data, (value) => {
    return value.id;
  });

  console.log(groups);
}

console.log("\nLodash groupBy");
lodashGroupBy();

// 集合
const array1 = [2, 2, 1, 4, 5];
const array2 = [2, 4, 6];

// 差集合
console.log("\nLodash Difference");
// array1 - array2
console.log(difference(array1, array2));

// 積集合
console.log("\nJS Intersection");
function intersection<T>(arr1: Array<T>, arr2: Array<T>): Array<T> {
  return arr1.filter((ele) => arr2.indexOf(ele) !== -1);
}

console.log("Duplicated", intersection(array1, array2));
console.log("Uniqued", [...new Set(intersection(array1, array2))]);

// 和集合
console.log("\nJS union");
console.log([...new Set([...array1, ...array2])]);

// throttle
function continuous(fn: any) {
  setInterval(() => fn(), 200);
}

// continuous(() => console.log("200msec"));
continuous(throttle(() => console.log("1000msec"), 1000));
