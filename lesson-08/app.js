// document.get
// let h1Element = document.getElementsByTagName("h1");
// let h1Element = document.getElementsByClassName("title");
// let h1Element = document.getElementById("title");
// let h1Element = document.querySelector(".hello");
// let h1Element = document.querySelectorAll(".hello");

// console.log(h1Element);

// const h2Element = document.getElementById("hello");

// console.dir(h2Element);

// h2Element.innerText = "Xin chao";
// h2Element.className = "color-red";

// style
// h2Element.style.color = "yellow";
// h2Element.style.border = "1px solid red";

// h2Element.setAttribute("class", "color-red");
// h2Element.setAttribute("data-id", "1");

// let imageTarget = document.getElementsByClassName("image");

// console.dir(imageTarget[0]);
// imageTarget[0].style.width = "200px";
// imageTarget[0].style.height = "200px";

const container = document.getElementById("container");

const input = ["Playing game", "Cooking", "Reading Book", "A", "b"];
const ulElement = document.createElement("ul");

// const item_1 = document.createElement("li");
// item_1.innerText = "Item 1";
// const item_2 = document.createElement("li");
// item_2.innerText = "Item 2";
// const item_3 = document.createElement("li");
// item_3.innerText = "Item 3";

// ulElement.appendChild(item_1);
// ulElement.appendChild(item_2);
// ulElement.appendChild(item_3);

for (let i = 0; i < input.length; i++) {
  let listItem = document.createElement("li");
  listItem.innerText = input[i];
  ulElement.appendChild(listItem);
}

container.appendChild(ulElement);
