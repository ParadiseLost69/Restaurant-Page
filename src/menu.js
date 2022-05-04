import coffeeImage from "./Images/CoffeeMenu.jpg";
import espressoImage from "./Images/espresso.jpeg";
import latteImage from "./Images/Latte.jpg";
import cappuccinoImage from "./Images/Cappuccino.jpg";

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
  cappuccino.className = "card";
  const latte = document.createElement("div");
  latte.className = "card";

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

  coName.textContent = "Hand-drip Coffee";
  coPrice.textContent = "$22.99";

  coffee.appendChild(coffeePic);
  coffee.appendChild(coName);
  coffee.appendChild(coPrice);

  //INFORMATION FOR LATTE
  let lattePic = new Image();
  lattePic.src = latteImage;
  const laName = document.createElement("h2");
  const laPrice = document.createElement("p");

  laName.textContent = "Cafè Latte";
  laPrice.textContent = "$30.99";

  latte.appendChild(lattePic);
  latte.appendChild(laName);
  latte.appendChild(laPrice);

  //INFORMATION FOR CAPPUCCINO
  const cappuccinoPic = new Image();
  cappuccinoPic.src = cappuccinoImage;
  const caName = document.createElement("h2");
  const caPrice = document.createElement("p");

  caName.textContent = "Cappuccino";
  caPrice.textContent = "$19.99";

  cappuccino.appendChild(cappuccinoPic);
  cappuccino.appendChild(caName);
  cappuccino.appendChild(caPrice);

  //appending to menu
  menuBook.appendChild(espresso);
  menuBook.appendChild(coffee);
  menuBook.appendChild(latte);
  menuBook.appendChild(cappuccino);
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
