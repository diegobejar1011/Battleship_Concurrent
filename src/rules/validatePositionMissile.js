export function validatePositionMissile(newPosition, possitionMisiles) {
  console.log(newPosition);
  console.log(possitionMisiles);
  if (!possitionMisiles.length) return true;
  
  return !possitionMisiles.some(position => 
    position.x === newPosition.x && position.y === newPosition.y
  );
}
