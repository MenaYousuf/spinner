
   
let delayCycle = 200;
const rotations = ['|', '/', '-', '\\',];
const timeout = delayCycle * rotations.length;

const pauses = setInterval(() => {
  for (let i = 0; i < rotations.length; i++) {
    setTimeout(() => {
      process.stdout.write(`\r ${rotations[i]}   `);
    }, delayCycle * i);
  }
}, timeout);

setTimeout(() => {
  // clearInterval(pauses);
  process.stdout.write();
}, 2000);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 500);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\\   '); 
// }, 700);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r|   '); 
// }, 900);



