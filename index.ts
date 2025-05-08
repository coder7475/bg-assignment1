function formatString(input: string, toUpper?: boolean): string {
  if (toUpper) {
    return input.toUpperCase();
  } else {
    return input;
  }
}

console.log(formatString("Hello"));          // Output: "HELLO"
console.log(formatString("Hello", true));   // Output: "HELLO"
console.log(formatString("Hello", false));  // Output: "hello"
