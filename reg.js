// INSTRUCTIONS
// Create a Regex pattern that validates emails at the domain "wande.dev".
// The pattern should validate emails that have only letters and numbers in the "user" part (the part before the "@")
// To test your pattern, uncomment the 7 console logs below. In the console, they should all return the expected boolean.
​
const emailRegex = /type-in-here/;
​
// console.log(`This should return TRUE: ${emailRegex.test("hello@wande.dev")}`);
​
// console.log(`This should return TRUE: ${emailRegex.test("mentoring@wande.dev")}`);
​
// console.log(`This should return TRUE: ${emailRegex.test("mabel35@wande.dev")}`);
​
// console.log(`This should return FALSE: ${emailRegex.test("hellowande.dev")}`);
​
// console.log(`This should return FALSE: ${emailRegex.test("hello@wandedev")}`);
​
// console.log(`This should return FALSE: ${emailRegex.test("@wande.dev")}`);
​
// console.log(`This should return FALSE: ${emailRegex.test("mabel%45@wande.dev")}`);
