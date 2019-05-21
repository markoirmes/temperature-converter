//constant variable named kelvin
const kelvin = 283;

console.log(`There is ${kelvin} degrees Kelvin.`);

// celsius is 273 degrees less than kelvin
const celsius = kelvin - 273;

console.log(`There is ${celsius} degrees Celsius.`);

//this is formula for fahrenheit, using let to round up the number
let fahrenheit = celsius * (9/5) + 32;
fahrenheit = Math.floor(fahrenheit);

console.log (`The temperature is ${fahrenheit} degrees Fahrenheit.`);

// formula for Newton
let newton = celsius * (33/100);
newton = Math.floor(newton);

console.log (`Temperature is ${newton} degrees Newton.`);