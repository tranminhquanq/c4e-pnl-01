// for, while, do while

// For loop

// for (step_1; step_2; step_3) {
//   // step_1: initial value
//   // step_2: condition
//   // step_3: increment
// }

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// i = 0; 0 < 10;  console.log("Hello world"); i++
// i = 1; 1 < 10;  console.log("Hello world"); i++
// i = 2; 2 < 10; console.log("Hello world"); i++
// ...
// i = 9; 9 < 10; console.log("Hello world"); i++
// i = 10; 10 < 10; khong chay

// While loop

// let i = 0;
// while (i < 10) {
//   console.log(i);
//   i++;
// }

// step_1: ktra dk => neu dk true => lap lai
// let number = Number(prompt("Nhap so"));

// while (number < 0) {
//   number = Number(prompt("Nhap so"));
// }

// console.log(number);

// Continue

// for (let i = 0; i < 10; i++) {
//   if (i === 5) {
//     continue;
//   }
//   console.log(i);
// }

// for (let i = 1; i <= 10; i++) {
//   for (let j = 1; j <= 10; j++) {
//     console.log(`${i} x ${j} = ${i * j}`);
//   }
//   console.log("============");
// }

// let i = 1,
//   j = 2,
//   res = 2;
// console.log(`${i} x ${j} = ${res}`);

// i = 0; i < 5;
// do something

// function fizzBuzz(n) {
//   for (let i = 1; i <= n; i++) {
//     if (i % 3 === 0) {
//       console.log("Fizz");
//     } else if (i % 5 === 0) {
//       console.log("Buzz");
//     } else if (i % 3 === 0 && i % 5 === 0) {
//       console.log("FizzBuzz");
//     } else {
//       console.log(i);
//     }
//   }
// }

// fizzBuzz(1000);

// function rightAngledTriangle(n) {
//   let res = "";
//   for (let i = 0; i < n; i++) {
//     res += "#";
//     console.log(res);
//   }
// }

// rightAngledTriangle(4);
