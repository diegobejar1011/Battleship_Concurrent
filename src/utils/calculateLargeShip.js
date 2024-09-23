
export function calculateLargeShip(ship, cellSize) {
    let positionsOfShips = [];

    let xP = ship.x;
    let yP = ship.y;

    positionsOfShips.push({ x: xP, y: yP });

    for (let i = 1; i < ship.cell; i++) {
        xP += cellSize;
        positionsOfShips.push({ x: xP, y: yP });
    }

    return positionsOfShips;
}