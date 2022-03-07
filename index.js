// 1. Please write a function that shows the usage of closures
const showName = (name) => {
  return () => {
    console.log(`Hi, ${name}`);
  };
};

let getName = showName("Ozi");
getName();
// 2. Please write a function that returns a sum of array items
// example input [9, 1, 22, 0, 2]
// example output 34
let arr = [9, 1, 22, 0, 2];
const sumOfArray = (array) => {
  let totalAmount = 0;

  array.forEach((itemOfArray) => {
    totalAmount += itemOfArray;
  });

  return totalAmount;
};

arr.reduce((a, b) => a + b);

// 3. Please write a recursive function that flattens a list of items
// example input [[2, [4, [44,5,6]]], [4,5,6], [[2,4], 4], 5]]
// example output [2, 4, 44, 5, 6, 4, 5, 6, 2, 4, 4, 5]

const flatArr = (array) => {
  let flattedArr = [];

  array.filter((element) => {
    if (Array.isArray(element)) {
      let newArr = flatArr(element);

      flattedArr = [...flattedArr, ...newArr];
    } else {
      flattedArr = [...flattedArr, element];
    }
  });

  return flattedArr;
};

// 4. Please write a function that finds all common elements of two arrays(only primitive types as array elements, order doesn't matter)
// example inputs ['b', 3, 4, 76, 'c'], ['a', 'b', 4, 76, 21, 'e']
// example output ['b', 4, 76]

const findCommonElems = (arr1, arr2) => {
  return arr1.filter((item) => arr2.includes(item));
};

// 5. Please write a function that finds all different elements of two arrays(only primitive types as array elements, order doesn't matter)
// example inputs ['b', 3, 4, 76, 'c'], ['a', 'b', 4, 76, 21, 'e']
// example output ['a', 3, 21, 'c', 'e']

const findDiffElems = (arr1, arr2) => {
  let firstArrDiff = arr1.filter((item) => !arr2.includes(item));
  let secondArrDiff = arr2.filter((item) => !arr1.includes(item));

  return firstArrDiff.concat(secondArrDiff);
};

// 6. Please write a function that takes two arrays of items and returns an array of tuples made from two input arrays at the same indexes. Excessive items should be dropped.
// example input [1,2,3], [4,5,6,7]
// example output [[1,4], [2,5], [3,6]]

const tupleArr = (arr1, arr2) => {
  let arrOfTuples = [];

  arr1.filter((item1, index1) => {
    arr2.filter((item2, index2) => {
      index1 === index2 && arrOfTuples.push([item1, item2]);
    });
  });

  return arrOfTuples;
};

// 7. Please write a function which takes a path(path is an array of keys) and object, then returns value at this path. If value at path doesn't exists, return undefined.
// example inputs ['a', 'b', 'c', 'd'], { a: { b: { c: { d: '23' } } } }
// example output '23'

// 8. Please write compare function which compares 2 objects for equality.
// example input { a: 'b', c: 'd' }, { c: 'd', a: 'b' }  /// output true
// example input { a: 'c', c: 'a' }, { c: 'd', a: 'b', q: 's' }  /// output false

const compareObj = (obj1, obj2) => {
  return Object.entries(obj1).toString() === Object.entries(obj2).toString()
    ? true
    : false;
};

const compareObjs = (obj1, obj2) => {
  for (const [key1, value1] of Object.entries(obj1)) {
    for (const [key2, value2] of Object.entries(obj2)) {
      return key1 === key2 && value1 === value2 ? true : false;
    }
  }
};

// 9. Please write a function which takes a list of keys and an object, then returns this object, just without keys from the list
// example input ['color', 'size'], { color: 'Blue', id: '22', size: 'xl' }
// example output { id: '22' }
const findObj = (arr, obj) => {
  let arrOfKeys = [];
  let newObj = {};

  arr.filter((item, index) => {
    Object.keys(obj).filter((key) => {
      item !== key && !arr.includes(key) && arrOfKeys.push(key);
    });
  });

  arrOfKeys = arrOfKeys.filter(
    (item, index) => arrOfKeys.indexOf(item) != index
  );

  arrOfKeys.filter((item) => {
    for (const [key, value] of Object.entries(obj)) {
      if (item == key) {
        newObj[key] = value;
      }
    }
  });

  return newObj;
};
