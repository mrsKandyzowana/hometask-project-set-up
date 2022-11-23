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
    console.log = jest.fn();
    const consoleSpy = jest.spyOn(console, 'log');
    console.log(`The perimeter of a rectangle is ${outperimeter} and the area is ${outarea}`);
    expect(consoleSpy).toHaveBeenCalledWith('The perimeter of a rectangle is 200 and the area is 1924');
});