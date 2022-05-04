import coffeeImage from "./Images/CoffeeMenu.jpg";
import espressoImage from "./Images/espresso.jpeg";

const menu = function () {
  //create Menu DIV
  const menuBook = document.createElement("div");
  menuBook.className = "menu-book";

  content.appendChild(menuBook);

  //Menu TITLE
  let title = document.createElement("h1");
  title.textContent = "Menu";
  title.className = "title";
  menuBook.appendChild(title);

  //Items
  const espresso = document.createElement("div");
  espresso.className = "card";
  const coffee = document.createElement("div");
  coffee.className = "card";
  const cappuccino = document.createElement("div");
  const latte = document.createElement("div");

  //INFORMATION FOR ESPRESSO
  let espressoPic = new Image();
  espressoPic.src = espressoImage;
  const esName = document.createElement("h2");
  const esPrice = document.createElement("p");
  esName.textContent = "Espresso";
  esPrice.textContent = "$24.99";

  espresso.appendChild(espressoPic);
  espresso.appendChild(esName);
  espresso.appendChild(esPrice);

  //INFORMATION FOR COFFEE
  let coffeePic = new Image();
  coffeePic.src = coffeeImage;
  const coName = document.createElement("h2");
  const coPrice = document.createElement("p");

  coName.textContent = "Coffee";
  coPrice.textContent = "$22.99";

  coffee.appendChild(coffeePic);
  coffee.appendChild(coName);
  coffee.appendChild(coPrice);

  //INFORMATION FOR CAPPUCCINO

  //appending to menu
  menuBook.appendChild(espresso);
  menuBook.appendChild(coffee);
};

const menuItem = (name, price, description) => {
  return { name, price, description };
};

/*
function menuItem(name, price, description) {
  let itemName = document.createElement("div");
  let itemPrice = document.createElement("div");
  let itemDescription = document.createElement("div");
  itemName.textContent = name;
  itemPrice.textContent = price;
  itemDescription.textContent = description;
  content.appendChild(itemName);
  content.appendChild(itemPrice);
  content.appendChild(itemDescription);
}
*/
export { menu, menuItem };
