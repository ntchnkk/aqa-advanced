// 1. function declaration
function findRectangleArea1 (width, height) {
    return width * height;
}

console.log(findRectangleArea1(2, 3));



// 2. function expression
const findRectangleArea2 = function (width, height) {
    return width * height;
}

console.log(findRectangleArea2(3, 4));



// 3. arrow function
const findRectangleArea3 = (width, height) => width * height;

console.log(findRectangleArea3(4, 5));