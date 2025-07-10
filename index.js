//1. Greeting function
function greet(name) {
    return `Hello, ${name}`;
}
// greet("Alice");

//2. Even or Odd check
function isEven(num) {
    if(num % 2 == 0){
        return "true";
    }
    else{
        return "false";
    }
}
// isEven(4);

//3. Array sum
function sumArray(numbers) {
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        sum += numbers[i];
    }
    return sum;
}
// let numbers = [1, 2, 3, 4, 5];
// console.log(sumArray(numbers));

//4. Grabbing a Property from an Object
function getProperty(obj, key) {
    return obj[key];
}
// console.log(getProperty({ name: "Bob", age: 30 }, "name"));

//5. Celsius to Fahrenheit Converter
function celsiusToFahrenheit(celsius) {
    return celsius * 9 / 5  + 32;
}
// console.log(celsiusToFahrenheit(25));

//6. Finding the Bigger Number
function findLarger(num1, num2) {
    if(num1 == num2){
        return num1;
    }
    if(num1 > num2){
        return num1;
    } else{
        return num2;
    }
}
// console.log(findLarger(10, 5));

//7. Reversing Text
function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString("hello world"));

//8. Counting Vowels
function countVowels(str) {
    str = str.toLowerCase();
    let count = 0;
    for(let i = 0; i < str.length; i++){
        if(str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u'){
            count++;
        }
    }
    return count;
}
// console.log(countVowels("Programming"));

//9. Calculator
function calculator(num1, num2, operator) {
    
    switch(operator){
        case '+': {
            return num1 + num2;
        }
        case '-': {
            return num1 - num2;
        }
        case '*': {
            return num1 * num2;
        }
        case '/': {
            if (num2 === 0) return 'Cannot divide by zero';
            return num1 / num2;
        }
        default : "Invalid";
    }
    return result;
}
// console.log(calculator(10, 0, "/"));

//10. First and last array elements
function getFirstAndLast(arr) {
    const newArr = [];
    newArr.push(arr.shift());
    newArr.push(arr.pop());
    return newArr;
}
// console.log(getFirstAndLast([10, 20, 30, 40]));


const arr = [1,2,3,4,5,6];
console.log(arr.filter(n=>n%2==0));


module.exports = {
    greet,
    isEven,
    sumArray,
    getProperty,
    celsiusToFahrenheit,
    findLarger,
    reverseString,
    countVowels,
    calculator,
    getFirstAndLast
};