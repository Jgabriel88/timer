
const numbers = process.argv.slice(2)
const biggerTimer = numbers.sort((a, b) => a - b)
const timer = () => {
  for (let num of numbers) {
    if (num > 0) {
      setTimeout(() => {
        process.stdout.write('.');
      }, parseInt(num) * 1000)
    }
  }
  setTimeout(() => {
    console.log("")
  }, biggerTimer[biggerTimer.length - 1] * 1000)
}

timer()


//another approach

// const EventEmitter = require('events');
// const emitter = new EventEmitter();

// function alarm (num) {
//   setTimeout(() => {
//     console.log('Beep!!!');
//    }, num*1000)
// };

// emitter.on('event', () => {
//   const arr = process.argv.slice(2);
// for(let num of arr){
//   alarm(num);
// }
// });

// emitter.emit('event')