const ul = document.querySelector("#categories");
console.log(`У списку ${ul.children.length} категорії.`);
for (let i = 0; i < ul.children.length; i += 1) {
  const title = ul.children[i].firstElementChild.textContent;
  const quantity = ul.children[i].lastElementChild.children.length;
  console.log(`Категорія: ${title}`);
  console.log(`Кількість елементів: ${quantity}`);
}
