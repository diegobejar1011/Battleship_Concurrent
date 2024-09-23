self.addEventListener("message", (e) => {
  const { cellsOfPlayer, cellsOfComputer } = e.data;

  if (cellsOfPlayer.length === 0) {
    self.postMessage({ winner: "computer" });
  } else if (cellsOfComputer.length === 0) {
    self.postMessage({ winner: "player" });
  }
});
