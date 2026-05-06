console.log('Part 1: Math Problems')


// Check if all numbers are divisible by 5. Cache the result in a variable.
const num1 = 10;
const num2 = 15;
const num3 = 20;
const num4 = 5;

const result =
  num1 % 5 === 0 &&
  num2 % 5 === 0 &&
  num3 % 5 === 0 &&
  num4 % 5 === 0;

console.log(`All numbers are divisible by 5: ${result}`);

// Check if the first number is larger than the last. Cache the result in a variable.

const largerNumber = num1 > num4;
console.log(`First number is larger than last: ${largerNumber}`)

// Accomplish the following arithmetic chain:
// Subtract the first number from the second number.
// Multiply the result by the third number.
// Find the remainder of dividing the result by the fourth number.

const subtractNumber = num2 - num1;
console.log(`Subtract Number: ${subtractNumber}`);
const multiplyNumber = subtractNumber * num3;
console.log(`Mulitply Number: ${multiplyNumber}`);
const remainder = multiplyNumber % num4;
console.log(`Remainder Number: ${remainder}`)



// Change the way that isOver25 calcualtes so that we do not need to use the NOT operator (!) in other logic comparisons. Rename the variable as appropriate. 

const num5 = num1 <= 25;
console.log(`First number is 25 or less: ${num5}`);
const isValid = largerNumber && result && num5 
console.log(`Larger number is 25 or less: ${isValid}`);




// PRACTICAL MATH

console.log('Part2: Practical Math') 

let distance = 1500;
let mph55 = 30;
let mph60 = 28;
let mph75 = 23;
let fuelBudget = 175;
let avgGasCost = 3; 
let hoursA = 55
let hoursB = 60
let hoursC = 75 
// Going at 55mph
console.log('A) Going at 55pmh')
const gallons = distance / mph55;
console.log(`Gallons Needed For Entire Trip: ${gallons}`); 
const fuelCost = gallons * avgGasCost; 
const fuelBudgetCheck = fuelBudget => fuelCost

console.log(`Will $175 Fuel Budget Be Enough?: ${fuelCost < fuelBudget}`); 

const hrsTraveling = distance / hoursA; 
console.log(`How long will trip take in hours at 55mph?: ${hrsTraveling}`);


// Going at 60mph
let fuelBudgetB = 175; 


console.log(`B) Going at 60mph`)


const gallonsB = distance / mph60;
console.log(`Gallons Needed For Entire Trip: ${gallonsB}`); 
const fuelCostB = gallonsB * avgGasCost; 
const fuelBudgetCheckB = fuelBudget => fuelCostB

console.log(`Will $175 Fuel Budget Be Enough?: ${fuelCostB < fuelBudgetB}`); 

const hrsTravelingB = distance / hoursB; 
console.log(`How long will trip take in hours at 60mph?: ${hrsTravelingB}`);


// Going at 75mph
let fuelBudgetC = 175; 


console.log(`B) Going at 75mph`)


const gallonsC = distance / mph75;
console.log(`Gallons Needed For Entire Trip: ${gallonsC}`); 
const fuelCostC = gallonsC * avgGasCost; 
const fuelBudgetCheckC = fuelBudget => fuelCostB

console.log(`Will $175 Fuel Budget Be Enough?: ${fuelCostC < fuelBudgetC}`); 

const hrsTravelingC = distance / hoursC; 
console.log(`How long will trip take in hours at 75mph?: ${hrsTravelingC}`);

console.log(`The most convenient option is traveling at 60mph as it reduces total travel time by 2.27hrs and allows us to still be within our total fuel budget`)