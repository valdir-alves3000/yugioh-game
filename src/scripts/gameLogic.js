import { playAudio } from "./audio.js";
import { cardData, getRandomCardId } from "./card.js";
import { state } from "./state.js";
import {
  drawButton,
  drawCardsInField,
  removeAllCardsImages,
  showCardFieldsImages,
} from "./uiManipulation.js";

async function checkDuelResults(playerCardId, computerCardId) {
  let duelResults = "draw";
  let playerCard = cardData[playerCardId];

  if (playerCard.winOf.includes(computerCardId)) {
    duelResults = "win";
    state.values.score.playerScore++;
  }

  if (playerCard.LoseOf.includes(computerCardId)) {
    duelResults = "lose";
    state.values.score.computerScore++;
  }

  if (duelResults != "draw") await playAudio(duelResults);

  return duelResults;
}

async function setCardsField(idCard) {
  await removeAllCardsImages();
  let computerCardId = await getRandomCardId();

  await showCardFieldsImages();
  await drawCardsInField(idCard, computerCardId);

  let duelResults = await checkDuelResults(idCard, computerCardId);

  await updateScore();
  await drawButton(duelResults);
}

async function updateScore() {
  state.view.scoreBox.textContent = `Win: ${state.values.score.playerScore} | Lose: ${state.values.score.computerScore}`;
}

export { checkDuelResults, setCardsField, updateScore };
