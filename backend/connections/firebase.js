import * as admin from 'firebase-admin';

admin.initializeApp(
  credential: admin.credential.applicationDefault(),
  databaseURL: 'https://tt3-7-30668-default-rtdb.asia-southeast1.firebasedatabase.app/'
);

export default admin