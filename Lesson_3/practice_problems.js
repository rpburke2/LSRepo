let str1 = 'Come over here!';
let str2 = "What's up, Doc?";

console.log(str1.endsWith('!'));

console.log(str2.endsWith('!'));


let ages = { 
  Herman: 32, 
  Lily: 30, 
  Grandpa: 402, 
  Eddie: 10
};

console.log(ages.hasOwnProperty('Spot'));


let munstersDescription = "the Munsters are CREEPY and Spooky.";
// => The munsters are creepy and spooky.

console.log(munstersDescription.charAt(0).toUpperCase() + munstersDescription.substring(1).toLowerCase());

