async function playAudio(status) {
  const audio = new Audio(`./src/assets/audios/${status}.wav`);
  audio.addEventListener("loadeddata", () => audio.play());
}

export { playAudio };
