import Icon from "./CoffeeImage.jpg";

const header = function () {
  const head = document.createElement("div");
  head.className = "header";
  //
  content.appendChild(head);
  //logo
  const logo = document.createElement("div");
  logo.textContent = "Cafe Teraoka";
  logo.className = "logo";

  //Selector buttons - HOME, MENU, CONTACT
  const homeButton = document.createElement("button");
  homeButton.textContent = "Home";
  const menuButton = document.createElement("button");
  menuButton.textContent = "Menu";
  const contactButton = document.createElement("button");
  contactButton.textContent = "Contact Us";

  //appending items
  head.appendChild(logo);
  head.appendChild(homeButton);
  head.appendChild(menuButton);
  head.appendChild(contactButton);
};

const mainPageContent = function () {
  let mainContent = document.createElement("div");
  mainContent.className = "main-content";
  let content = document.querySelector("#content");
  let tagline = document.createElement("div");
  tagline.className = "logo";
  tagline.textContent = "Take Your Time, Enjoy Life";
  //image
  let coffee = new Image();
  coffee.src = Icon;
  coffee.className = "main-picture";

  //content
  let information = document.createElement("div");
  information.className = "information";
  information.textContent = `In today's world, people are always in a hurry. At Teraoka Cafe, we ask you to take a moment and relax. Enjoy expertly roasted coffee-beans imported from hand-selected locations across the globe.Get comfortable, enjoy the ambiance, and stay as long as you would like. Watch our expert baristas create top-tier Latte Art or simply relax and enjoy our hand-ground, pour-over coffee.`;

  //Appending
  content.appendChild(mainContent);
  mainContent.appendChild(coffee);
  mainContent.appendChild(tagline);
  mainContent.appendChild(information);
};

export { mainPageContent, header };
