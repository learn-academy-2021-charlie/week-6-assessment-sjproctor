// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function


// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their names capitalized.

// Create a function - dontPanic
// Parameter - array
// Iteration - map to get access to each object
// Use the key to access the name value - split string and uppercase, join
// String iterpolation

// a) Create a test with an expect statement using the variable provided.

describe("dontPanic", () => {
  it("takes in an array of objects and returns an array with a sentence about each person with their names capitalized", () => {
    var people = [
      { name: "ford prefect", occupation: "hitchhiker" },
      { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
      { name: "arthur dent", occupation: "radio employee" }
    ]
    expect(dontPanic(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is a president of the galaxy.", "Arthur Dent is a radio employee."])
  })
})
// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is a president of the galaxy.", "Arthur Dent is a radio employee."]

// b) Create the function that makes the test pass.

const dontPanic = (array) => {
  return array.map(object => {
    let name = object.name.split(" ").map(string => `${string[0].toUpperCase()}${string.substring(1)}`).join(" ")
    return `${name} is a ${object.occupation}.`
  })
}

// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// Create a function - onlyRemainders
// Parameter - array
// Filter - type of number
// Map the return array for mod 3

// a) Create a test with an expect statement using the variables provided.

describe("onlyRemainders", () => {
  it("takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3", () => {
    var hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
    // Expected output: [ 2, 0, -1, 0 ]
    var hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
    // Expected output: [ 2, 1, -1 ]
    expect(onlyRemainders(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
    expect(onlyRemainders(hodgepodge2)).toEqual([ 2, 1, -1 ])
  })
})

// b) Create the function that makes the test pass.

const onlyRemainders = (array) => {
  return array.filter(value => typeof value === "number").map(value => value % 3)
}

// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// Create a function - cubeIt
// Paramter - array
// Iteration - map, reduce

// a) Create a test with an expect statement using the variables provided.

describe("cubeIt", () => {
  it("takes in an array of numbers and returns the sum of all the numbers cubed.", () => {
    var cubeAndSum1 = [2, 3, 4]
    // Expected output: 99
    var cubeAndSum2 = [0, 5, 10]
    // Expected output: 1125
    expect(cubeIt(cubeAndSum1)).toEqual(99)
    expect(cubeIt(cubeAndSum2)).toEqual(1125)
  })
})

// b) Create the function that makes the test pass.

const cubeIt = (array) => {
  return array.reduce((previousValue, currentValue) => previousValue + currentValue ** 3, 0)
}
