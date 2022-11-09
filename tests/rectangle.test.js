import { getRectanglePerimeter, getRectangleArea, getRectangleInfo } from '../js/rectangle.js';

// var rectangle = require('../js/rectangle');
// var getRectanglePerimeter = require('getRectanglePerimeter');

test('should properly output the perimeter of rectangle', ()=>{
    const outputPerimeter = getRectanglePerimeter(20, 34);
    expect(outputPerimeter).toBe(108);
});

test('should properly output the area of rectangle', ()=>{
    const outputArea = getRectangleArea(70, 94);
    expect(outputArea).toBe(6580);
});

test('should properly output the info on rectangle', ()=>{
    const outputRectangleInfo = getRectangleInfo((74), (26));
    const outarea = getRectangleArea(74, 26);
    const outperimeter = getRectanglePerimeter(74, 26);
    expect(outputRectangleInfo).toBe(`The perimeter of a rectangle is ${outperimeter} and the area is ${outarea}`);
});