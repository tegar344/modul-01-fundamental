/*
Write a code to find area of rectangle.
○ Example : length = 5, width = 3
○ Output : 15
*/
//1.data
let rectangleLength: number = 5
let rectangleWidth: number = 3
//2.rumus
let rectangleArea: number = rectangleLength * rectangleWidth
//3. hasil
console.log(rectangleArea); 15


/*
Write a code to find perimeter of rectangle.
○ Example : length = 5, width = 3
○ Output : 16
*/
//1.data
rectangleLength = 5
rectangleWidth = 3
//2.rumus 
const rectanglePerimeter = 2 * (rectangleLength + rectangleWidth)
//3.hasil
console.log(rectanglePerimeter); 16

/*
Write a code to find diameter, circumference and area of a circle.
○ Example : radius = 5
○ Output : diameter = 10, circumference = 31.4159, area = 78.539
*/
//1.data
let radius: number = 5
// 2. rumus 
const diameter : number = 2 * radius ;
const Circumference : number =2 *Math.PI* radius
const area : number = Math.PI*radius**2
//3.hasil
console.log("Diameter=",diameter);//10
console.log("Circumference=",Circumference.toFixed(4));//31.4159
console.log("Area=",area.toFixed(3)); 78.540 


/*
Write a code to find angles of triangle if two angles are given.
○ Example : a = 80, b = 65
○ Output : 35
*/
// 1.data 
