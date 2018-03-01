var prioritynumber = document.getElementById("prioritynumber");
var lname = document.getElementById("lname");
var gname = document.getElementById("gname");
var mname = document.getElementById("mname");
var contactnumber = document.getElementById("contactnumber");
var searchcasenumber = document.getElementById('searchcasenumber');
var searchbtn = document.getElementById('searchbtn');
var submitbtn = document.getElementById("addbtn");
var editbtn = document.getElementById("editingbtn");
var deletebtn = document.getElementById("deletingbtn");

editbtn = document.getElementById("editingbtn").disabled = true;
deletebtn = document.getElementById("deletingbtn").disabled = true;
addbtn = document.getElementById("addbtn").disabled = false;

var today = new Date();
var todmon;

var day = localStorage.day;
var month = localStorage.month;
var yr = localStorage.yr;
var tod = localStorage.tod;
var m;


if(month == 1){
  todmon = "January";
    m = "Jan";
}
if(month == 2){
  todmon = "February";
  m = "Feb";
}
if(month == 3){
  todmon = "March";
    m = "Mar";
}
if(month == 4){
  todmon = "April";
    m = "Apr";
}
if(month == 5){
  todmon = "May";
    m = "May";
}

  document.getElementById("day").innerHTML = day;
  document.getElementById("month").innerHTML = todmon;


  var newRef = firebase.database().ref();
  var a = newRef.child("appointment");
  var rootRef = a.child(month);
  var dayfb = rootRef.child(day);
  dayfb.on("child_added",snap =>{

    var prioritynumber= snap.child("prioritynumber").val();
    var lname= snap.child("lname").val();
    var gname= snap.child("gname").val();
    var mname= snap.child("mname").val();
    var contactnumber= snap.child("contactnumber").val();





  //retrieveing with table
   var table = document.getElementById("records");

      var row = table.insertRow(1);

      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      var cell5 = row.insertCell(4);

      cell1.innerHTML = prioritynumber;
      cell2.innerHTML = lname;
      cell3.innerHTML = gname;
      cell4.innerHTML = mname;
      cell5.innerHTML = contactnumber;


      cell1.setAttribute('style', 'text-align: center;');
      cell2.setAttribute('style', 'text-align: center;');
      cell3.setAttribute('style', 'text-align: center;');
      cell4.setAttribute('style', 'text-align: center;');
      cell5.setAttribute('style', 'text-align: center;');

      sortTable();
      //selectedindex lol
      var rIndex, table = document.getElementById("records");
      for(var i = 1; i < table.rows.length; i++)
      {
          table.rows[i].onclick = function()
          {
              rIndex = this.rowIndex;
             console.log(rIndex);



           document.getElementById("searchcasenumber").value = this.cells[0].innerHTML;
               searcfunction();
               addbtn = document.getElementById("addbtn").disabled = true;
               editbtn = document.getElementById("editingbtn").disabled = false;
               deletebtn = document.getElementById("deletingbtn").disabled = false;

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

//adding part lol
function submitClick(){

  var prioritynumbertext = prioritynumber.value;
  var lnametext = lname.value;
  var gnametext = gname.value;
  var mnametext = mname.value;
  var contactnumbertext = contactnumber.value;

  var a = firebase.database().ref();
  var n = a.child("appointment");
  var b = n.child(month);
  var c = b.child(day);
  var d = c.child(prioritynumbertext);
  d.on("value",snap =>{
    if(snap.val() != null){
    }else{

          var bb = firebase.database().ref();
            var nn = bb.child("appointments");
          var nbn = nn.child(month+day+prioritynumbertext);
            nbn.child("prioritynumber").set(prioritynumbertext);
            nbn.child("date").set(tod+", "+m+"-"+ day+"-"+yr);
            nbn.child("lname").set(lnametext);
            nbn.child("gname").set(gnametext);
            nbn.child("mname").set(mnametext);
            nbn.child("contactnumber").set(contactnumbertext);


      var bases = firebase.database().ref();
        var n = bases.child("appointment");
      var newbase = n.child(month);
      var firebaseRef = newbase.child(day);
      var lnamefb = firebaseRef.child(prioritynumbertext);
        lnamefb.child("prioritynumber").set(prioritynumbertext);
        lnamefb.child("date").set(tod+", "+m+"-"+ day+"-"+yr);
        lnamefb.child("lname").set(lnametext);
        lnamefb.child("gname").set(gnametext);
        lnamefb.child("mname").set(mnametext);
        lnamefb.child("contactnumber").set(contactnumbertext);



    //clearing textfields
    document.getElementById("prioritynumber").value="";
    document.getElementById("lname").value="";
    document.getElementById("gname").value="";
    document.getElementById("mname").value="";
     document.getElementById("contactnumber").value="";

    location.reload();

    alert("Successfully Added");
    }
});






}


//function shit
function searcfunction(){


    var searchcasenumbertext = searchcasenumber.value;


    var searchRef = firebase.database().ref();
    var n = searchRef.child("appointment");
    var dataRef = n.child(month);
    var childRef = dataRef.child(day);
    var namese = childRef.child(searchcasenumbertext);
    namese.on("value",snap =>{

      var prioritynumbers= snap.child("prioritynumber").val();
      var lnames= snap.child("lname").val();
      var gnames= snap.child("gname").val();
      var mnames= snap.child("mname").val();
      var contactnumbers = snap.child("contactnumber").val();


      if(casenumbers = searchcasenumbertext){

        prioritynumber.value = prioritynumbers;
         lname.value = lnames;
         gname.value = gnames;
         mname.value = mnames;
         contactnumber.value =contactnumbers;

      }
      if(casenumbers != searchcasenumbertext){
        alert("Error 404: Case Number Not Found");
      }
    });


    document.getElementById("searchcasenumber").value="";
     document.getElementById("prioritynumber").disabled = true;
}


//Edit Codes
function editClick(){

var prioritynumbertext = prioritynumber.value;
var lnametext = lname.value;
var gnametext = gname.value;
var mnametext = mname.value;
var contactnumbertext = contactnumber.value;


var bb = firebase.database().ref();
  var nn = bb.child("appointments");
var nbn = nn.child(month+day+prioritynumbertext);

  nbn.child("prioritynumber").set(prioritynumbertext);
  nbn.child("date").set(tod+", "+m+"-"+ day+"-"+yr);
  nbn.child("lname").set(lnametext);
  nbn.child("gname").set(gnametext);
  nbn.child("mname").set(mnametext);
  nbn.child("contactnumber").set(contactnumbertext);

var desertRef = firebase.database().ref();
var n = desertRef.child("appointment");
var landRef = n.child(month);
var dayst = landRef.child(day);
var firebaseRef = dayst.child(prioritynumbertext);




  firebaseRef.child("prioritynumber").set(prioritynumbertext);
  firebaseRef.child("lname").set(lnametext);
  firebaseRef.child("gname").set(gnametext);
  firebaseRef.child("mname").set(mnametext);
  firebaseRef.child("contactnumber").set(contactnumbertext);

document.getElementById("prioritynumber").value="";
document.getElementById("lname").value="";
document.getElementById("gname").value="";
document.getElementById("mname").value="";
document.getElementById("contactnumber").value="";

document.getElementById("prioritynumber").disabled = false;

alert("Successfully Edited Records");
location.reload();
}


//delete part
function deleteClick(){

  var prioritynumbertext = prioritynumber.value;

  var bb = firebase.database().ref();
    var nn = bb.child("appointments");
  var nbn = nn.child(month+day+prioritynumbertext).remove();


  var desertRef = firebase.database().ref();
  var n = desertRef.child("appointment");
  var landRef = n.child(month);
  var dayst = landRef.child(day);
  var newRef = dayst.child(prioritynumbertext).remove();

document.getElementById("prioritynumber").value="";
document.getElementById("lname").value="";
document.getElementById("gname").value="";
document.getElementById("mname").value="";
document.getElementById("contactnumber").value="";


document.getElementById("prioritynumber").disabled = false;
location.reload();
}

function clearClick(){

    document.getElementById("prioritynumber").value="";
  document.getElementById("lname").value="";
  document.getElementById("gname").value="";
  document.getElementById("mname").value="";
  document.getElementById("contactnumber").value="";


  document.getElementById("prioritynumber").disabled = false;
  editbtn = document.getElementById("editingbtn").disabled = true;
  deletebtn = document.getElementById("deletingbtn").disabled = true;
  addbtn = document.getElementById("addbtn").disabled = false;

}
