// Complete Project Details at: https://RandomNerdTutorials.com/

// Database Paths
var dataFloatPath = 'test/float';
var dataIntPath = 'test/int';
var btnAPath='BtnA';
var btnBPath='BtnB';
var btnCPath='BtnC';

// Get a database reference 
const databaseFloat = database.ref(dataFloatPath);
const databaseInt = database.ref(dataIntPath);
const databaseBtnA=database.ref(btnAPath);
const databaseBtnB=database.ref(btnBPath);
const databaseBtnC=database.ref(btnCPath);

// Variables to save database current values
var floatReading;
var intReading;
var btnAReading;
var btnBReading;
var btnCReading;

// Attach an asynchronous callback to read the data
databaseFloat.on('value', (snapshot) => {
  floatReading = snapshot.val();
  console.log(floatReading);
  document.getElementById("reading-float").innerHTML = floatReading;
}, (errorObject) => {
  console.log('The read failed: ' + errorObject);
});

databaseInt.on('value', (snapshot) => {
  intReading = snapshot.val();
  console.log(intReading);
  document.getElementById("reading-int").innerHTML = intReading;
}, (errorObject) => {
  console.log('The read failed: ' + errorObject);
});

databaseBtnA.on('value', (snapshot) => {
  btnAReading = snapshot.val();
  console.log(btnAReading);
  document.getElementById("reading-btnA").innerHTML = btnAReading;
}, (errorObject) => {
  console.log('The read failed: ' + errorObject);
});
databaseBtnB.on('value', (snapshot) => {
  btnBReading = snapshot.val();
  console.log(btnBReading);
  document.getElementById("reading-btnB").innerHTML = btnBReading;
}, (errorObject) => {
  console.log('The read failed: ' + errorObject);
});
databaseBtnC.on('value', (snapshot) => {
  btnCReading = snapshot.val();
  console.log(btnCReading);
  document.getElementById("reading-btnC").innerHTML = btnCReading;
}, (errorObject) => {
  console.log('The read failed: ' + errorObject);
});