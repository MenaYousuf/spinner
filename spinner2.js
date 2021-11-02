
   
let frameDelay = 200;
const animFrames = ['|', '/', '-', '\\'];
const timeout = frameDelay * animFrames.length;

const animLoopID = setInterval(() => {
  for (let i = 0; i < animFrames.length; i++) {
    setTimeout(() => {
      process.stdout.write(`\r ${animFrames[i]}   `);
    }, frameDelay * i);
  }
}, timeout);

setTimeout(() => {
  clearInterval(animLoopID);
  process.stdout.write('\n');
}, 4000);


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



