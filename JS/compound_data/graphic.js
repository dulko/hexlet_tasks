import { makePoint, getX, getY } from 'hexlet-points'; // eslint-disable-line


export const getQuadrant = (point) => {
  const x = getX(point);
  const y = getY(point);
  
  if (x > 0 && y > 0) {
    return 1;
  } else if (x < 0 && y > 0) {
    return 2;
  } else if (x < 0 && y < 0) {
    return 3;
  } else if (x > 0 && y < 0) {
    return 4;
  } 
    
  return null;
};

export const getSymmetricalPoint = (point) => makePoint(-getX(point), -getY(point));

export const calculateDistance = (point1, point2) => {
  const x1 = getX(point1);
  const y1 = getY(point1);
  const x2 = getX(point2);
  const y2 = getY(point2);

  return Math.sqrt((x2-x1)*(x2-x1) + (y2-y1)*(y2-y1));
}
