const CustomPromise = require('./custom-promise');
const p = new CustomPromise((resolve, reject) => {
  setTimeout(() => {
    resolve('Success');
  }, 500);
});

// p.then(console.log); // after 500ms, print out 'Success'

// p.then(response => {
//   console.log('Another ' + response);
// }); // after the first Success prints, our code should immediately print 'Another Success'

p.then(res => {
  return res + '这里返回一个普通值';
}).then(res => {
  console.log(res);
});

// const badPromise = new CustomPromise((resolve, reject) => {
//   setTimeout(() => {
//     reject('Error');
//   }, 800);
// });

// badPromise.then(() => {
//   throw new Error('This code should not run');
// }, console.log); // after 800ms, print out 'Error'

// badPromise.catch(error => {
//   console.log('Oh no ' + error);
// }); // after the above prints, immediately print 'Oh no Error'
