const ingredients = [
  "Картопля",
  "Гриби",
  "Часник",
  "Помідори",
  "Зелень",
  "Приправи",
];
const ul = document.querySelector("#ingredients");
for (let i = 0; i < ingredients.length; i += 1) {
  const li = document.createElement("li");
  li.textContent = ingredients[i];
  ul.append(li);
}
