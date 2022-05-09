// let a = 1;
// let b = 2;
// let c = 3;
// console.log(a, b, c);

// array (mảng)
//             0  1  2   3  4
// let numbers = [4, 9, 13, 5, 6];
// console.log(numbers);
// let animals = []; // empty array

// CRUD

// Create
// Read
// index
// let lastIndex = numbers.length - 1;

// console.log(numbers[lastIndex] + numbers[1] + numbers[2]);

// console.log(numbers[lastIndex]);

// let sum = 0;

// for (let i = 0; i < numbers.length; i++) {
//   sum += numbers[i]; // <=> sum = sum + numbers[i];
// }

// console.log(sum);

// B1: LẶP VÀO TỪNG PHẦN TỬ CỦA MẢNG NUMBERS
// B2: ĐỐI VỚI TỪNG PHẨN TỬ (ITEM) MÀ CHÚNG TA ĐÃ LẶP QUA PHẢI KIỂM TRA XEM ITEM ĐÓ LÀ SỐ CHẴN HAY SỐ LẺ
// B3: NẾU LÀ SỐ CHẴN .... NẾU LÀ SỐ LẺ...

// let numbers = [4, 5, -1, -2, 3, 9, -4, 13, 5, 6, -10];

// let sum_le = 0;
// let sum_chan = 0;

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 2 === 0) {
//     sum_chan += numbers[i];
//   } else {
//     sum_le += numbers[i];
//   }
// }

// console.log("sum_le", sum_le);
// console.log("sum_chan", sum_chan);

// let min = numbers[0];
// let max = numbers[0];

// for (let i = 1; i < numbers.length; i++) {
//   if (numbers[i] < min) {
//     min = numbers[i];
//   }

//   if (numbers[i] > max) {
//     max = numbers[i];
//   }
// }

// console.log("min", min);
// console.log("max", max);

// Update
let numbers = [1, -2, 4, 5, 3];

console.log(numbers);
// console.log("numbers 1", numbers);
// numbers[1] = 2;
// Them phan tu vao mang: them vao vi tri dau mang, them vao vi tri cuoi mang, them vao bat ki vi tri nao trong mang

// Them vao phan tu dau mang
// numbers.unshift(-1, 0);
// console.log("numbers 1", numbers);
// Them vao phan tu cuoi mang
// numbers.push(4, 5, 6, 7);
// console.log("numbers 2", numbers);

// Xoa phan tu trong mang: Xoa dau mang, xoa cuoi mang, xoa bat ki vi tri nao cua mang
// xoa dau mang
// numbers.shift();
// console.log(numbers);
// console.log(a);

// xoa cuoi mang
// numbers.pop();

// splice

// indexOf
// let indexOf2 = numbers.indexOf(-2);
// console.log(indexOf2);

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] === -2) {
//     console.log(i);
//     break;
//   }
// }

// Doc them ve nhung methods khac cua array o trong link nay: https://www.w3schools.com/jsref/jsref_obj_array.asp

// numbers.splice(2, 0, -4);
// console.log(numbers);

// let trash = [1, true, "hello", undefined, null, [], 2, 4, 5, false];
// let output = [];

/*
let output = trash.filter((item) => {
  return typeof item === "number";
});
 */

// for (let i = 0; i < trash.length; i++) {
//   if (typeof trash[i] === "number") {
//     output.push(trash[i]);
//   }
// }

// console.log(trash);

// Object

// let fullName = "Nguyen Van A";
// let age = 34;
// let address = "Ha Noi";
// let job = "Web Developer";

let person = {
  fullName: "Nguyen Van A",
  age: 34,
  address: "Ha Noi",
  job: "Web Developer",
  1: "Hello",
  "sở thích": "Đọc sách",
  skills: ["HTML", "CSS", "JavaScript"],
};

person.languages = ["Vietnamese", "English", "Japanese"];

// console.log(person);

// console.log(person["fullName"]);
// console.log(person.age);
// console.log(person[1]);
// console.log(person["sở thích"]);

// person.fullName = "Nguyen Van B";

// console.log(person.skills);

// delete person["sở thích"];

// console.log(person);

let persons = [
  {
    name: "Nguyen Van A",
    age: 12,
  },
  {
    name: "Nguyen Van B",
    age: 24,
  },
  {
    name: "Nguyen Van D",
    age: 50,
  },
  {
    name: "Nguyen Van C",
    age: 10,
  },
];

let output = persons[0];

for (let i = 1; i < persons.length; i++) {
  if (persons[i].age > output.age) {
    output = persons[i];
  }
}

// console.log(output);

function getBudgets(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i].budget;
  }
  return sum;
}

let sumBudGets = getBudgets([
  { name: "John", age: 21, budget: 23000 },
  { name: "Steve", age: 32, budget: 40000 },
  { name: "Martin", age: 16, budget: 2700 },
]);

console.log(sumBudGets);
