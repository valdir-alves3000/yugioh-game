import { cardData, createCardImage, getRandomCardId } from "./card.js";
import { state } from "./state.js";

async function drawCards(cardNumbers, fieldSide) {
  for (let i = 0; i < cardNumbers; i++) {
    const randomIdCard = await getRandomCardId();
    const cardImage = await createCardImage(randomIdCard, fieldSide);

    document.getElementById(fieldSide).appendChild(cardImage);
  }
}

async function drawCardsInField(idCard, computerCardId) {
  state.view.fieldCards.computer.src = cardData[computerCardId].img;
  state.view.fieldCards.player.src = cardData[idCard].img;
}

async function drawSelectCard(idCard) {
  state.view.cardSprites.avatar.src = cardData[idCard].img;
  state.view.cardSprites.name.textContent = cardData[idCard].name;
  state.view.cardSprites.type.textContent = `Attribute: ${cardData[idCard].type}`;
}

async function removeImagesFromField(field) {
  const imgElements = field.querySelectorAll(".card");
  imgElements.forEach((card) => card.remove());
}

async function removeAllCardsImages() {
  const { computer, player1 } = state.view.playerSides;
  removeImagesFromField(computer);
  removeImagesFromField(player1);
}

async function resetCardSprites() {
  state.view.cardSprites.avatar.src = "";
  state.view.cardSprites.name.textContent = "Selecione";
  state.view.cardSprites.type.textContent = "uma carta";
}

async function hideCardFields() {
  state.view.fieldCards.computer.style.display = "none";
  state.view.fieldCards.player.style.display = "none";
}

async function showCardFieldsImages() {
  state.view.fieldCards.computer.style.display = "block";
  state.view.fieldCards.player.style.display = "block";
}

async function hideButton() {
  state.view.button.style.display = "none";
}

async function drawButton(text) {
  state.view.button.textContent = text;
  state.view.button.style.display = "block";
}

export {
  drawButton,
  drawCards,
  drawCardsInField,
  drawSelectCard,
  hideButton,
  hideCardFields,
  removeAllCardsImages,
  resetCardSprites,
  showCardFieldsImages,
};
