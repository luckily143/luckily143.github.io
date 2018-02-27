var id = document.getElementById("id");
var lname = document.getElementById("lname");
var gname = document.getElementById("gname");
var mname = document.getElementById("mname");
var age = document.getElementById("age");
var submitbtn = document.getElementById("submitbtn");

function submitClick(){

  var idtext = id.value;
  var lnametext = lname.value;
  var gnametext = gname.value;
  var mnametext = mname.value;
  var agetext = age.value;

  var firebaseRef = firebase.database().ref("patient").child(idtext);
    firebaseRef.child("lname").set(lnametext);
    firebaseRef.child("gname").set(gnametext);
    firebaseRef.child("mname").set(mnametext);
    firebaseRef.child("age").set(agetext);

}
