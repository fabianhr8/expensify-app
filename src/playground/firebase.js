import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyC5xL4pujMhC_Bk0GBCAMsaJ_SXoU86aCg",
    authDomain: "expensify-62ecf.firebaseapp.com",
    databaseURL: "https://expensify-62ecf-default-rtdb.firebaseio.com",
    projectId: "expensify-62ecf",
    storageBucket: "expensify-62ecf.appspot.com",
    messagingSenderId: "377493502297",
    appId: "1:377493502297:web:55b14a6aa6c7b2c46af448"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

// Write individual expenses to app
const expenses = [
  {
    description: 'First expense',
    note: '',
    amount: 10,
    ceatedAt: ''
  },
  {
    description: 'Second expense',
    note: '',
    amount: 8,
    ceatedAt: ''
  },
  {
    description: 'Third expense',
    note: '',
    amount: 15,
    ceatedAt: ''
  }
];
//
// database.ref('expenses').push(expenses[0]);
// database.ref('expenses').push(expenses[1]);
database.ref('expenses').push(expenses[2]);


// Read from database
// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });
//     console.log(expenses);
//   }, (e) => {
//     console.log('Error with data changing. ', e);
//   });


// Check which expense was removed
database.ref('expenses').on('child_removed', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

// Check which expense was changed
database.ref('expenses').on('child_changed', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

// Check which expense was changed
database.ref('expenses').on('child_added', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});


// Add info to database
// database.ref().set({
//     name: 'Fabian Hernandez',
//     age: 29,
//     job: {
//       title: 'dev',
//       company: 'BH'
//     },
//     stressLevel: 4,
//     isSingle: false,
//     location: {
//       city: 'CDMX',
//       country: 'Mexico'
//     }
// }).then(() => {
//   console.log('Data is saved')
// }).catch((e) => {
//   console.log('Error! ', e)
// });


// Update propeties
// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Tijuana'
// });


// Remove isSingle propety
// database.ref('isSingle')
//   .remove()
//   .then(() => {
//     console.log('Data was removed')
//   })
//   .catch((e) => {
//     console.log('Did not removed data! ', e)
//   });


// Read data from DB
// database.ref('location')
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((e) => {
//     console.log('Error fetching data! ', e);
//   });


// Read data everytime it change
// const onValueChange2 = database.ref().on('value', (snapshot) =>{
//   const res = snapshot.val();
//   const name = res.name;
//   const job = res.job.title;
//   const company = res.job.company;
//   console.log(`${name} is a ${job} at ${company}`);
// }, (e) => {
//   console.log('Error with data changing. ', e);
// });
//
// setTimeout(() => {
//   database.ref('job/title').set('manager');
// }, 2000);
//
// setTimeout(() => {
//   database.ref('job/company').set('Microsoft');
// }, 4000);
