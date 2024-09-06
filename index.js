"use strict";
// const ul = document.querySelector("#categories");
// console.log(`У списку ${ul.children.length} категорії.`);
// for (let i = 0; i < ul.children.length; i += 1) {
//   const title = ul.children[i].firstElementChild.textContent;
//   const quantity = ul.children[i].lastElementChild.children.length;
//   console.log(`Категорія: ${title}`);
//   console.log(`Кількість елементів: ${quantity}`);
// }
//2
// const ingredients = [
//   "Картопля",
//   "Гриби",
//   "Часник",
//   "Помідори",
//   "Зелень",
//   "Приправи",
// ];
// const ul = document.querySelector("#ingredients");
// for (let i = 0; i < ingredients.length; i += 1) {
//   const li = document.createElement("li");
//   li.textContent = ingredients[i];
//   ul.append(li);
// }
//3
// const images = [
//   {
//     url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     alt: "White and Black Long Fur Cat",
//   },
//   {
//     url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     alt: "Orange and White Koi Fish Near Yellow Koi Fish",
//   },
//   {
//     url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     alt: "Group of Horses Running",
//   },
// ];
// const ul = document.querySelector("#gallery");
// for (let i = 0; i < images.length; i += 1) {
//   const img = document.createElement("img");
//   img.src = images[i].url;
//   img.alt = images[i].alt;
//   ul.append(img);
// }
// ul.classList.add("ul");
// 4
const span = document.querySelector("#value");
const incrementBtn = document.querySelector("#increment");
const decrementBtn = document.querySelector("#decrement");
console.log(incrementBtn);
let counterValue = 0;
const increment = () => {
  counterValue += 1;
  span.textContent = counterValue;
  return span;
};
const decrement = () => {
  counterValue -= 1;
  span.textContent = counterValue;
  return span;
};
span.textContent = counterValue;
incrementBtn.addEventListener("click", increment);
decrementBtn.addEventListener("click", decrement);
