import { setCardsField } from "./gameLogic.js";
import { state } from "./state.js";
import { drawSelectCard } from "./uiManipulation.js";

const pathImages = "./src/assets/icons";
const cardData = [
  {
    id: 0,
    name: "Blue Eyes White Dragon",
    type: "Paper",
    img: `${pathImages}/dragon.png`,
    winOf: [1],
    LoseOf: [2],
  },
  {
    id: 1,
    name: "Dark Magician",
    type: "Rock",
    img: `${pathImages}/magician.png`,
    winOf: [2],
    LoseOf: [0],
  },
  {
    id: 2,
    name: "Exodia",
    type: "Scissors",
    img: `${pathImages}/exodia.png`,
    winOf: [0],
    LoseOf: [1],
  },
];

async function getRandomCardId() {
  const randomIndex = Math.floor(Math.random() * cardData.length);
  return cardData[randomIndex].id;
}

async function createCardImage(idCard, fieldSide) {
  const card = document.createElement("div");
  const cardImage = document.createElement("img");
  cardImage.setAttribute("src", `${cardData[idCard].img}`);

  card.appendChild(cardImage);
  card.setAttribute("data-id", idCard);
  card.classList.add("card");

  if (fieldSide === state.values.playerSides.player1) {
    card.classList.add("boxOpen");
    card.addEventListener("mouseover", () => {
      drawSelectCard(idCard);
    });

    card.addEventListener("click", () => {
      setCardsField(card.getAttribute("data-id"));
    });
  }

  return card;
}

export { cardData, createCardImage, getRandomCardId };
