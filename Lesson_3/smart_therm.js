// Testing out 'strictmode'

'use strict';

// PROBLEM:
/** smart home thermometer that needs sort through a given array of daily temps and 
calculate the temperature amplitude. There also may be a sensor error thrown. **/

const temperatures = [20, 30, 15, 0, 'error', 45, 65, 73, 86, 95];

/** 1) Understand the problem:
- What is temp amplitude? The difference between the highest and lowest temp
- How to compute max and min temps?
- What is a sensor error? What to do?

2) Breaking down into sub-problems:
- How to ignore errors?
- Find max temp in array.
- Find min temp in array.
- Subtract min from max (amplitude) and return it.
**/

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if(typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

// PROBLEM 2
// Function should now receive 2 arrays of temps

// 1) Understanding the problem
// - With 2 arrays, should we implement funitonality twice? -NO, just merge arrays

// 2) Breaking up into sub-problems
// - merge 2 arrays

