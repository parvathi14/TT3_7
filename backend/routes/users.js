var express = require("express");
var router = express.Router();
const admin = require("firebase-admin");

const serviceAccount = require("../service-account-file.json");

var firebase = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL:
    "https://tt3-7-30668-default-rtdb.asia-southeast1.firebasedatabase.app/",
});

var firestore = firebase.firestore();
var db = admin.database();

//Create user
router.get("/create", async function (req, res, next) {
  var email = req.body.email;
  var password = req.body.password;
  var data = req.body;
  if (email && password) {
    var user = await admin
      .auth()
      .createUser({
        email,
        password,
      })
      .catch((error) => {
        res.status(400).send("Error creating user:" + error);
      });

    var write = await firestore.collection("users").doc().set(data);
    console.log(write);
    console.log(user);
    return res.send(user);
  } else {
    res.send("Problem with creating user!");
  }
});

//Sign in user
router.get("/login", async function (req, res, next) {
  var email = req.body.email.toString();
  var password = req.body.password.toString();
  if (email && password) {
    var user = await admin
      .auth()
      .getUserByEmail(String(email))
      .then((userRecord) => {
        var userUid = userRecord.uid;
        var token = admin
          .auth()
          .createCustomToken(userUid)
          .then((customToken) => {
            // Send token back to client
            res.status(200).send({
              token: "Bearer " + customToken,
              tokenValidThrough: userRecord.tokensValidAfterTime,
            });
          })
          .catch((error) => {
            console.log("Error creating custom token:", error);
          });
      })
      .catch((error) => {
        console.log(error);
        return res.status(400).send("Error: user not found");
      });
  } else {
    res.send("Please specify email & password to login!");
  }
});

module.exports = router;