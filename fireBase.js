var fireBase = fireBase || firebase;
var hasInit = false;
var config = {
  apiKey: "AIzaSyBeLVGozYBjbNQufEM_hqYOsqMLiTm0Aro",
  authDomain: "charming-mile-358508.firebaseapp.com",
  databaseURL: "https://charming-mile-358508-default-rtdb.firebaseio.com",
  projectId: "charming-mile-358508",
  storageBucket: "charming-mile-358508.appspot.com",
  messagingSenderId: "258795665699",
  appId: "1:258795665699:web:e5334005c6ba5516adf496",
  measurementId: "G-THM5MG5TWE"

  };
if(!hasInit){
    firebase.initializeApp(config);
    hasInit = true;
}


