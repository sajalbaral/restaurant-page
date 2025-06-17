import asian_zing from "./asian_zing.png";
import buffalo from "./buffalo.png";
import mangoHab from "./mango.png";
import chip_bbq from "./chip_bbq.png";

function createMenuCard(src, title, desc) {
  const card = document.createElement("div");
  card.className = "menu-card";

  const img = document.createElement("img");
  img.src = src;

  const name = document.createElement("p");
  name.innerText = title;

  const description = document.createElement("p");
  description.innerText = desc;

  card.append(img, name, description);
  return card;
}

export function loadMenu() {
  const menuContainer = document.createElement("div");
  menuContainer.className = "menu";

  const itemContainer = document.createElement("div");
  itemContainer.className = "item";

  menuContainer.appendChild(itemContainer);

  itemContainer.appendChild(
    createMenuCard(
      buffalo,
      "Buffalo",
      "Classic and tangy with a vinegar kick and buttery finish."
    )
  );
  itemContainer.appendChild(
    createMenuCard(
      mangoHab,
      "Mango Habanero",
      "Sweet upfront with a fiery habanero heat that lingers."
    )
  );
  itemContainer.appendChild(
    createMenuCard(
      chip_bbq,
      "Chipotle",
      "Smoky and bold with a hint of sweetness and peppery depth."
    )
  );
  itemContainer.appendChild(
    createMenuCard(
      asian_zing,
      "Asian Zing",
      "Sweet soy, garlic, and ginger with a mild chili bite."
    )
  );

  return menuContainer;
}
