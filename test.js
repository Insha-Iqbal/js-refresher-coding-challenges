// test.js using assert with custom runTest for clarity

const assert = require('assert');
const {
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
} = require('./index.js'); // replace with your filename

function runTest(description, fn) {
    try {
        fn();
        console.log(`✅ ${description}`);
    } catch (error) {
        console.error(`❌ ${description}`);
        console.error(`   ${error.message}`);
    }
}

runTest("greet returns correct greeting", () => {
    assert.strictEqual(greet("Alice"), "Hello, Alice");
});

runTest("isEven identifies even and odd numbers", () => {
    assert.strictEqual(isEven(4), "true");
    assert.strictEqual(isEven(5), "false");
});

runTest("sumArray calculates correct sum", () => {
    assert.strictEqual(sumArray([1, 2, 3, 4, 5]), 15);
    assert.strictEqual(sumArray([-1, -2, -3]), -6);
});

runTest("getProperty retrieves correct property", () => {
    assert.strictEqual(getProperty({ name: "Bob", age: 30 }, "name"), "Bob");
    assert.strictEqual(getProperty({ name: "Bob", age: 30 }, "age"), 30);
});

runTest("celsiusToFahrenheit converts correctly", () => {
    assert.strictEqual(celsiusToFahrenheit(0), 32);
    assert.strictEqual(celsiusToFahrenheit(25), 77);
});

runTest("findLarger identifies larger number", () => {
    assert.strictEqual(findLarger(10, 5), 10);
    assert.strictEqual(findLarger(5, 10), 10);
    assert.strictEqual(findLarger(7, 7), 7);
});

runTest("reverseString reverses correctly", () => {
    assert.strictEqual(reverseString("hello world"), "dlrow olleh");
    assert.strictEqual(reverseString("JavaScript"), "tpircSavaJ");
});

runTest("countVowels counts vowels accurately", () => {
    assert.strictEqual(countVowels("Programming"), 3);
    assert.strictEqual(countVowels("AEIOU"), 5);
});

runTest("calculator performs basic operations", () => {
    assert.strictEqual(calculator(10, 5, '+'), 15);
    assert.strictEqual(calculator(10, 5, '-'), 5);
    assert.strictEqual(calculator(10, 5, '*'), 50);
    assert.strictEqual(calculator(10, 5, '/'), 2);
});

runTest("getFirstAndLast returns first and last elements", () => {
    assert.deepStrictEqual(getFirstAndLast([10, 20, 30, 40]), [10, 40]);
    assert.deepStrictEqual(getFirstAndLast([1, 2, 3]), [1, 3]);
});

console.log("All structured tests completed.");
