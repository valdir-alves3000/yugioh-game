export const state = {
  view: {
    scoreBox: document.querySelector("#score_points"),
    cardSprites: {
      avatar: document.querySelector("#card_image"),
      name: document.querySelector("#card_name"),
      type: document.querySelector("#card_type"),
    },
    fieldCards: {
      player: document.querySelector("#player-field-card"),
      computer: document.querySelector("#computer-field-card"),
    },
    playerSides: {
      player1: document.querySelector("#player_cards"),
      computer: document.querySelector("#computer_cards"),
    },
    button: document.querySelector("#next_duel"),
  },
  values: {
    score: {
      playerScore: 0,
      computerScore: 0,
    },
    playerSides: {
      player1: "player_cards",
      computer: "computer_cards",
    },
  },
};
