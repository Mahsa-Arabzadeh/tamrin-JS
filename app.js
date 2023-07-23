// tamrin 1: Sum of numbers without considering strings
let num = [3, 10, 23, "hehe", 89, 0, "maxca"];
function calc(vorodi = []) {
  let sum = 0;
  for (let i = 0; i < vorodi.length; i++) {
    if (typeof num[i] === "number") {
      sum += vorodi[i];
    }
  }
  console.log(sum);
}
calc(num);

// tamrin 2: maximum number in varible.
function calc(vorodi = []) {
  let bishtarin = [2, 4, 7, 0];
  let maxNum = bishtarin[0]; // mosavi ba hadaghal tarin adaad.
  for (let i = 0; i < vorodi.length; i++) {
    if (vorodi[i] > maxNum) {
      maxNum = vorodi[i];
    }
  }
  console.log(maxNum);
}
calc(bishtarin);

// tamrin 3:
let kochik = [9, 4, 7, 900];
let minNumber = kochik[0];

for (let i = 0; i < kochik.length; i++) {
  if (kochik[i] < minNumber) {
    minNumber = kochik[i];
  }
}
console.log(minNumber);

// tamrin 4: average of number
let number = [1, 2, 3, 2];
function average(vorodi = []) {
  let sum = 0;
  for (let i = 0; i < number.length; i++) {
    sum += vorodi[i];
  }
  sum = sum / number.length;
  console.log(sum);
}
average(number);

//tamrin 5: sum of numbers and sum of strings seperate
let numm = [1, 3, 5, "jafar", "changiz", "khateri", 4];

function sumOfBoth(vorodi = []) {
  let sum = 0;
  for (let i = 0; i < vorodi.length; i++) {
    if (typeof numm[i] === "number") {
      sum += numm[i];
    } else if (typeof numm[i] === "string") {
      sum += numm[i];
    }
  }
  console.log(sum);
}
sumOfBoth(numm);
