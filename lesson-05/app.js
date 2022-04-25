/*
Biến
Hằng số
Toán tử tính toán
Toán tử so sánh
Toán tử logic
*/

// Nếu như mà nồi cơm điện có cắm điện, thì sẽ có cơm ăn. Ngược lại thì không có cơm ăn

// let camDien = false;

// if (camDien == true) {
//   console.log("Co com an");
// } else {
//   console.log("Khong co com an");
// }

// let tuoi = prompt("Nhap tuoi cua ban");
// tuoi = Number(tuoi);
// console.log(tuoi);

// let number = Number(prompt("Nhap mot so ngau nhien"));

// if (number % 2 == 0) {
//   console.log("So chia het cho 2");
// } else {
//   if (number % 3 == 0) {
//     console.log("So chia het cho 3");
//   } else {
//     if (number % 5 == 0) {
//       console.log("So chia het cho 5");
//     }
//   }
// }

// let gpa = -10;

// if (gpa >= 8.0 && gpa <= 10.0) {
//   console.log("G");
// } else if (gpa >= 6.0 && gpa < 8) {
//   console.log("K");
// } else if (gpa >= 4.0 && gpa < 6) {
//   console.log("TB");
// } else if (gpa < 4.0 && gpa >= 0) {
//   console.log("Y");
// } else {
//   console.log("Khong co diem");
// }

// let thang = Number(prompt("Nhap thang"));

// if (thang >= 1 && thang <= 3) {
//   console.log("Mua xua");
// } else if (thang <= 6) {
//   console.log("Mua Ha");
// } else if (thang <= 9) {
//   console.log("Mua Thu");
// } else if (thang <= 12) {
//   console.log("Mua Dong");
// } else {
//   console.log("Khong co thang nay");
// }

// let height = Number(prompt("Nhap chieu cao")) / 100;
// let weight = Number(prompt("Nhap can nang"));
// let BMI = weight / (height * height);

// if (BMI >= 0 && BMI < 16) {
//   console.log("Severe Thinness");
// } else if (BMI < 17) {
//   console.log("Moderate Thinness");
// }

function sum(a, b) {
  let total = a + b;
  console.log(total);
}

function greeting() {
  console.log("Hello");
}

function kiemTraMua(input) {
  if (input >= 1 && input <= 3) {
    console.log("Mua xua");
  } else if (input <= 6) {
    console.log("Mua Ha");
  } else if (input <= 9) {
    console.log("Mua Thu");
  } else if (input <= 12) {
    console.log("Mua Dong");
  } else {
    console.log("Khong co thang nay");
  }
}

// let thang = Number(prompt());
// kiemTraMua(thang);

// kiemTraMua(3);

// sum(1, 2);
// sum(5, 5);

// greeting();
// greeting();

// let minutes_1 = 5;
// let seconds_1 = minutes_1 * 60;
// console.log(seconds_1);

// let minutes_2 = 2;
// let seconds_2 = minutes_2 * 60;

function convert(minutes) {
  let seconds = minutes * 60;
  console.log(seconds);
}

function areaPerimeter(width, height, choice) {
  if (choice === "area") {
    let area = width * height;
    return area;
  } else if (choice === "perimeter") {
    let perimeter = 2 * (width + height);
    return perimeter;
  }
}

let res1 = areaPerimeter(5, 5, "area");
console.log("res1", res1);

function isTriplet(a, b, c) {
  let max, min, mid;

  max = Math.max(a, b, c);
  min = Math.min(a, b, c);

  // if (a > b && a > c) {
  //   max = a;
  // } else if (b > a && b > c) {
  //   max = b;
  // } else if (c > a && c > b) {
  //   max = c;
  // }

  // if (a < b && a < c) {
  //   min = a;
  // } else if (b < a && b < c) {
  //   min = b;
  // } else if (c < a && c < b) {
  //   min = c;
  // }

  mid = a + b + c - (max + min);

  console.log("max", max);
  console.log("min", min);
  console.log("mid", mid);

  let res = max ** 2 === min ** 2 + mid ** 2;
  return res;
}

isTriplet(3, 4, 5);
