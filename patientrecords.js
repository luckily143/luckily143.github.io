//variable declaration
var id = document.getElementById("id");
var lname = document.getElementById("lname");
var fname = document.getElementById("fname");
var mname = document.getElementById("mname");
var age = document.getElementById("age");
var gender = document.getElementById("gender");
var contactnumber = document.getElementById("contactnumber");
var bday = document.getElementById("bday");
var address = document.getElementById("address");
var fathername = document.getElementById("fathername");
var mothername = document.getElementById("mothername");
var dr = document.getElementById("dr");
var submitbtn = document.getElementById("addbtn");
var editbtn = document.getElementById("editingbtn");
var deletebtn = document.getElementById("deletingbtn");
var searchbtn = document.getElementById('searchbtn');
var searchcasenumber = document.getElementById('searchcasenumber');
var output = document.getElementById('output');
var weight = document.getElementById("weight");
var heightcm = document.getElementById("heightcm");
var temperature = document.getElementById("temperature");
document.getElementById("age").disabled = true;
document.getElementById("dr").disabled = true;
editbtn = document.getElementById("editingbtn").disabled = true;
deletebtn = document.getElementById("deletingbtn").disabled = true;
addbtn = document.getElementById("addbtn").disabled = false;
document.getElementById("linktocam").disabled = true;
function linktocam(){
window.location = "CaptureImage.html"
}



var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1;
var yyyy = today.getFullYear();




document.getElementById("dr").value = dd +"/"+mm+"/"+yyyy;


var openFile = function(event) {
  var input = event.target;

  var reader = new FileReader();
  reader.onload = function(){
    var dataURL = reader.result;
    var output = document.getElementById('output');
    output.src = dataURL;
    document.getElementById("output").style.display='block';


  };
  reader.readAsDataURL(input.files[0]);
};

//Retrieve all Codes.. Trying Lol
var newRef = firebase.database().ref();
var rootRef = newRef.child("patient");
rootRef.on("child_added",snap =>{

  var casenumber = snap.child("casenumber").val();
  var lname= snap.child("lname").val();
    var fname= snap.child("fname").val();
      var mname= snap.child("mname").val();
        var age= snap.child("age").val();
          var gender= snap.child("gender").val();
            var contactnumber= snap.child("contactnumber").val();




//retrieveing with table
 var table = document.getElementById("records");

    var row = table.insertRow(1);

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);

    cell1.innerHTML = casenumber;
    cell2.innerHTML = lname;
    cell3.innerHTML = fname;
    cell4.innerHTML = mname;
    cell5.innerHTML = age;
    cell6.innerHTML = gender;
    cell7.innerHTML = contactnumber;


    cell1.setAttribute('style', 'text-align: center;');
    cell2.setAttribute('style', 'text-align: center;');
    cell3.setAttribute('style', 'text-align: center;');
    cell4.setAttribute('style', 'text-align: center;');
    cell5.setAttribute('style', 'text-align: center;');
    cell6.setAttribute('style', 'text-align: center;');
    cell7.setAttribute('style', 'text-align: center;');

    sortTable();


    var  rIndex, table = document.getElementById("records");
    for(var i = 1; i < table.rows.length; i++)
    {

        table.rows[i].onclick = function()
        {
          ditbtn = document.getElementById("editingbtn").disabled = false;
          deletebtn = document.getElementById("deletingbtn").disabled = false;
          addbtn = document.getElementById("addbtn").disabled = true;
          document.getElementById("linktocam").disabled = false;
            rIndex = this.rowIndex;
         document.getElementById("searchcasenumber").value = this.cells[0].innerHTML;
             searcfunction();


        };
    }

});
function sortTable() {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("records");
  switching = true;
  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.getElementsByTagName("TR");
    /*Loop through all table rows (except the
    first, which contains table headers):*/
    for (i = 1; i < (rows.length - 1); i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
      one from current row and one from the next:*/
      x = rows[i].getElementsByTagName("TD")[0];
      y = rows[i + 1].getElementsByTagName("TD")[0];
      //check if the two rows should switch place:
      if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
        //if so, mark as a switch and break the loop:
        shouldSwitch= true;
        break;
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}

function override(){
  var idtext = id.value;

  var a = firebase.database().ref();
  var b = a.child("patient");
  var c = b.child(idtext);
  c.on("value",snap =>{
    if(snap.child("casenumber").val() != null){
      alert("exists");
    }
      });
}
// Add Codes
function submitClick(){


  var idtext = id.value;
  var lnametext = lname.value;
  var fnametext = fname.value;
  var mnametext = mname.value;

  var gendertext = gender.value;
  var contactnumbertext = contactnumber.value;
  var bdaytext = bday.value;
  var addresstext = address.value;
  var fathernametext = fathername.value;
  var mothernametext = mothername.value;
  var weighttext = weight.value;
  var heightcmtext = heightcm.value;
  var temperaturetext = temperature.value;
  var drtext = dr.value;

  var d1 = new Date(); //"now"
  var d2 = new Date(bdaytext)  // some date
  var diff = Math.abs((d1-d2) / 31536000000 );  // difference in milliseconds

  var intvalue = Math.floor(diff);
  document.getElementById("age").value = intvalue;


  var agetext = age.value;

  var a = firebase.database().ref();
  var b = a.child("patient");
  var c = b.child(idtext);
  c.on("value",snap =>{
    if(snap.child("casenumber").val() != null){
      alert("Patient Already Exist");
      document.getElementById("id").value="";
    document.getElementById("lname").value="";
    document.getElementById("fname").value="";
    document.getElementById("mname").value="";
    document.getElementById("age").value="";
     document.getElementById("gender").value="";
     document.getElementById("contactnumber").value="";
    document.getElementById("bday").value="";
    document.getElementById("address").value="";
    document.getElementById("fathername").value="";
    document.getElementById("mothername").value="";
    document.getElementById("heightcm").value="";
    document.getElementById("weight").value="";
    document.getElementById("temperature").value="";
    document.getElementById("dr").value = dd +"/"+mm+"/"+yyyy;
    }else{
      var bases = firebase.database().ref();
      var newbase = bases.child("patient");
      var firebaseRef = newbase.child(idtext);

        firebaseRef.child("casenumber").set(idtext);
        firebaseRef.child("lname").set(lnametext);
        firebaseRef.child("fname").set(fnametext);
        firebaseRef.child("mname").set(mnametext);
        firebaseRef.child("age").set(agetext);
        firebaseRef.child("gender").set(gendertext);
        firebaseRef.child("contactnumber").set(contactnumbertext);
        firebaseRef.child("bday").set(bdaytext);
        firebaseRef.child("address").set(addresstext);
        firebaseRef.child("fathername").set(fathernametext);
        firebaseRef.child("mothername").set(mothernametext);
        firebaseRef.child("heightcm").set(heightcmtext);
        firebaseRef.child("weight").set(weighttext);
        firebaseRef.child("temperature").set(temperaturetext);
        firebaseRef.child("dr").set(drtext);
        firebaseRef.child("note").set("");
    //clearing textfields

      document.getElementById("id").value="";
    document.getElementById("lname").value="";
    document.getElementById("fname").value="";
    document.getElementById("mname").value="";
    document.getElementById("age").value="";
     document.getElementById("gender").value="";
     document.getElementById("contactnumber").value="";
    document.getElementById("bday").value="";
    document.getElementById("address").value="";
    document.getElementById("fathername").value="";
    document.getElementById("mothername").value="";
    document.getElementById("heightcm").value="";
    document.getElementById("weight").value="";
    document.getElementById("temperature").value="";
    document.getElementById("dr").value = dd +"/"+mm+"/"+yyyy;
    location.reload();

    alert("Successfully Added");
    }
      });





}


//Retrieve . function as Search .. Value to put in textfields...
searchbtn.addEventListener('click', searcfunction);
function searcfunction(){


    var searchcasenumbertext = searchcasenumber.value;

    var searchRef = firebase.database().ref();
    var dataRef = searchRef.child("patient");
    var childRef = dataRef.child(searchcasenumbertext);
    childRef.on("value",snap =>{

      var casenumbers = snap.child("casenumber").val();
      var lnames= snap.child("lname").val();
      var fnames= snap.child("fname").val();
      var mnames= snap.child("mname").val();
      var ages= snap.child("age").val();
      var genders= snap.child("gender").val();
      var contactnumbers = snap.child("contactnumber").val();
      var bdays = snap.child("bday").val();
      var addresss = snap.child("address").val();
      var fathernames = snap.child("fathername").val();
      var mothernames = snap.child("mothername").val();
      var heightscm= snap.child("heightcm").val();
      var weights= snap.child("weight").val();
      var temperatures = snap.child("temperature").val();
      var drs = snap.child("dr").val();
      if(casenumbers = searchcasenumbertext){

          id.value = casenumbers;
         lname.value = lnames;
         fname.value = fnames;
         mname.value = mnames;
         age.value = ages;
         gender.value = genders;
         contactnumber.value =contactnumbers;
         bday.value =bdays;
         address.value = addresss;
         fathername.value = fathernames;
         mothername.value = mothernames;
         heightcm.value = heightscm;
         weight.value = weights;
         temperature.value = temperatures;
         dr.value = drs;
      }
    });
      var idtext = id.value;
    var bdaytext = bday.value;
    document.getElementById("searchcasenumber").value="";
     document.getElementById("id").disabled = true;
    var d1 = new Date(); //"now"
    var d2 = new Date(bdaytext)  // some date
    var diff = Math.abs((d1-d2) / 31536000000 );  // difference in milliseconds

    var intvalue = Math.floor(diff);
    document.getElementById("age").value = intvalue;
    var agetext = age.value;
    var bases = firebase.database().ref();
    var newbase = bases.child("patient");
    var firebaseRef = newbase.child(idtext);

      firebaseRef.child("age").set(agetext);




}



//Delete records
function deleteClick(){

  var idtext = id.value;
  var desertRef = firebase.database().ref();
  var landRef = desertRef.child("patient");
  var newRef = landRef.child(idtext).remove();

clearClick();
location.reload();
}





//Edit Codes
function editClick(){
var idtext = id.value;
var lnametext = lname.value;
var fnametext = fname.value;
var mnametext = mname.value;

var gendertext = gender.value;
var contactnumbertext = contactnumber.value;
var bdaytext = bday.value;
var addresstext = address.value;
var fathernametext = fathername.value;
var mothernametext = mothername.value;
var weighttext = weight.value;
var heightcmtext = heightcm.value;
var temperaturetext = temperature.value;
var drtext = dr.value;

var d1 = new Date(); //"now"
var d2 = new Date(bdaytext)  // some date
var diff = Math.abs((d1-d2) / 31536000000 );  // difference in milliseconds

var intvalue = Math.floor(diff);
document.getElementById("age").value = intvalue;
var agetext = age.value;
var bases = firebase.database().ref();
var newbase = bases.child("patient");
var firebaseRef = newbase.child(idtext);

  firebaseRef.child("age").set(agetext);

var bases = firebase.database().ref();
var newbase = bases.child("patient");
var firebaseRef = newbase.child(idtext);
  firebaseRef.child("casenumber").set(idtext);
  firebaseRef.child("lname").set(lnametext);
  firebaseRef.child("fname").set(fnametext);
  firebaseRef.child("mname").set(mnametext);
  firebaseRef.child("age").set(agetext);
  firebaseRef.child("gender").set(gendertext);
  firebaseRef.child("contactnumber").set(contactnumbertext);
  firebaseRef.child("bday").set(bdaytext);
  firebaseRef.child("address").set(addresstext);
  firebaseRef.child("fathername").set(fathernametext);
  firebaseRef.child("mothername").set(mothernametext);
  firebaseRef.child("heightcm").set(heightcmtext);
  firebaseRef.child("weight").set(weighttext);
  firebaseRef.child("temperature").set(temperaturetext);
  firebaseRef.child("dr").set(drtext);




clearClick();

alert("Successfully Edited Records");
location.reload();
}




//clearing alll textfields
function clearClick(){

  document.getElementById("id").value="";
  document.getElementById("lname").value="";
  document.getElementById("fname").value="";
  document.getElementById("mname").value="";
  document.getElementById("age").value="";
  document.getElementById("gender").value="";
  document.getElementById("contactnumber").value="";
  document.getElementById("bday").value="";
  document.getElementById("address").value="";
  document.getElementById("fathername").value="";
  document.getElementById("mothername").value="";
  document.getElementById("heightcm").value="";
  document.getElementById("weight").value="";
  document.getElementById("temperature").value="";
document.getElementById("dr").value = dd +"/"+mm+"/"+yyyy;
  document.getElementById("id").disabled = false;
  editbtn = document.getElementById("editingbtn").disabled = true;
  deletebtn = document.getElementById("deletingbtn").disabled = true;
  addbtn = document.getElementById("addbtn").disabled = false;
  document.getElementById("linktocam").disabled = true;
}
