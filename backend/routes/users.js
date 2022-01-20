var express = require("express");
var router = express.Router();

const admin = require("firebase-admin");

const serviceAccount = require("../service-account-file.json");

var defaultApp = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL:
    "https://tt3-7-30668-default-rtdb.asia-southeast1.firebasedatabase.app/",
});

console.log(defaultApp);
/* GET users listing. */
router.get("/create", function (req, res, next) {
  console.log("working");
  console.log(req);
  console.log(req.body.email);
  console.log(req.body.password);
  var email = req.body.email;
  var password = req.body.password;
  if (req.body.email & req.body.password) {
    admin
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log("ERROR");
        console.log(errorCode, errorMessage);
      });
    res.send("User is created!");
  } else {
    res.send("Problem with creating user!");
  }
});

// createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     const user = userCredential.user;
//     return user;
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     return errorCode + errorMessage;
//   });

// signInWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//   });

// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     // User is signed in, see docs for a list of available properties
//     // https://firebase.google.com/docs/reference/js/firebase.User
//     const uid = user.uid;
//     // ...
//   } else {
//     // User is signed out
//     // ...
//   }
// });

module.exports = router;