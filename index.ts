// function thats updacase or lowercase given string based on conditons
function formatString(input: string, toUpper?: boolean): string {
  if (toUpper) {
    return input.toUpperCase();
  } else {
    return input;
  }
}

// console.log(formatString("Hello"));          // Output: "HELLO"
// console.log(formatString("Hello", true));   // Output: "HELLO"
// console.log(formatString("Hello", false));  // Output: "hello"

// types

type Item = {
  title: string;
  rating: number;
}
// a function taht filtess an items based on rating
function filterByRating(items: Item[]): Item[] {
  const result: Item[] = [];

  for (let i = 0; i < items.length; i++) {
    if (items[i].rating >= 4) {
      result.push(items[i])
    }
  }

  return result;
}

// const books = [
//   { title: "Book A", rating: 4.5 },
//   { title: "Book B", rating: 3.2 },
//   { title: "Book C", rating: 5.0 }
// ];
//
// console.log(filterByRating(books));
// // Output: [ { title: "Book A", rating: 4.5 }, { title: "Book C", rating: 5.0 } ]

//  generic function that concatenates multiple arrays of the same type
function concatenateArrays<T>(...arrays: T[][]): T[] {
  // console.log(arrays)
  const result: T[] = [];

  for (let i = 0; i < arrays.length; i++) {
    // console.log(arrays[i])
    result.push(...arrays[i])
    // console.log(result)
  }

  return result;
}

// console.log(concatenateArrays(["a", "b"], ["c"]));       // Output: ["a", "b", "c"]
// console.log(concatenateArrays([1, 2], [3, 4], [5]));     // Ou [1, 2, 3, 4, 5]
//

// Create Class for vehicle
class Vehicle {
  // properties
  constructor(private make: string, private year: number) {
    // initialize make and year properties
  }
  // methods
  getInfo() {
    console.log(`"Make: ${this.make}, Year: ${this.year}"`)
  }
}

class Car extends Vehicle {
  // passing make & year, declaring model propertie
  constructor(make: string, year: number, private model: string) {
    super(make, year)
  }
  // methods
  getModel() {
    console.log(`"Model: ${this.model}"`);
  }
}

const myCar = new Car("Toyota", 2020, "Corolla");
myCar.getInfo();   // Output: "Make: Toyota, Year: 2020"
myCar.getModel();  // Output: "Model: Corolla"


// Write a function that takes a string | number and returns:
// The length if it's a string
// The number multiplied by 2 if it's a number
function processValue(value: string | number): number {
  if (typeof value === 'string') {
    return value.length;
  } else {
    return value * 2;
  }
}

console.log(processValue("hello")); // Output: 5
console.log(processValue(10));      // Output: 20

