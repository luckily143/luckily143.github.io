var changepassbtn = document.getElementById('chpbtn');
var newp = document.getElementById('newp');
var confirmp = document.getElementById('confirmp');
var username = document.getElementById('usern');
var password = document.getElementById('passw');
var currentpassword = document.getElementById('currentpass');
var btnLogin = document.getElementById('btnLogin');
var btnSave = document.getElementById('btnSave');
var btnfp = document.getElementById('fpbtn');
var fpm = document.getElementById('fpm');




function okopedited(){
  document.getElementById("edited").style.display = "none";
  document.getElementsByClassName('login-page').style.display = "block";
}
function okopdeleted(){
  document.getElementById("deleted").style.display = "none";
  document.getElementsByClassName('login-page').style.display = "block";

}
function okopadded(){
  document.getElementById("added").style.display = "none";
  document.getElementsByClassName('login-page').style.display = "block";

}
function okopalready(){
  document.getElementById("already").style.display = "none";
  document.getElementsByClassName('login-page').style.display = "block";
}

document.getElementById("fpm").style.display = "none";



btnfp.addEventListener('click',clickfp);
function clickfp(){
document.getElementById("fpm").style.display = "block";
}

var user = "vmpres";
var passwords;

var desertRef = firebase.database().ref();
var landRef = desertRef.child("Password");
landRef.on("value",snap =>{

  var pass= snap.child("pass").val();
  passwords = pass;
});

btnSave.addEventListener('click',clickSave);
function clickSave(){


  var currentpval = currentpassword.value;
  var newpval = newp.value;
  var confirmpval = confirmp.value;


if(currentpval !== passwords){

  document.getElementById("currentpass").value="";
  document.getElementById("newp").value="";
  document.getElementById("confirmp").value="";
  document.getElementsByClassName('login-page').style.display = "none";
  document.getElementById("deleted").style.display = "block";
}else{
  if(newpval !== "" && confirmpval !== ""){

    if(newpval == confirmpval){
      var bases = firebase.database().ref();
      var newbase = bases.child("Password");
        newbase.child("pass").set(newpval);

        document.getElementById("currentpass").value="";
        document.getElementById("newp").value="";
        document.getElementById("confirmp").value="";

        document.getElementById("loginfrm").style.display = "block";
        document.getElementById("chpfrm").style.display = "none";
    }else{
      document.getElementById("currentpass").value="";
      document.getElementById("newp").value="";
      document.getElementById("confirmp").value="";
      document.getElementsByClassName('login-page').style.display = "none";
      document.getElementById("added").style.display = "block";
    }

  }else{
    document.getElementById("edited").style.display = "block";
  }
}




}

btnLogin.addEventListener('click',clickLogin);
function clickLogin(){
  var usernameval = username.value;
  var passwordval = password.value;
if(usernameval == user && passwordval == passwords){
window.location = "HomePage.html";
}else{

  document.getElementById("usern").value="";
  document.getElementById("passw").value="";
  document.getElementsByClassName('login-page').style.display = "none";
    document.getElementById("already").style.display = "block";
}


}


changepassbtn.addEventListener('click',chpclick);
function chpclick(){
document.getElementById("loginfrm").style.display = "none";
document.getElementById("chpfrm").style.display = "block";
}
