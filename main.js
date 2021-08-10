// Initialize Firebase (ADD YOUR OWN DATA)
// var config = {
//   apiKey: "xxxxx",
//   authDomain: "xxxxx",
//   databaseURL: "xxxxx",
//   projectId: "xxxxx",
//   storageBucket: "xxxxx",
//   messagingSenderId: "xxxxx"
// };
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyBEOKxdIXjneUVeL84upFHSKyKEQxPrR_I",
  authDomain: "skdemocontact.firebaseapp.com",
  projectId: "skdemocontact",
  storageBucket: "skdemocontact.appspot.com",
  messagingSenderId: "549937671672",
  appId: "1:549937671672:web:0d9838af88cc830e2b3a0d",
  measurementId: "G-YQM998Y3LC",
  databaseURL: "https://skdemocontact-default-rtdb.asia-southeast1.firebasedatabase.app"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

//firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var company = getInputVal('company');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, company, email, phone, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company:company,
    email:email,
    phone:phone,
    message:message
  });
}