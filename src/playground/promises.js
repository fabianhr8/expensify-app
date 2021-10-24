const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve('this is my resolved data');
    reject('Something went wrong');
  }, 1500);
});

console.log('before')

promise.then((data) => {
  console.log(data);
}).catch((e) => {
  console.log('Error! ', e)
});

console.log('after')
