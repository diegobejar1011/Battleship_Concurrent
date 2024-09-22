export function calculateControlPoint(initialPoint, finalPoint) {
    return {
      x: (initialPoint.x + finalPoint.x) / 2,
      y: Math.min(initialPoint.y, finalPoint.y) - 150, 
    };
  }