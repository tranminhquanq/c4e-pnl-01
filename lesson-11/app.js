// console.log("start");
// let a = 1;
// let b = 2;
// setTimeout(function () {
//   let greeting = prompt("What is your name");
//   console.log(greeting);
// }, 1000);

// console.log(a + b);

// console.log("An toi");

// setTimeout(function () {
//   console.log("Hoc bai xong");
// }, 0);

// console.log("Di ngu");

// diHocBai(diNgu);

// function diHocBai(callback) {
//   setTimeout(function () {
//     console.log("Hoc bai xong");
//     callback();
//   }, 3000);
// }

// function diNgu() {
//   console.log("Di ngu");
// }

// Promise

// let myPromise = new Promise(function (resolve, reject) {
//   let flag = true;
//   if (flag == true) {
//     resolve("Ok, tao da dau tu tk cua may x20");
//   } else {
//     reject("May bi scam");
//   }
// });

// myPromise
//   .then(function (kq) {
//     let newKq = kq + " ahuuuuuu";
//     return newKq;
//   })
//   .then(function (kq2) {
//     console.log(kq2);
//   })
//   .catch(function (err) {
//     console.log(err);
//   });

const movieAPI =
  "https://api.themoviedb.org/3/trending/all/day?api_key=0a6d26d952bdd58d29ef7b7cb82a59db&language=vi";

function getMovies() {
  const request = fetch(movieAPI);
  request
    .then(function (req) {
      return req.json();
    })
    .then(function (result) {
      console.log(result);
    })
    .catch(function (err) {
      alert(err.message);
    });
}

getMovies();

/// Code
// Add: -    git add .
// Commit: git commit -m "day la commit dau tien cua toi"
// Push:

const message = {
  avatar: "https://i.imgur.com/7yUvePI.png",
  name: "Nguyen Van A",
  content: "Hello World",
};
