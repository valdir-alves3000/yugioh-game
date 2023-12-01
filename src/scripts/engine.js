import { state } from "./state.js";
import {
  drawCards,
  hideButton,
  hideCardFields,
  resetCardSprites,
} from "./uiManipulation.js";

state.view.button.addEventListener("click", resetDuel);

function resetDuel() {
  hideButton();
  resetCardSprites();
  hideCardFields();
  init();
}

function init() {
  drawCards(5, state.values.playerSides.player1);
  drawCards(5, state.values.playerSides.computer);

  document.addEventListener("DOMContentLoaded", () => {
    const bgMusic = document.querySelector("#bg_music");

    document.addEventListener("mouseover", () => {
      if (bgMusic.paused) {
        bgMusic.play();
      }
    });
  });
}

init();
