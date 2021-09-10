// let str1 = 'Come over here!';
// let str2 = "What's up, Doc?";

// console.log(str1.endsWith('!'));

// console.log(str2.endsWith('!'));


let ages = { 
  Herman: 32, 
  Lily: 30, 
  Grandpa: 402, 
  Eddie: 10
};

let additionalAges = { 
  Marilyn: 22, 
  Spot: 237 
};

Object.assign(ages + additionalAges);


// let munstersDescription = "the Munsters are CREEPY and Spooky.";
// // => The munsters are creepy and spooky.

// console.log(munstersDescription.charAt(0).toUpperCase() + munstersDescription.substring(1).toLowerCase());


let str3 = "Few things in life are as important as house training your pet dinosaur.";
let str4 = "Fred and Wilma have a pet dinosaur named Dino.";

console.log(str3.includes('Dino'));
console.log(str4.includes('Dino'));



let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];

// flintstones.push("Dino");

flintstones.push("Dino", "Hoppy");


let advice = "Few things in life are as important as house training your pet dinosaur.";

// Expected return value:
// => 'Few things in life are as important as '

advice.slice(0, advice.indexOf('house'));

console.log(advice);