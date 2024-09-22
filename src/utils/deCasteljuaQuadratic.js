export function deCasteljauQuadratic(t, p0, p1, p2) {

    const x1 = (1 - t) * p0.x + t * p1.x;
    const y1 = (1 - t) * p0.y + t * p1.y;
  
  
    const x2 = (1 - t) * p1.x + t * p2.x;
    const y2 = (1 - t) * p1.y + t * p2.y;
  
  
    const x = (1 - t) * x1 + t * x2;
    const y = (1 - t) * y1 + t * y2;
  
    return { x, y };
}