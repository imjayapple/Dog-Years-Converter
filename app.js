//First start off by adding a variable to represent your age

const myAge = 50;

//Set the early years value to 2, this represents the early years of the dog

let earlyYears = 2;

//Conversion formula from dog years to human years in the early years

earlyYears *= 10.5;

//Determine the value of the later yeras of the dog by subtracting 2 from your current age

let laterYears = myAge - 2;

//Conversion formula from dog years to human years in the early years

laterYears *= 4;

//Formula for total dog years, add both variables together

let myAgeInDogYears = earlyYears + laterYears;

//Convert name provided to myName variable to lowercase

let myName = 'Jay'.toLowerCase()

//Log to the console a statement using all of the variables to obtain dog years from human years, and display both

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)