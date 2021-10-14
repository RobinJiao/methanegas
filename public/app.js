// Complete Project Details at: https://RandomNerdTutorials.com/

// Database Paths
var dataFloatPath = 'test/float';
var dataIntPath = 'test/int';

// Get a database reference 
const databaseFloat = database.ref(dataFloatPath);
const databaseInt = database.ref(dataIntPath);

console.log('databaseInt: ', databaseInt);

// Variables to save database current values
var floatReading;
var intReading;

// Attach an asynchronous callback to read the data
databaseFloat.on('value', (snapshot) => {
  floatReading = snapshot.val();
  console.log(floatReading);
  document.getElementById("reading-float").innerHTML = floatReading;
}, (errorObject) => {
  console.log('The read failed: ' + errorObject.name);
});

// databaseInt.on('value', (snapshot) => {
//   intReading = snapshot.val();
//   console.log(intReading);
//   document.getElementById("reading-int").innerHTML = intReading;
// }, (errorObject) => {
//   console.log('The read failed: ' + errorObject.name);
// });

const dbRef = database.ref();
console.log('database root ref: ', dbRef)
dbRef.child("test").child("int").get().then((snapshot) => {
  if (snapshot.exists()) {
    intReading = snapshot.val();
    console.log(intReading);
    document.getElementById("reading-int").innerHTML = intReading;
  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
  console.log('in catch!')
});