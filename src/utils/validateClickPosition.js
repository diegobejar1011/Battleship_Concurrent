export function validateClick(e, boardSelected, board, canvas, cellSize) {
    const rect = canvas.getBoundingClientRect();
    const scaleX = board.width / rect.width;
    const scaleY = board.height / rect.height;
  
    const mouseX = (e.clientX - rect.left) * scaleX;
    const mouseY = (e.clientY - rect.top) * scaleY;
  
    if (mouseX < boardSelected.maxWidth && mouseY < boardSelected.maxHeight && mouseX > boardSelected.minWidth && mouseY > boardSelected.minHeight) {
      const gridX = Math.floor(mouseX / cellSize) * cellSize;
      const gridY = Math.floor(mouseY / cellSize) * cellSize;
  
      console.log("Posicion: ")
      console.log({ x: gridX, y: gridY });
  
      return { x: gridX, y: gridY };
    }
  }