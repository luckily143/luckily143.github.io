var halloween = document.getElementById('november');
var christmas = document.getElementById('christmas');
var febprev = document.getElementById('febprev');
var febnext = document.getElementById('febnext');
var janprev = document.getElementById('janprev');
var jannext = document.getElementById('jannext');
var novdays = document.getElementById('novdays');
var decdays = document.getElementById('decdays');


var lname = document.getElementById('lname');
var fname = document.getElementById('fname');
var mname = document.getElementById('mname');
var contactnumber = document.getElementById('contactnumber');
var prioritynumber = document.getElementById('prioritynumber');


var today = new Date();
var tt = today.getDay();
var dd = today.getDate();
var mm = today.getMonth()+1;
var yyyy = today.getFullYear();


var todmon;

if(mm == 1){
  todmon = "January";
}
if(mm == 2){
  todmon = "February";
}
if(mm == 3){
  todmon = "March";
}
if(mm == 4){
  todmon = "April";
}
if(mm == 5){
  todmon = "May";
}


document.getElementById("today").innerHTML = todmon +" "+ dd + ", "+ yyyy;

var newRef = firebase.database().ref();
  var a = newRef.child("appointment");
var rootRef = a.child(mm);
var dayfb = rootRef.child(dd);
dayfb.on("child_added",snap =>{


  var lname= snap.child("lname").val();
  var gname= snap.child("gname").val();
  var mname= snap.child("mname").val();
  var contactnumber= snap.child("contactnumber").val();





//retrieveing with table
 var table = document.getElementById("todayappointments");
 var x = table.rows.length;

    var row = table.insertRow(1);

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);

    cell1.innerHTML = x;
    cell2.innerHTML = lname;
    cell3.innerHTML = gname;
    cell4.innerHTML = mname;
    cell5.innerHTML = contactnumber;

    sortTable();

    cell1.setAttribute('style', 'text-align: center;');
    cell2.setAttribute('style', 'text-align: center;');
    cell3.setAttribute('style', 'text-align: center;');
    cell4.setAttribute('style', 'text-align: center;');
    cell5.setAttribute('style', 'text-align: center;');



});


function sortTable() {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("todayappointments");
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



if(mm == 1){
  document.getElementById("january").style.display = "block";
  document.getElementById("February").style.display = "none";
  document.getElementById("March").style.display = "none";
  document.getElementById("April").style.display = "none";
  document.getElementById("May").style.display = "none";
  document.getElementById("jan"+dd).style.background= "#99ff99";
  if(dd == 2){
    document.getElementById('jan1').disabled = true;
  }
  if(dd == 3){
    document.getElementById('jan1').disabled = true;
    document.getElementById('jan2').disabled = true;
  }
  if(dd == 4){
    document.getElementById('jan1').disabled = true;
    document.getElementById('jan2').disabled = true;
    document.getElementById('jan3').disabled = true;
  }
  if(dd == 5){
    document.getElementById('jan1').disabled = true;
    document.getElementById('jan2').disabled = true;
    document.getElementById('jan3').disabled = true;
    document.getElementById('jan4').disabled = true;
  }
  if(dd == 6){
    document.getElementById('jan1').disabled = true;
    document.getElementById('jan2').disabled = true;
    document.getElementById('jan3').disabled = true;
    document.getElementById('jan4').disabled = true;
    document.getElementById('jan5').disabled = true;
  }
  if(dd == 7){
    document.getElementById('jan1').disabled = true;
    document.getElementById('jan2').disabled = true;
    document.getElementById('jan3').disabled = true;
    document.getElementById('jan4').disabled = true;
    document.getElementById('jan5').disabled = true;
    document.getElementById('jan6').disabled = true;
  }
  if(dd == 8){
    document.getElementById('jan1').disabled = true;
    document.getElementById('jan2').disabled = true;
    document.getElementById('jan3').disabled = true;
    document.getElementById('jan4').disabled = true;
    document.getElementById('jan5').disabled = true;
    document.getElementById('jan6').disabled = true;
    document.getElementById('jan7').disabled = true;
  }
  if(dd == 9){
    document.getElementById('jan1').disabled = true;
    document.getElementById('jan2').disabled = true;
    document.getElementById('jan3').disabled = true;
    document.getElementById('jan4').disabled = true;
    document.getElementById('jan5').disabled = true;
    document.getElementById('jan6').disabled = true;
    document.getElementById('jan7').disabled = true;
    document.getElementById('jan8').disabled = true;
  }
  if(dd == 10){
    document.getElementById('jan1').disabled = true;
    document.getElementById('jan2').disabled = true;
    document.getElementById('jan3').disabled = true;
    document.getElementById('jan4').disabled = true;
    document.getElementById('jan5').disabled = true;
    document.getElementById('jan6').disabled = true;
    document.getElementById('jan7').disabled = true;
    document.getElementById('jan8').disabled = true;
    document.getElementById('jan9').disabled = true;
  }
  if(dd == 11){
    document.getElementById('jan1').disabled = true;
    document.getElementById('jan2').disabled = true;
    document.getElementById('jan3').disabled = true;
    document.getElementById('jan4').disabled = true;
    document.getElementById('jan5').disabled = true;
    document.getElementById('jan6').disabled = true;
    document.getElementById('jan7').disabled = true;
    document.getElementById('jan8').disabled = true;
    document.getElementById('jan9').disabled = true;
    document.getElementById('jan10').disabled = true;
  }
  if(dd == 12){
    document.getElementById('jan1').disabled = true;
    document.getElementById('jan2').disabled = true;
    document.getElementById('jan3').disabled = true;
    document.getElementById('jan4').disabled = true;
    document.getElementById('jan5').disabled = true;
    document.getElementById('jan6').disabled = true;
    document.getElementById('jan7').disabled = true;
    document.getElementById('jan8').disabled = true;
    document.getElementById('jan9').disabled = true;
    document.getElementById('jan10').disabled = true;
    document.getElementById('jan11').disabled = true;
  }
  if(dd == 13){
    document.getElementById('jan1').disabled = true;
    document.getElementById('jan2').disabled = true;
    document.getElementById('jan3').disabled = true;
    document.getElementById('jan4').disabled = true;
    document.getElementById('jan5').disabled = true;
    document.getElementById('jan6').disabled = true;
    document.getElementById('jan7').disabled = true;
    document.getElementById('jan8').disabled = true;
    document.getElementById('jan9').disabled = true;
    document.getElementById('jan10').disabled = true;
    document.getElementById('jan11').disabled = true;
    document.getElementById('jan12').disabled = true;
  }
  if(dd == 14){
    document.getElementById('jan1').disabled = true;
    document.getElementById('jan2').disabled = true;
    document.getElementById('jan3').disabled = true;
    document.getElementById('jan4').disabled = true;
    document.getElementById('jan5').disabled = true;
    document.getElementById('jan6').disabled = true;
    document.getElementById('jan7').disabled = true;
    document.getElementById('jan8').disabled = true;
    document.getElementById('jan9').disabled = true;
    document.getElementById('jan10').disabled = true;
    document.getElementById('jan11').disabled = true;
    document.getElementById('jan12').disabled = true;
    document.getElementById('jan13').disabled = true;
  }
  if(dd == 15){
    document.getElementById('jan1').disabled = true;
    document.getElementById('jan2').disabled = true;
    document.getElementById('jan3').disabled = true;
    document.getElementById('jan4').disabled = true;
    document.getElementById('jan5').disabled = true;
    document.getElementById('jan6').disabled = true;
    document.getElementById('jan7').disabled = true;
    document.getElementById('jan8').disabled = true;
    document.getElementById('jan9').disabled = true;
    document.getElementById('jan10').disabled = true;
    document.getElementById('jan11').disabled = true;
    document.getElementById('jan12').disabled = true;
    document.getElementById('jan13').disabled = true;
    document.getElementById('jan14').disabled = true;
  }
  if(dd == 16){
    document.getElementById('jan1').disabled = true;
    document.getElementById('jan2').disabled = true;
    document.getElementById('jan3').disabled = true;
    document.getElementById('jan4').disabled = true;
    document.getElementById('jan5').disabled = true;
    document.getElementById('jan6').disabled = true;
    document.getElementById('jan7').disabled = true;
    document.getElementById('jan8').disabled = true;
    document.getElementById('jan9').disabled = true;
    document.getElementById('jan10').disabled = true;
    document.getElementById('jan11').disabled = true;
    document.getElementById('jan12').disabled = true;
    document.getElementById('jan13').disabled = true;
    document.getElementById('jan14').disabled = true;
    document.getElementById('jan15').disabled = true;
  }
  if(dd == 17){
    document.getElementById('jan1').disabled = true;
    document.getElementById('jan2').disabled = true;
    document.getElementById('jan3').disabled = true;
    document.getElementById('jan4').disabled = true;
    document.getElementById('jan5').disabled = true;
    document.getElementById('jan6').disabled = true;
    document.getElementById('jan7').disabled = true;
    document.getElementById('jan8').disabled = true;
    document.getElementById('jan9').disabled = true;
    document.getElementById('jan10').disabled = true;
    document.getElementById('jan11').disabled = true;
    document.getElementById('jan12').disabled = true;
    document.getElementById('jan13').disabled = true;
    document.getElementById('jan14').disabled = true;
    document.getElementById('jan15').disabled = true;
    document.getElementById('jan16').disabled = true;
  }
  if(dd == 18){
    document.getElementById('jan1').disabled = true;
    document.getElementById('jan2').disabled = true;
    document.getElementById('jan3').disabled = true;
    document.getElementById('jan4').disabled = true;
    document.getElementById('jan5').disabled = true;
    document.getElementById('jan6').disabled = true;
    document.getElementById('jan7').disabled = true;
    document.getElementById('jan8').disabled = true;
    document.getElementById('jan9').disabled = true;
    document.getElementById('jan10').disabled = true;
    document.getElementById('jan11').disabled = true;
    document.getElementById('jan12').disabled = true;
    document.getElementById('jan13').disabled = true;
    document.getElementById('jan14').disabled = true;
    document.getElementById('jan15').disabled = true;
    document.getElementById('jan16').disabled = true;
    document.getElementById('jan17').disabled = true;
  }
  if(dd == 19){
    document.getElementById('jan1').disabled = true;
    document.getElementById('jan2').disabled = true;
    document.getElementById('jan3').disabled = true;
    document.getElementById('jan4').disabled = true;
    document.getElementById('jan5').disabled = true;
    document.getElementById('jan6').disabled = true;
    document.getElementById('jan7').disabled = true;
    document.getElementById('jan8').disabled = true;
    document.getElementById('jan9').disabled = true;
    document.getElementById('jan10').disabled = true;
    document.getElementById('jan11').disabled = true;
    document.getElementById('jan12').disabled = true;
    document.getElementById('jan13').disabled = true;
    document.getElementById('jan14').disabled = true;
    document.getElementById('jan15').disabled = true;
    document.getElementById('jan16').disabled = true;
    document.getElementById('jan17').disabled = true;
    document.getElementById('jan18').disabled = true;
  }
  if(dd == 20){
    document.getElementById('jan1').disabled = true;
    document.getElementById('jan2').disabled = true;
    document.getElementById('jan3').disabled = true;
    document.getElementById('jan4').disabled = true;
    document.getElementById('jan5').disabled = true;
    document.getElementById('jan6').disabled = true;
    document.getElementById('jan7').disabled = true;
    document.getElementById('jan8').disabled = true;
    document.getElementById('jan9').disabled = true;
    document.getElementById('jan10').disabled = true;
    document.getElementById('jan11').disabled = true;
    document.getElementById('jan12').disabled = true;
    document.getElementById('jan13').disabled = true;
    document.getElementById('jan14').disabled = true;
    document.getElementById('jan15').disabled = true;
    document.getElementById('jan16').disabled = true;
    document.getElementById('jan17').disabled = true;
    document.getElementById('jan18').disabled = true;
    document.getElementById('jan19').disabled = true;
  }
  if(dd == 21){
    document.getElementById('jan1').disabled = true;
    document.getElementById('jan2').disabled = true;
    document.getElementById('jan3').disabled = true;
    document.getElementById('jan4').disabled = true;
    document.getElementById('jan5').disabled = true;
    document.getElementById('jan6').disabled = true;
    document.getElementById('jan7').disabled = true;
    document.getElementById('jan8').disabled = true;
    document.getElementById('jan9').disabled = true;
    document.getElementById('jan10').disabled = true;
    document.getElementById('jan11').disabled = true;
    document.getElementById('jan12').disabled = true;
    document.getElementById('jan13').disabled = true;
    document.getElementById('jan14').disabled = true;
    document.getElementById('jan15').disabled = true;
    document.getElementById('jan16').disabled = true;
    document.getElementById('jan17').disabled = true;
    document.getElementById('jan18').disabled = true;
    document.getElementById('jan19').disabled = true;
    document.getElementById('jan20').disabled = true;
  }
  if(dd == 22){
    document.getElementById('jan1').disabled = true;
    document.getElementById('jan2').disabled = true;
    document.getElementById('jan3').disabled = true;
    document.getElementById('jan4').disabled = true;
    document.getElementById('jan5').disabled = true;
    document.getElementById('jan6').disabled = true;
    document.getElementById('jan7').disabled = true;
    document.getElementById('jan8').disabled = true;
    document.getElementById('jan9').disabled = true;
    document.getElementById('jan10').disabled = true;
    document.getElementById('jan11').disabled = true;
    document.getElementById('jan12').disabled = true;
    document.getElementById('jan13').disabled = true;
    document.getElementById('jan14').disabled = true;
    document.getElementById('jan15').disabled = true;
    document.getElementById('jan16').disabled = true;
    document.getElementById('jan17').disabled = true;
    document.getElementById('jan18').disabled = true;
    document.getElementById('jan19').disabled = true;
    document.getElementById('jan20').disabled = true;
    document.getElementById('jan21').disabled = true;
  }
  if(dd == 23){
    document.getElementById('jan1').disabled = true;
    document.getElementById('jan2').disabled = true;
    document.getElementById('jan3').disabled = true;
    document.getElementById('jan4').disabled = true;
    document.getElementById('jan5').disabled = true;
    document.getElementById('jan6').disabled = true;
    document.getElementById('jan7').disabled = true;
    document.getElementById('jan8').disabled = true;
    document.getElementById('jan9').disabled = true;
    document.getElementById('jan10').disabled = true;
    document.getElementById('jan11').disabled = true;
    document.getElementById('jan12').disabled = true;
    document.getElementById('jan13').disabled = true;
    document.getElementById('jan14').disabled = true;
    document.getElementById('jan15').disabled = true;
    document.getElementById('jan16').disabled = true;
    document.getElementById('jan17').disabled = true;
    document.getElementById('jan18').disabled = true;
    document.getElementById('jan19').disabled = true;
    document.getElementById('jan20').disabled = true;
    document.getElementById('jan21').disabled = true;
    document.getElementById('jan22').disabled = true;
  }
  if(dd == 24){
    document.getElementById('jan1').disabled = true;
    document.getElementById('jan2').disabled = true;
    document.getElementById('jan3').disabled = true;
    document.getElementById('jan4').disabled = true;
    document.getElementById('jan5').disabled = true;
    document.getElementById('jan6').disabled = true;
    document.getElementById('jan7').disabled = true;
    document.getElementById('jan8').disabled = true;
    document.getElementById('jan9').disabled = true;
    document.getElementById('jan10').disabled = true;
    document.getElementById('jan11').disabled = true;
    document.getElementById('jan12').disabled = true;
    document.getElementById('jan13').disabled = true;
    document.getElementById('jan14').disabled = true;
    document.getElementById('jan15').disabled = true;
    document.getElementById('jan16').disabled = true;
    document.getElementById('jan17').disabled = true;
    document.getElementById('jan18').disabled = true;
    document.getElementById('jan19').disabled = true;
    document.getElementById('jan20').disabled = true;
    document.getElementById('jan21').disabled = true;
    document.getElementById('jan22').disabled = true;
    document.getElementById('jan23').disabled = true;
  }
  if(dd == 25){
    document.getElementById('jan1').disabled = true;
    document.getElementById('jan2').disabled = true;
    document.getElementById('jan3').disabled = true;
    document.getElementById('jan4').disabled = true;
    document.getElementById('jan5').disabled = true;
    document.getElementById('jan6').disabled = true;
    document.getElementById('jan7').disabled = true;
    document.getElementById('jan8').disabled = true;
    document.getElementById('jan9').disabled = true;
    document.getElementById('jan10').disabled = true;
    document.getElementById('jan11').disabled = true;
    document.getElementById('jan12').disabled = true;
    document.getElementById('jan13').disabled = true;
    document.getElementById('jan14').disabled = true;
    document.getElementById('jan15').disabled = true;
    document.getElementById('jan16').disabled = true;
    document.getElementById('jan17').disabled = true;
    document.getElementById('jan18').disabled = true;
    document.getElementById('jan19').disabled = true;
    document.getElementById('jan20').disabled = true;
    document.getElementById('jan21').disabled = true;
    document.getElementById('jan22').disabled = true;
    document.getElementById('jan23').disabled = true;
    document.getElementById('jan24').disabled = true;
  }
  if(dd == 26){
    document.getElementById('jan1').disabled = true;
    document.getElementById('jan2').disabled = true;
    document.getElementById('jan3').disabled = true;
    document.getElementById('jan4').disabled = true;
    document.getElementById('jan5').disabled = true;
    document.getElementById('jan6').disabled = true;
    document.getElementById('jan7').disabled = true;
    document.getElementById('jan8').disabled = true;
    document.getElementById('jan9').disabled = true;
    document.getElementById('jan10').disabled = true;
    document.getElementById('jan11').disabled = true;
    document.getElementById('jan12').disabled = true;
    document.getElementById('jan13').disabled = true;
    document.getElementById('jan14').disabled = true;
    document.getElementById('jan15').disabled = true;
    document.getElementById('jan16').disabled = true;
    document.getElementById('jan17').disabled = true;
    document.getElementById('jan18').disabled = true;
    document.getElementById('jan19').disabled = true;
    document.getElementById('jan20').disabled = true;
    document.getElementById('jan21').disabled = true;
    document.getElementById('jan22').disabled = true;
    document.getElementById('jan23').disabled = true;
    document.getElementById('jan24').disabled = true;
    document.getElementById('jan25').disabled = true;
  }
  if(dd == 27){
    document.getElementById('jan1').disabled = true;
    document.getElementById('jan2').disabled = true;
    document.getElementById('jan3').disabled = true;
    document.getElementById('jan4').disabled = true;
    document.getElementById('jan5').disabled = true;
    document.getElementById('jan6').disabled = true;
    document.getElementById('jan7').disabled = true;
    document.getElementById('jan8').disabled = true;
    document.getElementById('jan9').disabled = true;
    document.getElementById('jan10').disabled = true;
    document.getElementById('jan11').disabled = true;
    document.getElementById('jan12').disabled = true;
    document.getElementById('jan13').disabled = true;
    document.getElementById('jan14').disabled = true;
    document.getElementById('jan15').disabled = true;
    document.getElementById('jan16').disabled = true;
    document.getElementById('jan17').disabled = true;
    document.getElementById('jan18').disabled = true;
    document.getElementById('jan19').disabled = true;
    document.getElementById('jan20').disabled = true;
    document.getElementById('jan21').disabled = true;
    document.getElementById('jan22').disabled = true;
    document.getElementById('jan23').disabled = true;
    document.getElementById('jan24').disabled = true;
    document.getElementById('jan25').disabled = true;
    document.getElementById('jan26').disabled = true;
  }
  if(dd == 28){
    document.getElementById('jan1').disabled = true;
    document.getElementById('jan2').disabled = true;
    document.getElementById('jan3').disabled = true;
    document.getElementById('jan4').disabled = true;
    document.getElementById('jan5').disabled = true;
    document.getElementById('jan6').disabled = true;
    document.getElementById('jan7').disabled = true;
    document.getElementById('jan8').disabled = true;
    document.getElementById('jan9').disabled = true;
    document.getElementById('jan10').disabled = true;
    document.getElementById('jan11').disabled = true;
    document.getElementById('jan12').disabled = true;
    document.getElementById('jan13').disabled = true;
    document.getElementById('jan14').disabled = true;
    document.getElementById('jan15').disabled = true;
    document.getElementById('jan16').disabled = true;
    document.getElementById('jan17').disabled = true;
    document.getElementById('jan18').disabled = true;
    document.getElementById('jan19').disabled = true;
    document.getElementById('jan20').disabled = true;
    document.getElementById('jan21').disabled = true;
    document.getElementById('jan22').disabled = true;
    document.getElementById('jan23').disabled = true;
    document.getElementById('jan24').disabled = true;
    document.getElementById('jan25').disabled = true;
    document.getElementById('jan26').disabled = true;
    document.getElementById('jan27').disabled = true;
  }
  if(dd == 29){

    document.getElementById('jan1').disabled = true;
    document.getElementById('jan2').disabled = true;
    document.getElementById('jan3').disabled = true;
    document.getElementById('jan4').disabled = true;
    document.getElementById('jan5').disabled = true;
    document.getElementById('jan6').disabled = true;
    document.getElementById('jan7').disabled = true;
    document.getElementById('jan8').disabled = true;
    document.getElementById('jan9').disabled = true;
    document.getElementById('jan10').disabled = true;
    document.getElementById('jan11').disabled = true;
    document.getElementById('jan12').disabled = true;
    document.getElementById('jan13').disabled = true;
    document.getElementById('jan14').disabled = true;
    document.getElementById('jan15').disabled = true;
    document.getElementById('jan16').disabled = true;
    document.getElementById('jan17').disabled = true;
    document.getElementById('jan18').disabled = true;
    document.getElementById('jan19').disabled = true;
    document.getElementById('jan20').disabled = true;
    document.getElementById('jan21').disabled = true;
    document.getElementById('jan22').disabled = true;
    document.getElementById('jan23').disabled = true;
    document.getElementById('jan24').disabled = true;
    document.getElementById('jan25').disabled = true;
    document.getElementById('jan26').disabled = true;
    document.getElementById('jan27').disabled = true;
    document.getElementById('jan28').disabled = true;
  }
  if(dd == 30){

    document.getElementById('jan1').disabled = true;
    document.getElementById('jan2').disabled = true;
    document.getElementById('jan3').disabled = true;
    document.getElementById('jan4').disabled = true;
    document.getElementById('jan5').disabled = true;
    document.getElementById('jan6').disabled = true;
    document.getElementById('jan7').disabled = true;
    document.getElementById('jan8').disabled = true;
    document.getElementById('jan9').disabled = true;
    document.getElementById('jan10').disabled = true;
    document.getElementById('jan11').disabled = true;
    document.getElementById('jan12').disabled = true;
    document.getElementById('jan13').disabled = true;
    document.getElementById('jan14').disabled = true;
    document.getElementById('jan15').disabled = true;
    document.getElementById('jan16').disabled = true;
    document.getElementById('jan17').disabled = true;
    document.getElementById('jan18').disabled = true;
    document.getElementById('jan19').disabled = true;
    document.getElementById('jan20').disabled = true;
    document.getElementById('jan21').disabled = true;
    document.getElementById('jan22').disabled = true;
    document.getElementById('jan23').disabled = true;
    document.getElementById('jan24').disabled = true;
    document.getElementById('jan25').disabled = true;
    document.getElementById('jan26').disabled = true;
    document.getElementById('jan27').disabled = true;
    document.getElementById('jan28').disabled = true;
    document.getElementById('jan30').disabled = true;
  }
  if(dd == 31){
    document.getElementById('jan1').disabled = true;
    document.getElementById('jan2').disabled = true;
    document.getElementById('jan3').disabled = true;
    document.getElementById('jan4').disabled = true;
    document.getElementById('jan5').disabled = true;
    document.getElementById('jan6').disabled = true;
    document.getElementById('jan7').disabled = true;
    document.getElementById('jan8').disabled = true;
    document.getElementById('jan9').disabled = true;
    document.getElementById('jan10').disabled = true;
    document.getElementById('jan11').disabled = true;
    document.getElementById('jan12').disabled = true;
    document.getElementById('jan13').disabled = true;
    document.getElementById('jan14').disabled = true;
    document.getElementById('jan15').disabled = true;
    document.getElementById('jan16').disabled = true;
    document.getElementById('jan17').disabled = true;
    document.getElementById('jan18').disabled = true;
    document.getElementById('jan19').disabled = true;
    document.getElementById('jan20').disabled = true;
    document.getElementById('jan21').disabled = true;
    document.getElementById('jan22').disabled = true;
    document.getElementById('jan23').disabled = true;
    document.getElementById('jan24').disabled = true;
    document.getElementById('jan25').disabled = true;
    document.getElementById('jan26').disabled = true;
    document.getElementById('jan27').disabled = true;
    document.getElementById('jan28').disabled = true;
    document.getElementById('jan30').disabled = true;
    document.getElementById('jan31').disabled = true;
  }

}


if(mm == 2){
  document.getElementById("january").style.display = "none";
  document.getElementById("February").style.display = "block";
  document.getElementById("March").style.display = "none";
  document.getElementById("April").style.display = "none";
    document.getElementById("May").style.display = "none";
  document.getElementById("febprev").style.display = "none";
  document.getElementById("feb"+dd).style.background= "#99ff99";
  if(dd == 2){
    document.getElementById('feb1').disabled = true;
  }
  if(dd == 3){
    document.getElementById('feb1').disabled = true;
    document.getElementById('feb2').disabled = true;
  }
  if(dd == 4){
    document.getElementById('feb1').disabled = true;
    document.getElementById('feb2').disabled = true;
    document.getElementById('feb3').disabled = true;
  }
  if(dd == 5){
    document.getElementById('feb1').disabled = true;
    document.getElementById('feb2').disabled = true;
    document.getElementById('feb3').disabled = true;
    document.getElementById('feb4').disabled = true;
  }
  if(dd == 6){
    document.getElementById('feb1').disabled = true;
    document.getElementById('feb2').disabled = true;
    document.getElementById('feb3').disabled = true;
    document.getElementById('feb4').disabled = true;
    document.getElementById('feb5').disabled = true;
  }
  if(dd == 7){
    document.getElementById('feb1').disabled = true;
    document.getElementById('feb2').disabled = true;
    document.getElementById('feb3').disabled = true;
    document.getElementById('feb4').disabled = true;
    document.getElementById('feb5').disabled = true;
    document.getElementById('feb6').disabled = true;
  }
  if(dd == 8){
    document.getElementById('feb1').disabled = true;
    document.getElementById('feb2').disabled = true;
    document.getElementById('feb3').disabled = true;
    document.getElementById('feb4').disabled = true;
    document.getElementById('feb5').disabled = true;
    document.getElementById('feb6').disabled = true;
    document.getElementById('feb7').disabled = true;
  }
  if(dd == 9){
    document.getElementById('feb1').disabled = true;
    document.getElementById('feb2').disabled = true;
    document.getElementById('feb3').disabled = true;
    document.getElementById('feb4').disabled = true;
    document.getElementById('feb5').disabled = true;
    document.getElementById('feb6').disabled = true;
    document.getElementById('feb7').disabled = true;
    document.getElementById('feb8').disabled = true;
  }
  if(dd == 10){
    document.getElementById('feb1').disabled = true;
    document.getElementById('feb2').disabled = true;
    document.getElementById('feb3').disabled = true;
    document.getElementById('feb4').disabled = true;
    document.getElementById('feb5').disabled = true;
    document.getElementById('feb6').disabled = true;
    document.getElementById('feb7').disabled = true;
    document.getElementById('feb8').disabled = true;
    document.getElementById('feb9').disabled = true;
  }
  if(dd == 11){
    document.getElementById('feb1').disabled = true;
    document.getElementById('feb2').disabled = true;
    document.getElementById('feb3').disabled = true;
    document.getElementById('feb4').disabled = true;
    document.getElementById('feb5').disabled = true;
    document.getElementById('feb6').disabled = true;
    document.getElementById('feb7').disabled = true;
    document.getElementById('feb8').disabled = true;
    document.getElementById('feb9').disabled = true;
    document.getElementById('feb10').disabled = true;
  }
  if(dd == 12){
    document.getElementById('feb1').disabled = true;
    document.getElementById('feb2').disabled = true;
    document.getElementById('feb3').disabled = true;
    document.getElementById('feb4').disabled = true;
    document.getElementById('feb5').disabled = true;
    document.getElementById('feb6').disabled = true;
    document.getElementById('feb7').disabled = true;
    document.getElementById('feb8').disabled = true;
    document.getElementById('feb9').disabled = true;
    document.getElementById('feb10').disabled = true;
    document.getElementById('feb11').disabled = true;
  }
  if(dd == 13){
    document.getElementById('feb1').disabled = true;
    document.getElementById('feb2').disabled = true;
    document.getElementById('feb3').disabled = true;
    document.getElementById('feb4').disabled = true;
    document.getElementById('feb5').disabled = true;
    document.getElementById('feb6').disabled = true;
    document.getElementById('feb7').disabled = true;
    document.getElementById('feb8').disabled = true;
    document.getElementById('feb9').disabled = true;
    document.getElementById('feb10').disabled = true;
    document.getElementById('feb11').disabled = true;
    document.getElementById('feb12').disabled = true;
  }
  if(dd == 14){
    document.getElementById('feb1').disabled = true;
    document.getElementById('feb2').disabled = true;
    document.getElementById('feb3').disabled = true;
    document.getElementById('feb4').disabled = true;
    document.getElementById('feb5').disabled = true;
    document.getElementById('feb6').disabled = true;
    document.getElementById('feb7').disabled = true;
    document.getElementById('feb8').disabled = true;
    document.getElementById('feb9').disabled = true;
    document.getElementById('feb10').disabled = true;
    document.getElementById('feb11').disabled = true;
    document.getElementById('feb12').disabled = true;
    document.getElementById('feb13').disabled = true;
  }
  if(dd == 15){
    document.getElementById('feb1').disabled = true;
    document.getElementById('feb2').disabled = true;
    document.getElementById('feb3').disabled = true;
    document.getElementById('feb4').disabled = true;
    document.getElementById('feb5').disabled = true;
    document.getElementById('feb6').disabled = true;
    document.getElementById('feb7').disabled = true;
    document.getElementById('feb8').disabled = true;
    document.getElementById('feb9').disabled = true;
    document.getElementById('feb10').disabled = true;
    document.getElementById('feb11').disabled = true;
    document.getElementById('feb12').disabled = true;
    document.getElementById('feb13').disabled = true;
    document.getElementById('feb14').disabled = true;
  }
  if(dd == 16){
    document.getElementById('feb1').disabled = true;
    document.getElementById('feb2').disabled = true;
    document.getElementById('feb3').disabled = true;
    document.getElementById('feb4').disabled = true;
    document.getElementById('feb5').disabled = true;
    document.getElementById('feb6').disabled = true;
    document.getElementById('feb7').disabled = true;
    document.getElementById('feb8').disabled = true;
    document.getElementById('feb9').disabled = true;
    document.getElementById('feb10').disabled = true;
    document.getElementById('feb11').disabled = true;
    document.getElementById('feb12').disabled = true;
    document.getElementById('feb13').disabled = true;
    document.getElementById('feb14').disabled = true;
    document.getElementById('feb15').disabled = true;
  }
  if(dd == 17){
    document.getElementById('feb1').disabled = true;
    document.getElementById('feb2').disabled = true;
    document.getElementById('feb3').disabled = true;
    document.getElementById('feb4').disabled = true;
    document.getElementById('feb5').disabled = true;
    document.getElementById('feb6').disabled = true;
    document.getElementById('feb7').disabled = true;
    document.getElementById('feb8').disabled = true;
    document.getElementById('feb9').disabled = true;
    document.getElementById('feb10').disabled = true;
    document.getElementById('feb11').disabled = true;
    document.getElementById('feb12').disabled = true;
    document.getElementById('feb13').disabled = true;
    document.getElementById('feb14').disabled = true;
    document.getElementById('feb15').disabled = true;
    document.getElementById('feb16').disabled = true;
  }
  if(dd == 18){
    document.getElementById('feb1').disabled = true;
    document.getElementById('feb2').disabled = true;
    document.getElementById('feb3').disabled = true;
    document.getElementById('feb4').disabled = true;
    document.getElementById('feb5').disabled = true;
    document.getElementById('feb6').disabled = true;
    document.getElementById('feb7').disabled = true;
    document.getElementById('feb8').disabled = true;
    document.getElementById('feb9').disabled = true;
    document.getElementById('feb10').disabled = true;
    document.getElementById('feb11').disabled = true;
    document.getElementById('feb12').disabled = true;
    document.getElementById('feb13').disabled = true;
    document.getElementById('feb14').disabled = true;
    document.getElementById('feb15').disabled = true;
    document.getElementById('feb16').disabled = true;
    document.getElementById('feb17').disabled = true;
  }
  if(dd == 19){
    document.getElementById('feb1').disabled = true;
    document.getElementById('feb2').disabled = true;
    document.getElementById('feb3').disabled = true;
    document.getElementById('feb4').disabled = true;
    document.getElementById('feb5').disabled = true;
    document.getElementById('feb6').disabled = true;
    document.getElementById('feb7').disabled = true;
    document.getElementById('feb8').disabled = true;
    document.getElementById('feb9').disabled = true;
    document.getElementById('feb10').disabled = true;
    document.getElementById('feb11').disabled = true;
    document.getElementById('feb12').disabled = true;
    document.getElementById('feb13').disabled = true;
    document.getElementById('feb14').disabled = true;
    document.getElementById('feb15').disabled = true;
    document.getElementById('feb16').disabled = true;
    document.getElementById('feb17').disabled = true;
    document.getElementById('feb18').disabled = true;
  }
  if(dd == 20){
    document.getElementById('feb1').disabled = true;
    document.getElementById('feb2').disabled = true;
    document.getElementById('feb3').disabled = true;
    document.getElementById('feb4').disabled = true;
    document.getElementById('feb5').disabled = true;
    document.getElementById('feb6').disabled = true;
    document.getElementById('feb7').disabled = true;
    document.getElementById('feb8').disabled = true;
    document.getElementById('feb9').disabled = true;
    document.getElementById('feb10').disabled = true;
    document.getElementById('feb11').disabled = true;
    document.getElementById('feb12').disabled = true;
    document.getElementById('feb13').disabled = true;
    document.getElementById('feb14').disabled = true;
    document.getElementById('feb15').disabled = true;
    document.getElementById('feb16').disabled = true;
    document.getElementById('feb17').disabled = true;
    document.getElementById('feb18').disabled = true;
    document.getElementById('feb19').disabled = true;
  }
  if(dd == 21){
    document.getElementById('feb1').disabled = true;
    document.getElementById('feb2').disabled = true;
    document.getElementById('feb3').disabled = true;
    document.getElementById('feb4').disabled = true;
    document.getElementById('feb5').disabled = true;
    document.getElementById('feb6').disabled = true;
    document.getElementById('feb7').disabled = true;
    document.getElementById('feb8').disabled = true;
    document.getElementById('feb9').disabled = true;
    document.getElementById('feb10').disabled = true;
    document.getElementById('feb11').disabled = true;
    document.getElementById('feb12').disabled = true;
    document.getElementById('feb13').disabled = true;
    document.getElementById('feb14').disabled = true;
    document.getElementById('feb15').disabled = true;
    document.getElementById('feb16').disabled = true;
    document.getElementById('feb17').disabled = true;
    document.getElementById('feb18').disabled = true;
    document.getElementById('feb19').disabled = true;
    document.getElementById('feb20').disabled = true;
  }
  if(dd == 22){
    document.getElementById('feb1').disabled = true;
    document.getElementById('feb2').disabled = true;
    document.getElementById('feb3').disabled = true;
    document.getElementById('feb4').disabled = true;
    document.getElementById('feb5').disabled = true;
    document.getElementById('feb6').disabled = true;
    document.getElementById('feb7').disabled = true;
    document.getElementById('feb8').disabled = true;
    document.getElementById('feb9').disabled = true;
    document.getElementById('feb10').disabled = true;
    document.getElementById('feb11').disabled = true;
    document.getElementById('feb12').disabled = true;
    document.getElementById('feb13').disabled = true;
    document.getElementById('feb14').disabled = true;
    document.getElementById('feb15').disabled = true;
    document.getElementById('feb16').disabled = true;
    document.getElementById('feb17').disabled = true;
    document.getElementById('feb18').disabled = true;
    document.getElementById('feb19').disabled = true;
    document.getElementById('feb20').disabled = true;
    document.getElementById('feb21').disabled = true;
  }
  if(dd == 23){
    document.getElementById('feb1').disabled = true;
    document.getElementById('feb2').disabled = true;
    document.getElementById('feb3').disabled = true;
    document.getElementById('feb4').disabled = true;
    document.getElementById('feb5').disabled = true;
    document.getElementById('feb6').disabled = true;
    document.getElementById('feb7').disabled = true;
    document.getElementById('feb8').disabled = true;
    document.getElementById('feb9').disabled = true;
    document.getElementById('feb10').disabled = true;
    document.getElementById('feb11').disabled = true;
    document.getElementById('feb12').disabled = true;
    document.getElementById('feb13').disabled = true;
    document.getElementById('feb14').disabled = true;
    document.getElementById('feb15').disabled = true;
    document.getElementById('feb16').disabled = true;
    document.getElementById('feb17').disabled = true;
    document.getElementById('feb18').disabled = true;
    document.getElementById('feb19').disabled = true;
    document.getElementById('feb20').disabled = true;
    document.getElementById('feb21').disabled = true;
    document.getElementById('feb22').disabled = true;
  }
  if(dd == 24){
    document.getElementById('feb1').disabled = true;
    document.getElementById('feb2').disabled = true;
    document.getElementById('feb3').disabled = true;
    document.getElementById('feb4').disabled = true;
    document.getElementById('feb5').disabled = true;
    document.getElementById('feb6').disabled = true;
    document.getElementById('feb7').disabled = true;
    document.getElementById('feb8').disabled = true;
    document.getElementById('feb9').disabled = true;
    document.getElementById('feb10').disabled = true;
    document.getElementById('feb11').disabled = true;
    document.getElementById('feb12').disabled = true;
    document.getElementById('feb13').disabled = true;
    document.getElementById('feb14').disabled = true;
    document.getElementById('feb15').disabled = true;
    document.getElementById('feb16').disabled = true;
    document.getElementById('feb17').disabled = true;
    document.getElementById('feb18').disabled = true;
    document.getElementById('feb19').disabled = true;
    document.getElementById('feb20').disabled = true;
    document.getElementById('feb21').disabled = true;
    document.getElementById('feb22').disabled = true;
    document.getElementById('feb23').disabled = true;
  }
  if(dd == 25){
    document.getElementById('feb1').disabled = true;
    document.getElementById('feb2').disabled = true;
    document.getElementById('feb3').disabled = true;
    document.getElementById('feb4').disabled = true;
    document.getElementById('feb5').disabled = true;
    document.getElementById('feb6').disabled = true;
    document.getElementById('feb7').disabled = true;
    document.getElementById('feb8').disabled = true;
    document.getElementById('feb9').disabled = true;
    document.getElementById('feb10').disabled = true;
    document.getElementById('feb11').disabled = true;
    document.getElementById('feb12').disabled = true;
    document.getElementById('feb13').disabled = true;
    document.getElementById('feb14').disabled = true;
    document.getElementById('feb15').disabled = true;
    document.getElementById('feb16').disabled = true;
    document.getElementById('feb17').disabled = true;
    document.getElementById('feb18').disabled = true;
    document.getElementById('feb19').disabled = true;
    document.getElementById('feb20').disabled = true;
    document.getElementById('feb21').disabled = true;
    document.getElementById('feb22').disabled = true;
    document.getElementById('feb23').disabled = true;
    document.getElementById('feb24').disabled = true;
  }
  if(dd == 26){
    document.getElementById('feb1').disabled = true;
    document.getElementById('feb2').disabled = true;
    document.getElementById('feb3').disabled = true;
    document.getElementById('feb4').disabled = true;
    document.getElementById('feb5').disabled = true;
    document.getElementById('feb6').disabled = true;
    document.getElementById('feb7').disabled = true;
    document.getElementById('feb8').disabled = true;
    document.getElementById('feb9').disabled = true;
    document.getElementById('feb10').disabled = true;
    document.getElementById('feb11').disabled = true;
    document.getElementById('feb12').disabled = true;
    document.getElementById('feb13').disabled = true;
    document.getElementById('feb14').disabled = true;
    document.getElementById('feb15').disabled = true;
    document.getElementById('feb16').disabled = true;
    document.getElementById('feb17').disabled = true;
    document.getElementById('feb18').disabled = true;
    document.getElementById('feb19').disabled = true;
    document.getElementById('feb20').disabled = true;
    document.getElementById('feb21').disabled = true;
    document.getElementById('feb22').disabled = true;
    document.getElementById('feb23').disabled = true;
    document.getElementById('feb24').disabled = true;
    document.getElementById('feb25').disabled = true;
  }
  if(dd == 27){
    document.getElementById('feb1').disabled = true;
    document.getElementById('feb2').disabled = true;
    document.getElementById('feb3').disabled = true;
    document.getElementById('feb4').disabled = true;
    document.getElementById('feb5').disabled = true;
    document.getElementById('feb6').disabled = true;
    document.getElementById('feb7').disabled = true;
    document.getElementById('feb8').disabled = true;
    document.getElementById('feb9').disabled = true;
    document.getElementById('feb10').disabled = true;
    document.getElementById('feb11').disabled = true;
    document.getElementById('feb12').disabled = true;
    document.getElementById('feb13').disabled = true;
    document.getElementById('feb14').disabled = true;
    document.getElementById('feb15').disabled = true;
    document.getElementById('feb16').disabled = true;
    document.getElementById('feb17').disabled = true;
    document.getElementById('feb18').disabled = true;
    document.getElementById('feb19').disabled = true;
    document.getElementById('feb20').disabled = true;
    document.getElementById('feb21').disabled = true;
    document.getElementById('feb22').disabled = true;
    document.getElementById('feb23').disabled = true;
    document.getElementById('feb24').disabled = true;
    document.getElementById('feb25').disabled = true;
    document.getElementById('feb26').disabled = true;
  }
  if(dd == 28){
    document.getElementById('feb1').disabled = true;
    document.getElementById('feb2').disabled = true;
    document.getElementById('feb3').disabled = true;
    document.getElementById('feb4').disabled = true;
    document.getElementById('feb5').disabled = true;
    document.getElementById('feb6').disabled = true;
    document.getElementById('feb7').disabled = true;
    document.getElementById('feb8').disabled = true;
    document.getElementById('feb9').disabled = true;
    document.getElementById('feb10').disabled = true;
    document.getElementById('feb11').disabled = true;
    document.getElementById('feb12').disabled = true;
    document.getElementById('feb13').disabled = true;
    document.getElementById('feb14').disabled = true;
    document.getElementById('feb15').disabled = true;
    document.getElementById('feb16').disabled = true;
    document.getElementById('feb17').disabled = true;
    document.getElementById('feb18').disabled = true;
    document.getElementById('feb19').disabled = true;
    document.getElementById('feb20').disabled = true;
    document.getElementById('feb21').disabled = true;
    document.getElementById('feb22').disabled = true;
    document.getElementById('feb23').disabled = true;
    document.getElementById('feb24').disabled = true;
    document.getElementById('feb25').disabled = true;
    document.getElementById('feb26').disabled = true;
    document.getElementById('feb27').disabled = true;
  }

}
if(mm == 3){
      document.getElementById("May").style.display = "none";
  document.getElementById("April").style.display = "none";
  document.getElementById("February").style.display = "none";
  document.getElementById("january").style.display = "none";
  document.getElementById("March").style.display = "block";
  document.getElementById("marchprev").style.display = "none";
  document.getElementById("march"+dd).style.background= "#99ff99";
  if(dd == 2){
    document.getElementById('march1').disabled = true;
  }
  if(dd == 3){
    document.getElementById('march1').disabled = true;
    document.getElementById('march2').disabled = true;
  }
  if(dd == 4){
    document.getElementById('march1').disabled = true;
    document.getElementById('march2').disabled = true;
    document.getElementById('march3').disabled = true;
  }
  if(dd == 5){
    document.getElementById('march1').disabled = true;
    document.getElementById('march2').disabled = true;
    document.getElementById('march3').disabled = true;
    document.getElementById('march4').disabled = true;
  }
  if(dd == 6){
    document.getElementById('march1').disabled = true;
    document.getElementById('march2').disabled = true;
    document.getElementById('march3').disabled = true;
    document.getElementById('march4').disabled = true;
    document.getElementById('march5').disabled = true;
  }
  if(dd == 7){
    document.getElementById('march1').disabled = true;
    document.getElementById('march2').disabled = true;
    document.getElementById('march3').disabled = true;
    document.getElementById('march4').disabled = true;
    document.getElementById('march5').disabled = true;
    document.getElementById('march6').disabled = true;
  }
  if(dd == 8){
    document.getElementById('march1').disabled = true;
    document.getElementById('march2').disabled = true;
    document.getElementById('march3').disabled = true;
    document.getElementById('march4').disabled = true;
    document.getElementById('march5').disabled = true;
    document.getElementById('march6').disabled = true;
    document.getElementById('march7').disabled = true;
  }
  if(dd == 9){
    document.getElementById('march1').disabled = true;
    document.getElementById('march2').disabled = true;
    document.getElementById('march3').disabled = true;
    document.getElementById('march4').disabled = true;
    document.getElementById('march5').disabled = true;
    document.getElementById('march6').disabled = true;
    document.getElementById('march7').disabled = true;
    document.getElementById('march8').disabled = true;
  }
  if(dd == 10){
    document.getElementById('march1').disabled = true;
    document.getElementById('march2').disabled = true;
    document.getElementById('march3').disabled = true;
    document.getElementById('march4').disabled = true;
    document.getElementById('march5').disabled = true;
    document.getElementById('march6').disabled = true;
    document.getElementById('march7').disabled = true;
    document.getElementById('march8').disabled = true;
    document.getElementById('march9').disabled = true;
  }
  if(dd == 11){
    document.getElementById('march1').disabled = true;
    document.getElementById('march2').disabled = true;
    document.getElementById('march3').disabled = true;
    document.getElementById('march4').disabled = true;
    document.getElementById('march5').disabled = true;
    document.getElementById('march6').disabled = true;
    document.getElementById('march7').disabled = true;
    document.getElementById('march8').disabled = true;
    document.getElementById('march9').disabled = true;
    document.getElementById('march10').disabled = true;
  }
  if(dd == 12){
    document.getElementById('march1').disabled = true;
    document.getElementById('march2').disabled = true;
    document.getElementById('march3').disabled = true;
    document.getElementById('march4').disabled = true;
    document.getElementById('march5').disabled = true;
    document.getElementById('march6').disabled = true;
    document.getElementById('march7').disabled = true;
    document.getElementById('march8').disabled = true;
    document.getElementById('march9').disabled = true;
    document.getElementById('march10').disabled = true;
    document.getElementById('march11').disabled = true;
  }
  if(dd == 13){
    document.getElementById('march1').disabled = true;
    document.getElementById('march2').disabled = true;
    document.getElementById('march3').disabled = true;
    document.getElementById('march4').disabled = true;
    document.getElementById('march5').disabled = true;
    document.getElementById('march6').disabled = true;
    document.getElementById('march7').disabled = true;
    document.getElementById('march8').disabled = true;
    document.getElementById('march9').disabled = true;
    document.getElementById('march10').disabled = true;
    document.getElementById('march11').disabled = true;
    document.getElementById('march12').disabled = true;
  }
  if(dd == 14){
    document.getElementById('march1').disabled = true;
    document.getElementById('march2').disabled = true;
    document.getElementById('march3').disabled = true;
    document.getElementById('march4').disabled = true;
    document.getElementById('march5').disabled = true;
    document.getElementById('march6').disabled = true;
    document.getElementById('march7').disabled = true;
    document.getElementById('march8').disabled = true;
    document.getElementById('march9').disabled = true;
    document.getElementById('march10').disabled = true;
    document.getElementById('march11').disabled = true;
    document.getElementById('march12').disabled = true;
    document.getElementById('march13').disabled = true;
  }
  if(dd == 15){
    document.getElementById('march1').disabled = true;
    document.getElementById('march2').disabled = true;
    document.getElementById('march3').disabled = true;
    document.getElementById('march4').disabled = true;
    document.getElementById('march5').disabled = true;
    document.getElementById('march6').disabled = true;
    document.getElementById('march7').disabled = true;
    document.getElementById('march8').disabled = true;
    document.getElementById('march9').disabled = true;
    document.getElementById('march10').disabled = true;
    document.getElementById('march11').disabled = true;
    document.getElementById('march12').disabled = true;
    document.getElementById('march13').disabled = true;
    document.getElementById('march14').disabled = true;
  }
  if(dd == 16){
    document.getElementById('march1').disabled = true;
    document.getElementById('march2').disabled = true;
    document.getElementById('march3').disabled = true;
    document.getElementById('march4').disabled = true;
    document.getElementById('march5').disabled = true;
    document.getElementById('march6').disabled = true;
    document.getElementById('march7').disabled = true;
    document.getElementById('march8').disabled = true;
    document.getElementById('march9').disabled = true;
    document.getElementById('march10').disabled = true;
    document.getElementById('march11').disabled = true;
    document.getElementById('march12').disabled = true;
    document.getElementById('march13').disabled = true;
    document.getElementById('march14').disabled = true;
    document.getElementById('march15').disabled = true;
  }
  if(dd == 17){
    document.getElementById('march1').disabled = true;
    document.getElementById('march2').disabled = true;
    document.getElementById('march3').disabled = true;
    document.getElementById('march4').disabled = true;
    document.getElementById('march5').disabled = true;
    document.getElementById('march6').disabled = true;
    document.getElementById('march7').disabled = true;
    document.getElementById('march8').disabled = true;
    document.getElementById('march9').disabled = true;
    document.getElementById('march10').disabled = true;
    document.getElementById('march11').disabled = true;
    document.getElementById('march12').disabled = true;
    document.getElementById('march13').disabled = true;
    document.getElementById('march14').disabled = true;
    document.getElementById('march15').disabled = true;
    document.getElementById('march16').disabled = true;
  }
  if(dd == 18){
    document.getElementById('march1').disabled = true;
    document.getElementById('march2').disabled = true;
    document.getElementById('march3').disabled = true;
    document.getElementById('march4').disabled = true;
    document.getElementById('march5').disabled = true;
    document.getElementById('march6').disabled = true;
    document.getElementById('march7').disabled = true;
    document.getElementById('march8').disabled = true;
    document.getElementById('march9').disabled = true;
    document.getElementById('march10').disabled = true;
    document.getElementById('march11').disabled = true;
    document.getElementById('march12').disabled = true;
    document.getElementById('march13').disabled = true;
    document.getElementById('march14').disabled = true;
    document.getElementById('march15').disabled = true;
    document.getElementById('march16').disabled = true;
    document.getElementById('march17').disabled = true;
  }
  if(dd == 19){
    document.getElementById('march1').disabled = true;
    document.getElementById('march2').disabled = true;
    document.getElementById('march3').disabled = true;
    document.getElementById('march4').disabled = true;
    document.getElementById('march5').disabled = true;
    document.getElementById('march6').disabled = true;
    document.getElementById('march7').disabled = true;
    document.getElementById('march8').disabled = true;
    document.getElementById('march9').disabled = true;
    document.getElementById('march10').disabled = true;
    document.getElementById('march11').disabled = true;
    document.getElementById('march12').disabled = true;
    document.getElementById('march13').disabled = true;
    document.getElementById('march14').disabled = true;
    document.getElementById('march15').disabled = true;
    document.getElementById('march16').disabled = true;
    document.getElementById('march17').disabled = true;
    document.getElementById('march18').disabled = true;
  }
  if(dd == 20){
    document.getElementById('march1').disabled = true;
    document.getElementById('march2').disabled = true;
    document.getElementById('march3').disabled = true;
    document.getElementById('march4').disabled = true;
    document.getElementById('march5').disabled = true;
    document.getElementById('march6').disabled = true;
    document.getElementById('march7').disabled = true;
    document.getElementById('march8').disabled = true;
    document.getElementById('march9').disabled = true;
    document.getElementById('march10').disabled = true;
    document.getElementById('march11').disabled = true;
    document.getElementById('march12').disabled = true;
    document.getElementById('march13').disabled = true;
    document.getElementById('march14').disabled = true;
    document.getElementById('march15').disabled = true;
    document.getElementById('march16').disabled = true;
    document.getElementById('march17').disabled = true;
    document.getElementById('march18').disabled = true;
    document.getElementById('march19').disabled = true;
  }
  if(dd == 21){
    document.getElementById('march1').disabled = true;
    document.getElementById('march2').disabled = true;
    document.getElementById('march3').disabled = true;
    document.getElementById('march4').disabled = true;
    document.getElementById('march5').disabled = true;
    document.getElementById('march6').disabled = true;
    document.getElementById('march7').disabled = true;
    document.getElementById('march8').disabled = true;
    document.getElementById('march9').disabled = true;
    document.getElementById('march10').disabled = true;
    document.getElementById('march11').disabled = true;
    document.getElementById('march12').disabled = true;
    document.getElementById('march13').disabled = true;
    document.getElementById('march14').disabled = true;
    document.getElementById('march15').disabled = true;
    document.getElementById('march16').disabled = true;
    document.getElementById('march17').disabled = true;
    document.getElementById('march18').disabled = true;
    document.getElementById('march19').disabled = true;
    document.getElementById('march20').disabled = true;
  }
  if(dd == 22){
    document.getElementById('march1').disabled = true;
    document.getElementById('march2').disabled = true;
    document.getElementById('march3').disabled = true;
    document.getElementById('march4').disabled = true;
    document.getElementById('march5').disabled = true;
    document.getElementById('march6').disabled = true;
    document.getElementById('march7').disabled = true;
    document.getElementById('march8').disabled = true;
    document.getElementById('march9').disabled = true;
    document.getElementById('march10').disabled = true;
    document.getElementById('march11').disabled = true;
    document.getElementById('march12').disabled = true;
    document.getElementById('march13').disabled = true;
    document.getElementById('march14').disabled = true;
    document.getElementById('march15').disabled = true;
    document.getElementById('march16').disabled = true;
    document.getElementById('march17').disabled = true;
    document.getElementById('march18').disabled = true;
    document.getElementById('march19').disabled = true;
    document.getElementById('march20').disabled = true;
    document.getElementById('march21').disabled = true;
  }
  if(dd == 23){
    document.getElementById('march1').disabled = true;
    document.getElementById('march2').disabled = true;
    document.getElementById('march3').disabled = true;
    document.getElementById('march4').disabled = true;
    document.getElementById('march5').disabled = true;
    document.getElementById('march6').disabled = true;
    document.getElementById('march7').disabled = true;
    document.getElementById('march8').disabled = true;
    document.getElementById('march9').disabled = true;
    document.getElementById('march10').disabled = true;
    document.getElementById('march11').disabled = true;
    document.getElementById('march12').disabled = true;
    document.getElementById('march13').disabled = true;
    document.getElementById('march14').disabled = true;
    document.getElementById('march15').disabled = true;
    document.getElementById('march16').disabled = true;
    document.getElementById('march17').disabled = true;
    document.getElementById('march18').disabled = true;
    document.getElementById('march19').disabled = true;
    document.getElementById('march20').disabled = true;
    document.getElementById('march21').disabled = true;
    document.getElementById('march22').disabled = true;
  }
  if(dd == 24){
    document.getElementById('march1').disabled = true;
    document.getElementById('march2').disabled = true;
    document.getElementById('march3').disabled = true;
    document.getElementById('march4').disabled = true;
    document.getElementById('march5').disabled = true;
    document.getElementById('march6').disabled = true;
    document.getElementById('march7').disabled = true;
    document.getElementById('march8').disabled = true;
    document.getElementById('march9').disabled = true;
    document.getElementById('march10').disabled = true;
    document.getElementById('march11').disabled = true;
    document.getElementById('march12').disabled = true;
    document.getElementById('march13').disabled = true;
    document.getElementById('march14').disabled = true;
    document.getElementById('march15').disabled = true;
    document.getElementById('march16').disabled = true;
    document.getElementById('march17').disabled = true;
    document.getElementById('march18').disabled = true;
    document.getElementById('march19').disabled = true;
    document.getElementById('march20').disabled = true;
    document.getElementById('march21').disabled = true;
    document.getElementById('march22').disabled = true;
    document.getElementById('march23').disabled = true;
  }
  if(dd == 25){
    document.getElementById('march1').disabled = true;
    document.getElementById('march2').disabled = true;
    document.getElementById('march3').disabled = true;
    document.getElementById('march4').disabled = true;
    document.getElementById('march5').disabled = true;
    document.getElementById('march6').disabled = true;
    document.getElementById('march7').disabled = true;
    document.getElementById('march8').disabled = true;
    document.getElementById('march9').disabled = true;
    document.getElementById('march10').disabled = true;
    document.getElementById('march11').disabled = true;
    document.getElementById('march12').disabled = true;
    document.getElementById('march13').disabled = true;
    document.getElementById('march14').disabled = true;
    document.getElementById('march15').disabled = true;
    document.getElementById('march16').disabled = true;
    document.getElementById('march17').disabled = true;
    document.getElementById('march18').disabled = true;
    document.getElementById('march19').disabled = true;
    document.getElementById('march20').disabled = true;
    document.getElementById('march21').disabled = true;
    document.getElementById('march22').disabled = true;
    document.getElementById('march23').disabled = true;
    document.getElementById('march24').disabled = true;
  }
  if(dd == 26){
    document.getElementById('march1').disabled = true;
    document.getElementById('march2').disabled = true;
    document.getElementById('march3').disabled = true;
    document.getElementById('march4').disabled = true;
    document.getElementById('march5').disabled = true;
    document.getElementById('march6').disabled = true;
    document.getElementById('march7').disabled = true;
    document.getElementById('march8').disabled = true;
    document.getElementById('march9').disabled = true;
    document.getElementById('march10').disabled = true;
    document.getElementById('march11').disabled = true;
    document.getElementById('march12').disabled = true;
    document.getElementById('march13').disabled = true;
    document.getElementById('march14').disabled = true;
    document.getElementById('march15').disabled = true;
    document.getElementById('march16').disabled = true;
    document.getElementById('march17').disabled = true;
    document.getElementById('march18').disabled = true;
    document.getElementById('march19').disabled = true;
    document.getElementById('march20').disabled = true;
    document.getElementById('march21').disabled = true;
    document.getElementById('march22').disabled = true;
    document.getElementById('march23').disabled = true;
    document.getElementById('march24').disabled = true;
    document.getElementById('march25').disabled = true;
  }
  if(dd == 27){
    document.getElementById('march1').disabled = true;
    document.getElementById('march2').disabled = true;
    document.getElementById('march3').disabled = true;
    document.getElementById('march4').disabled = true;
    document.getElementById('march5').disabled = true;
    document.getElementById('march6').disabled = true;
    document.getElementById('march7').disabled = true;
    document.getElementById('march8').disabled = true;
    document.getElementById('march9').disabled = true;
    document.getElementById('march10').disabled = true;
    document.getElementById('march11').disabled = true;
    document.getElementById('march12').disabled = true;
    document.getElementById('march13').disabled = true;
    document.getElementById('march14').disabled = true;
    document.getElementById('march15').disabled = true;
    document.getElementById('march16').disabled = true;
    document.getElementById('march17').disabled = true;
    document.getElementById('march18').disabled = true;
    document.getElementById('march19').disabled = true;
    document.getElementById('march20').disabled = true;
    document.getElementById('march21').disabled = true;
    document.getElementById('march22').disabled = true;
    document.getElementById('march23').disabled = true;
    document.getElementById('march24').disabled = true;
    document.getElementById('march25').disabled = true;
    document.getElementById('march26').disabled = true;
  }
  if(dd == 28){
    document.getElementById('march1').disabled = true;
    document.getElementById('march2').disabled = true;
    document.getElementById('march3').disabled = true;
    document.getElementById('march4').disabled = true;
    document.getElementById('march5').disabled = true;
    document.getElementById('march6').disabled = true;
    document.getElementById('march7').disabled = true;
    document.getElementById('march8').disabled = true;
    document.getElementById('march9').disabled = true;
    document.getElementById('march10').disabled = true;
    document.getElementById('march11').disabled = true;
    document.getElementById('march12').disabled = true;
    document.getElementById('march13').disabled = true;
    document.getElementById('march14').disabled = true;
    document.getElementById('march15').disabled = true;
    document.getElementById('march16').disabled = true;
    document.getElementById('march17').disabled = true;
    document.getElementById('march18').disabled = true;
    document.getElementById('march19').disabled = true;
    document.getElementById('march20').disabled = true;
    document.getElementById('march21').disabled = true;
    document.getElementById('march22').disabled = true;
    document.getElementById('march23').disabled = true;
    document.getElementById('march24').disabled = true;
    document.getElementById('march25').disabled = true;
    document.getElementById('march26').disabled = true;
    document.getElementById('march27').disabled = true;
  }
  if(dd == 29){
    document.getElementById('march1').disabled = true;
    document.getElementById('march2').disabled = true;
    document.getElementById('march3').disabled = true;
    document.getElementById('march4').disabled = true;
    document.getElementById('march5').disabled = true;
    document.getElementById('march6').disabled = true;
    document.getElementById('march7').disabled = true;
    document.getElementById('march8').disabled = true;
    document.getElementById('march9').disabled = true;
    document.getElementById('march10').disabled = true;
    document.getElementById('march11').disabled = true;
    document.getElementById('march12').disabled = true;
    document.getElementById('march13').disabled = true;
    document.getElementById('march14').disabled = true;
    document.getElementById('march15').disabled = true;
    document.getElementById('march16').disabled = true;
    document.getElementById('march17').disabled = true;
    document.getElementById('march18').disabled = true;
    document.getElementById('march19').disabled = true;
    document.getElementById('march20').disabled = true;
    document.getElementById('march21').disabled = true;
    document.getElementById('march22').disabled = true;
    document.getElementById('march23').disabled = true;
    document.getElementById('march24').disabled = true;
    document.getElementById('march25').disabled = true;
    document.getElementById('march26').disabled = true;
    document.getElementById('march27').disabled = true;
    document.getElementById('march28').disabled = true;
  }
  if(dd == 30){
    document.getElementById('march1').disabled = true;
    document.getElementById('march2').disabled = true;
    document.getElementById('march3').disabled = true;
    document.getElementById('march4').disabled = true;
    document.getElementById('march5').disabled = true;
    document.getElementById('march6').disabled = true;
    document.getElementById('march7').disabled = true;
    document.getElementById('march8').disabled = true;
    document.getElementById('march9').disabled = true;
    document.getElementById('march10').disabled = true;
    document.getElementById('march11').disabled = true;
    document.getElementById('march12').disabled = true;
    document.getElementById('march13').disabled = true;
    document.getElementById('march14').disabled = true;
    document.getElementById('march15').disabled = true;
    document.getElementById('march16').disabled = true;
    document.getElementById('march17').disabled = true;
    document.getElementById('march18').disabled = true;
    document.getElementById('march19').disabled = true;
    document.getElementById('march20').disabled = true;
    document.getElementById('march21').disabled = true;
    document.getElementById('march22').disabled = true;
    document.getElementById('march23').disabled = true;
    document.getElementById('march24').disabled = true;
    document.getElementById('march25').disabled = true;
    document.getElementById('march26').disabled = true;
    document.getElementById('march27').disabled = true;
    document.getElementById('march28').disabled = true;
    document.getElementById('march29').disabled = true;
  }
  if(dd == 31){
    document.getElementById('march1').disabled = true;
    document.getElementById('march2').disabled = true;
    document.getElementById('march3').disabled = true;
    document.getElementById('march4').disabled = true;
    document.getElementById('march5').disabled = true;
    document.getElementById('march6').disabled = true;
    document.getElementById('march7').disabled = true;
    document.getElementById('march8').disabled = true;
    document.getElementById('march9').disabled = true;
    document.getElementById('march10').disabled = true;
    document.getElementById('march11').disabled = true;
    document.getElementById('march12').disabled = true;
    document.getElementById('march13').disabled = true;
    document.getElementById('march14').disabled = true;
    document.getElementById('march15').disabled = true;
    document.getElementById('march16').disabled = true;
    document.getElementById('march17').disabled = true;
    document.getElementById('march18').disabled = true;
    document.getElementById('march19').disabled = true;
    document.getElementById('march20').disabled = true;
    document.getElementById('march21').disabled = true;
    document.getElementById('march22').disabled = true;
    document.getElementById('march23').disabled = true;
    document.getElementById('march24').disabled = true;
    document.getElementById('march25').disabled = true;
    document.getElementById('march26').disabled = true;
    document.getElementById('march27').disabled = true;
    document.getElementById('march28').disabled = true;
    document.getElementById('march29').disabled = true;
    document.getElementById('march30').disabled = true;
  }
}

if(mm == 4){
      document.getElementById("May").style.display = "none";
  document.getElementById("April").style.display = "April";
  document.getElementById("May").style.display = "none";
  document.getElementById("February").style.display = "none";
  document.getElementById("january").style.display = "none";
  document.getElementById("March").style.display = "none";
  document.getElementById("aprilprev").style.display = "none";
  document.getElementById("april"+dd).style.background= "#99ff99";
  if(dd == 2){
    document.getElementById('april1').disabled = true;
  }
  if(dd == 3){
    document.getElementById('april1').disabled = true;
    document.getElementById('april2').disabled = true;
  }
  if(dd == 4){
    document.getElementById('april1').disabled = true;
    document.getElementById('april2').disabled = true;
    document.getElementById('april3').disabled = true;
  }
  if(dd == 5){
    document.getElementById('april1').disabled = true;
    document.getElementById('april2').disabled = true;
    document.getElementById('april3').disabled = true;
    document.getElementById('april4').disabled = true;
  }
  if(dd == 6){
    document.getElementById('april1').disabled = true;
    document.getElementById('april2').disabled = true;
    document.getElementById('april3').disabled = true;
    document.getElementById('april4').disabled = true;
    document.getElementById('april5').disabled = true;
  }
  if(dd == 7){
    document.getElementById('april1').disabled = true;
    document.getElementById('april2').disabled = true;
    document.getElementById('april3').disabled = true;
    document.getElementById('april4').disabled = true;
    document.getElementById('april5').disabled = true;
    document.getElementById('april6').disabled = true;
  }
  if(dd == 8){
    document.getElementById('april1').disabled = true;
    document.getElementById('april2').disabled = true;
    document.getElementById('april3').disabled = true;
    document.getElementById('april4').disabled = true;
    document.getElementById('april5').disabled = true;
    document.getElementById('april6').disabled = true;
    document.getElementById('april7').disabled = true;
  }
  if(dd == 9){
    document.getElementById('april1').disabled = true;
    document.getElementById('april2').disabled = true;
    document.getElementById('april3').disabled = true;
    document.getElementById('april4').disabled = true;
    document.getElementById('april5').disabled = true;
    document.getElementById('april6').disabled = true;
    document.getElementById('april7').disabled = true;
    document.getElementById('april8').disabled = true;
  }
  if(dd == 10){
    document.getElementById('april1').disabled = true;
    document.getElementById('april2').disabled = true;
    document.getElementById('april3').disabled = true;
    document.getElementById('april4').disabled = true;
    document.getElementById('april5').disabled = true;
    document.getElementById('april6').disabled = true;
    document.getElementById('april7').disabled = true;
    document.getElementById('april8').disabled = true;
    document.getElementById('april9').disabled = true;
  }
  if(dd == 11){
    document.getElementById('april1').disabled = true;
    document.getElementById('april2').disabled = true;
    document.getElementById('april3').disabled = true;
    document.getElementById('april4').disabled = true;
    document.getElementById('april5').disabled = true;
    document.getElementById('april6').disabled = true;
    document.getElementById('april7').disabled = true;
    document.getElementById('april8').disabled = true;
    document.getElementById('april9').disabled = true;
    document.getElementById('april10').disabled = true;
  }
  if(dd == 12){
    document.getElementById('april1').disabled = true;
    document.getElementById('april2').disabled = true;
    document.getElementById('april3').disabled = true;
    document.getElementById('april4').disabled = true;
    document.getElementById('april5').disabled = true;
    document.getElementById('april6').disabled = true;
    document.getElementById('april7').disabled = true;
    document.getElementById('april8').disabled = true;
    document.getElementById('april9').disabled = true;
    document.getElementById('april10').disabled = true;
    document.getElementById('april11').disabled = true;
  }
  if(dd == 13){
    document.getElementById('april1').disabled = true;
    document.getElementById('april2').disabled = true;
    document.getElementById('april3').disabled = true;
    document.getElementById('april4').disabled = true;
    document.getElementById('april5').disabled = true;
    document.getElementById('april6').disabled = true;
    document.getElementById('april7').disabled = true;
    document.getElementById('april8').disabled = true;
    document.getElementById('april9').disabled = true;
    document.getElementById('april10').disabled = true;
    document.getElementById('april11').disabled = true;
    document.getElementById('april12').disabled = true;
  }
  if(dd == 14){
    document.getElementById('april1').disabled = true;
    document.getElementById('april2').disabled = true;
    document.getElementById('april3').disabled = true;
    document.getElementById('april4').disabled = true;
    document.getElementById('april5').disabled = true;
    document.getElementById('april6').disabled = true;
    document.getElementById('april7').disabled = true;
    document.getElementById('april8').disabled = true;
    document.getElementById('april9').disabled = true;
    document.getElementById('april10').disabled = true;
    document.getElementById('april11').disabled = true;
    document.getElementById('april12').disabled = true;
    document.getElementById('april13').disabled = true;
  }
  if(dd == 15){
    document.getElementById('april1').disabled = true;
    document.getElementById('april2').disabled = true;
    document.getElementById('april3').disabled = true;
    document.getElementById('april4').disabled = true;
    document.getElementById('april5').disabled = true;
    document.getElementById('april6').disabled = true;
    document.getElementById('april7').disabled = true;
    document.getElementById('april8').disabled = true;
    document.getElementById('april9').disabled = true;
    document.getElementById('april10').disabled = true;
    document.getElementById('april11').disabled = true;
    document.getElementById('april12').disabled = true;
    document.getElementById('april13').disabled = true;
    document.getElementById('april14').disabled = true;
  }
  if(dd == 16){
    document.getElementById('april1').disabled = true;
    document.getElementById('april2').disabled = true;
    document.getElementById('april3').disabled = true;
    document.getElementById('april4').disabled = true;
    document.getElementById('april5').disabled = true;
    document.getElementById('april6').disabled = true;
    document.getElementById('april7').disabled = true;
    document.getElementById('april8').disabled = true;
    document.getElementById('april9').disabled = true;
    document.getElementById('april10').disabled = true;
    document.getElementById('april11').disabled = true;
    document.getElementById('april12').disabled = true;
    document.getElementById('april13').disabled = true;
    document.getElementById('april14').disabled = true;
    document.getElementById('april15').disabled = true;
  }
  if(dd == 17){
    document.getElementById('april1').disabled = true;
    document.getElementById('april2').disabled = true;
    document.getElementById('april3').disabled = true;
    document.getElementById('april4').disabled = true;
    document.getElementById('april5').disabled = true;
    document.getElementById('april6').disabled = true;
    document.getElementById('april7').disabled = true;
    document.getElementById('april8').disabled = true;
    document.getElementById('april9').disabled = true;
    document.getElementById('april10').disabled = true;
    document.getElementById('april11').disabled = true;
    document.getElementById('april12').disabled = true;
    document.getElementById('april13').disabled = true;
    document.getElementById('april14').disabled = true;
    document.getElementById('april15').disabled = true;
    document.getElementById('april16').disabled = true;
  }
  if(dd == 18){
    document.getElementById('april1').disabled = true;
    document.getElementById('april2').disabled = true;
    document.getElementById('april3').disabled = true;
    document.getElementById('april4').disabled = true;
    document.getElementById('april5').disabled = true;
    document.getElementById('april6').disabled = true;
    document.getElementById('april7').disabled = true;
    document.getElementById('april8').disabled = true;
    document.getElementById('april9').disabled = true;
    document.getElementById('april10').disabled = true;
    document.getElementById('april11').disabled = true;
    document.getElementById('april12').disabled = true;
    document.getElementById('april13').disabled = true;
    document.getElementById('april14').disabled = true;
    document.getElementById('april15').disabled = true;
    document.getElementById('april16').disabled = true;
    document.getElementById('april17').disabled = true;
  }
  if(dd == 19){
    document.getElementById('april1').disabled = true;
    document.getElementById('april2').disabled = true;
    document.getElementById('april3').disabled = true;
    document.getElementById('april4').disabled = true;
    document.getElementById('april5').disabled = true;
    document.getElementById('april6').disabled = true;
    document.getElementById('april7').disabled = true;
    document.getElementById('april8').disabled = true;
    document.getElementById('april9').disabled = true;
    document.getElementById('april10').disabled = true;
    document.getElementById('april11').disabled = true;
    document.getElementById('april12').disabled = true;
    document.getElementById('april13').disabled = true;
    document.getElementById('april14').disabled = true;
    document.getElementById('april15').disabled = true;
    document.getElementById('april16').disabled = true;
    document.getElementById('april17').disabled = true;
    document.getElementById('april18').disabled = true;
  }
  if(dd == 20){
    document.getElementById('april1').disabled = true;
    document.getElementById('april2').disabled = true;
    document.getElementById('april3').disabled = true;
    document.getElementById('april4').disabled = true;
    document.getElementById('april5').disabled = true;
    document.getElementById('april6').disabled = true;
    document.getElementById('april7').disabled = true;
    document.getElementById('april8').disabled = true;
    document.getElementById('april9').disabled = true;
    document.getElementById('april10').disabled = true;
    document.getElementById('april11').disabled = true;
    document.getElementById('april12').disabled = true;
    document.getElementById('april13').disabled = true;
    document.getElementById('april14').disabled = true;
    document.getElementById('april15').disabled = true;
    document.getElementById('april16').disabled = true;
    document.getElementById('april17').disabled = true;
    document.getElementById('april18').disabled = true;
    document.getElementById('april19').disabled = true;
  }
  if(dd == 21){
    document.getElementById('april1').disabled = true;
    document.getElementById('april2').disabled = true;
    document.getElementById('april3').disabled = true;
    document.getElementById('april4').disabled = true;
    document.getElementById('april5').disabled = true;
    document.getElementById('april6').disabled = true;
    document.getElementById('april7').disabled = true;
    document.getElementById('april8').disabled = true;
    document.getElementById('april9').disabled = true;
    document.getElementById('april10').disabled = true;
    document.getElementById('april11').disabled = true;
    document.getElementById('april12').disabled = true;
    document.getElementById('april13').disabled = true;
    document.getElementById('april14').disabled = true;
    document.getElementById('april15').disabled = true;
    document.getElementById('april16').disabled = true;
    document.getElementById('april17').disabled = true;
    document.getElementById('april18').disabled = true;
    document.getElementById('april19').disabled = true;
    document.getElementById('april20').disabled = true;
  }
  if(dd == 22){
    document.getElementById('april1').disabled = true;
    document.getElementById('april2').disabled = true;
    document.getElementById('april3').disabled = true;
    document.getElementById('april4').disabled = true;
    document.getElementById('april5').disabled = true;
    document.getElementById('april6').disabled = true;
    document.getElementById('april7').disabled = true;
    document.getElementById('april8').disabled = true;
    document.getElementById('april9').disabled = true;
    document.getElementById('april10').disabled = true;
    document.getElementById('april11').disabled = true;
    document.getElementById('april12').disabled = true;
    document.getElementById('april13').disabled = true;
    document.getElementById('april14').disabled = true;
    document.getElementById('april15').disabled = true;
    document.getElementById('april16').disabled = true;
    document.getElementById('april17').disabled = true;
    document.getElementById('april18').disabled = true;
    document.getElementById('april19').disabled = true;
    document.getElementById('april20').disabled = true;
    document.getElementById('april21').disabled = true;
  }
  if(dd == 23){
    document.getElementById('april1').disabled = true;
    document.getElementById('april2').disabled = true;
    document.getElementById('april3').disabled = true;
    document.getElementById('april4').disabled = true;
    document.getElementById('april5').disabled = true;
    document.getElementById('april6').disabled = true;
    document.getElementById('april7').disabled = true;
    document.getElementById('april8').disabled = true;
    document.getElementById('april9').disabled = true;
    document.getElementById('april10').disabled = true;
    document.getElementById('april11').disabled = true;
    document.getElementById('april12').disabled = true;
    document.getElementById('april13').disabled = true;
    document.getElementById('april14').disabled = true;
    document.getElementById('april15').disabled = true;
    document.getElementById('april16').disabled = true;
    document.getElementById('april17').disabled = true;
    document.getElementById('april18').disabled = true;
    document.getElementById('april19').disabled = true;
    document.getElementById('april20').disabled = true;
    document.getElementById('april21').disabled = true;
    document.getElementById('april22').disabled = true;
  }
  if(dd == 24){
    document.getElementById('april1').disabled = true;
    document.getElementById('april2').disabled = true;
    document.getElementById('april3').disabled = true;
    document.getElementById('april4').disabled = true;
    document.getElementById('april5').disabled = true;
    document.getElementById('april6').disabled = true;
    document.getElementById('april7').disabled = true;
    document.getElementById('april8').disabled = true;
    document.getElementById('april9').disabled = true;
    document.getElementById('april10').disabled = true;
    document.getElementById('april11').disabled = true;
    document.getElementById('april12').disabled = true;
    document.getElementById('april13').disabled = true;
    document.getElementById('april14').disabled = true;
    document.getElementById('april15').disabled = true;
    document.getElementById('april16').disabled = true;
    document.getElementById('april17').disabled = true;
    document.getElementById('april18').disabled = true;
    document.getElementById('april19').disabled = true;
    document.getElementById('april20').disabled = true;
    document.getElementById('april21').disabled = true;
    document.getElementById('april22').disabled = true;
    document.getElementById('april23').disabled = true;
  }
  if(dd == 25){
    document.getElementById('april1').disabled = true;
    document.getElementById('april2').disabled = true;
    document.getElementById('april3').disabled = true;
    document.getElementById('april4').disabled = true;
    document.getElementById('april5').disabled = true;
    document.getElementById('april6').disabled = true;
    document.getElementById('april7').disabled = true;
    document.getElementById('april8').disabled = true;
    document.getElementById('april9').disabled = true;
    document.getElementById('april10').disabled = true;
    document.getElementById('april11').disabled = true;
    document.getElementById('april12').disabled = true;
    document.getElementById('april13').disabled = true;
    document.getElementById('april14').disabled = true;
    document.getElementById('april15').disabled = true;
    document.getElementById('april16').disabled = true;
    document.getElementById('april17').disabled = true;
    document.getElementById('april18').disabled = true;
    document.getElementById('april19').disabled = true;
    document.getElementById('april20').disabled = true;
    document.getElementById('april21').disabled = true;
    document.getElementById('april22').disabled = true;
    document.getElementById('april23').disabled = true;
    document.getElementById('april24').disabled = true;
  }
  if(dd == 26){
    document.getElementById('april1').disabled = true;
    document.getElementById('april2').disabled = true;
    document.getElementById('april3').disabled = true;
    document.getElementById('april4').disabled = true;
    document.getElementById('april5').disabled = true;
    document.getElementById('april6').disabled = true;
    document.getElementById('april7').disabled = true;
    document.getElementById('april8').disabled = true;
    document.getElementById('april9').disabled = true;
    document.getElementById('april10').disabled = true;
    document.getElementById('april11').disabled = true;
    document.getElementById('april12').disabled = true;
    document.getElementById('april13').disabled = true;
    document.getElementById('april14').disabled = true;
    document.getElementById('april15').disabled = true;
    document.getElementById('april16').disabled = true;
    document.getElementById('april17').disabled = true;
    document.getElementById('april18').disabled = true;
    document.getElementById('april19').disabled = true;
    document.getElementById('april20').disabled = true;
    document.getElementById('april21').disabled = true;
    document.getElementById('april22').disabled = true;
    document.getElementById('april23').disabled = true;
    document.getElementById('april24').disabled = true;
    document.getElementById('april25').disabled = true;
  }
  if(dd == 27){
    document.getElementById('april1').disabled = true;
    document.getElementById('april2').disabled = true;
    document.getElementById('april3').disabled = true;
    document.getElementById('april4').disabled = true;
    document.getElementById('april5').disabled = true;
    document.getElementById('april6').disabled = true;
    document.getElementById('april7').disabled = true;
    document.getElementById('april8').disabled = true;
    document.getElementById('april9').disabled = true;
    document.getElementById('april10').disabled = true;
    document.getElementById('april11').disabled = true;
    document.getElementById('april12').disabled = true;
    document.getElementById('april13').disabled = true;
    document.getElementById('april14').disabled = true;
    document.getElementById('april15').disabled = true;
    document.getElementById('april16').disabled = true;
    document.getElementById('april17').disabled = true;
    document.getElementById('april18').disabled = true;
    document.getElementById('april19').disabled = true;
    document.getElementById('april20').disabled = true;
    document.getElementById('april21').disabled = true;
    document.getElementById('april22').disabled = true;
    document.getElementById('april23').disabled = true;
    document.getElementById('april24').disabled = true;
    document.getElementById('april25').disabled = true;
    document.getElementById('april26').disabled = true;
  }
  if(dd == 28){
    document.getElementById('april1').disabled = true;
    document.getElementById('april2').disabled = true;
    document.getElementById('april3').disabled = true;
    document.getElementById('april4').disabled = true;
    document.getElementById('april5').disabled = true;
    document.getElementById('april6').disabled = true;
    document.getElementById('april7').disabled = true;
    document.getElementById('april8').disabled = true;
    document.getElementById('april9').disabled = true;
    document.getElementById('april10').disabled = true;
    document.getElementById('april11').disabled = true;
    document.getElementById('april12').disabled = true;
    document.getElementById('april13').disabled = true;
    document.getElementById('april14').disabled = true;
    document.getElementById('april15').disabled = true;
    document.getElementById('april16').disabled = true;
    document.getElementById('april17').disabled = true;
    document.getElementById('april18').disabled = true;
    document.getElementById('april19').disabled = true;
    document.getElementById('april20').disabled = true;
    document.getElementById('april21').disabled = true;
    document.getElementById('april22').disabled = true;
    document.getElementById('april23').disabled = true;
    document.getElementById('april24').disabled = true;
    document.getElementById('april25').disabled = true;
    document.getElementById('april26').disabled = true;
    document.getElementById('april27').disabled = true;
  }
  if(dd == 29){
    document.getElementById('april1').disabled = true;
    document.getElementById('april2').disabled = true;
    document.getElementById('april3').disabled = true;
    document.getElementById('april4').disabled = true;
    document.getElementById('april5').disabled = true;
    document.getElementById('april6').disabled = true;
    document.getElementById('april7').disabled = true;
    document.getElementById('april8').disabled = true;
    document.getElementById('april9').disabled = true;
    document.getElementById('april10').disabled = true;
    document.getElementById('april11').disabled = true;
    document.getElementById('april12').disabled = true;
    document.getElementById('april13').disabled = true;
    document.getElementById('april14').disabled = true;
    document.getElementById('april15').disabled = true;
    document.getElementById('april16').disabled = true;
    document.getElementById('april17').disabled = true;
    document.getElementById('april18').disabled = true;
    document.getElementById('april19').disabled = true;
    document.getElementById('april20').disabled = true;
    document.getElementById('april21').disabled = true;
    document.getElementById('april22').disabled = true;
    document.getElementById('april23').disabled = true;
    document.getElementById('april24').disabled = true;
    document.getElementById('april25').disabled = true;
    document.getElementById('april26').disabled = true;
    document.getElementById('april27').disabled = true;
    document.getElementById('april28').disabled = true;
  }
  if(dd == 30){
    document.getElementById('april1').disabled = true;
    document.getElementById('april2').disabled = true;
    document.getElementById('april3').disabled = true;
    document.getElementById('april4').disabled = true;
    document.getElementById('april5').disabled = true;
    document.getElementById('april6').disabled = true;
    document.getElementById('april7').disabled = true;
    document.getElementById('april8').disabled = true;
    document.getElementById('april9').disabled = true;
    document.getElementById('april10').disabled = true;
    document.getElementById('april11').disabled = true;
    document.getElementById('april12').disabled = true;
    document.getElementById('april13').disabled = true;
    document.getElementById('april14').disabled = true;
    document.getElementById('april15').disabled = true;
    document.getElementById('april16').disabled = true;
    document.getElementById('april17').disabled = true;
    document.getElementById('april18').disabled = true;
    document.getElementById('april19').disabled = true;
    document.getElementById('april20').disabled = true;
    document.getElementById('april21').disabled = true;
    document.getElementById('april22').disabled = true;
    document.getElementById('april23').disabled = true;
    document.getElementById('april24').disabled = true;
    document.getElementById('april25').disabled = true;
    document.getElementById('april26').disabled = true;
    document.getElementById('april27').disabled = true;
    document.getElementById('april28').disabled = true;
    document.getElementById('april29').disabled = true;
  }
}
if(mm == 5){
  document.getElementById("january").style.display = "none";
  document.getElementById("February").style.display = "none";
  document.getElementById("March").style.display = "none";
  document.getElementById("April").style.display = "none";
  document.getElementById("May").style.display = "block";
  document.getElementById("may"+dd).style.background= "#99ff99";
  if(dd == 2){
    document.getElementById('may1').disabled = true;
  }
  if(dd == 3){
    document.getElementById('may1').disabled = true;
    document.getElementById('may2').disabled = true;
  }
  if(dd == 4){
    document.getElementById('may1').disabled = true;
    document.getElementById('may2').disabled = true;
    document.getElementById('may3').disabled = true;
  }
  if(dd == 5){
    document.getElementById('may1').disabled = true;
    document.getElementById('may2').disabled = true;
    document.getElementById('may3').disabled = true;
    document.getElementById('may4').disabled = true;
  }
  if(dd == 6){
    document.getElementById('may1').disabled = true;
    document.getElementById('may2').disabled = true;
    document.getElementById('may3').disabled = true;
    document.getElementById('may4').disabled = true;
    document.getElementById('may5').disabled = true;
  }
  if(dd == 7){
    document.getElementById('may1').disabled = true;
    document.getElementById('may2').disabled = true;
    document.getElementById('may3').disabled = true;
    document.getElementById('may4').disabled = true;
    document.getElementById('may5').disabled = true;
    document.getElementById('may6').disabled = true;
  }
  if(dd == 8){
    document.getElementById('may1').disabled = true;
    document.getElementById('may2').disabled = true;
    document.getElementById('may3').disabled = true;
    document.getElementById('may4').disabled = true;
    document.getElementById('may5').disabled = true;
    document.getElementById('may6').disabled = true;
    document.getElementById('may7').disabled = true;
  }
  if(dd == 9){
    document.getElementById('may1').disabled = true;
    document.getElementById('may2').disabled = true;
    document.getElementById('may3').disabled = true;
    document.getElementById('may4').disabled = true;
    document.getElementById('may5').disabled = true;
    document.getElementById('may6').disabled = true;
    document.getElementById('may7').disabled = true;
    document.getElementById('may8').disabled = true;
  }
  if(dd == 10){
    document.getElementById('may1').disabled = true;
    document.getElementById('may2').disabled = true;
    document.getElementById('may3').disabled = true;
    document.getElementById('may4').disabled = true;
    document.getElementById('may5').disabled = true;
    document.getElementById('may6').disabled = true;
    document.getElementById('may7').disabled = true;
    document.getElementById('may8').disabled = true;
    document.getElementById('may9').disabled = true;
  }
  if(dd == 11){
    document.getElementById('may1').disabled = true;
    document.getElementById('may2').disabled = true;
    document.getElementById('may3').disabled = true;
    document.getElementById('may4').disabled = true;
    document.getElementById('may5').disabled = true;
    document.getElementById('may6').disabled = true;
    document.getElementById('may7').disabled = true;
    document.getElementById('may8').disabled = true;
    document.getElementById('may9').disabled = true;
    document.getElementById('may10').disabled = true;
  }
  if(dd == 12){
    document.getElementById('may1').disabled = true;
    document.getElementById('may2').disabled = true;
    document.getElementById('may3').disabled = true;
    document.getElementById('may4').disabled = true;
    document.getElementById('may5').disabled = true;
    document.getElementById('may6').disabled = true;
    document.getElementById('may7').disabled = true;
    document.getElementById('may8').disabled = true;
    document.getElementById('may9').disabled = true;
    document.getElementById('may10').disabled = true;
    document.getElementById('may11').disabled = true;
  }
  if(dd == 13){
    document.getElementById('may1').disabled = true;
    document.getElementById('may2').disabled = true;
    document.getElementById('may3').disabled = true;
    document.getElementById('may4').disabled = true;
    document.getElementById('may5').disabled = true;
    document.getElementById('may6').disabled = true;
    document.getElementById('may7').disabled = true;
    document.getElementById('may8').disabled = true;
    document.getElementById('may9').disabled = true;
    document.getElementById('may10').disabled = true;
    document.getElementById('may11').disabled = true;
    document.getElementById('may12').disabled = true;
  }
  if(dd == 14){
    document.getElementById('may1').disabled = true;
    document.getElementById('may2').disabled = true;
    document.getElementById('may3').disabled = true;
    document.getElementById('may4').disabled = true;
    document.getElementById('may5').disabled = true;
    document.getElementById('may6').disabled = true;
    document.getElementById('may7').disabled = true;
    document.getElementById('may8').disabled = true;
    document.getElementById('may9').disabled = true;
    document.getElementById('may10').disabled = true;
    document.getElementById('may11').disabled = true;
    document.getElementById('may12').disabled = true;
    document.getElementById('may13').disabled = true;
  }
  if(dd == 15){
    document.getElementById('may1').disabled = true;
    document.getElementById('may2').disabled = true;
    document.getElementById('may3').disabled = true;
    document.getElementById('may4').disabled = true;
    document.getElementById('may5').disabled = true;
    document.getElementById('may6').disabled = true;
    document.getElementById('may7').disabled = true;
    document.getElementById('may8').disabled = true;
    document.getElementById('may9').disabled = true;
    document.getElementById('may10').disabled = true;
    document.getElementById('may11').disabled = true;
    document.getElementById('may12').disabled = true;
    document.getElementById('may13').disabled = true;
    document.getElementById('may14').disabled = true;
  }
  if(dd == 16){
    document.getElementById('may1').disabled = true;
    document.getElementById('may2').disabled = true;
    document.getElementById('may3').disabled = true;
    document.getElementById('may4').disabled = true;
    document.getElementById('may5').disabled = true;
    document.getElementById('may6').disabled = true;
    document.getElementById('may7').disabled = true;
    document.getElementById('may8').disabled = true;
    document.getElementById('may9').disabled = true;
    document.getElementById('may10').disabled = true;
    document.getElementById('may11').disabled = true;
    document.getElementById('may12').disabled = true;
    document.getElementById('may13').disabled = true;
    document.getElementById('may14').disabled = true;
    document.getElementById('may15').disabled = true;
  }
  if(dd == 17){
    document.getElementById('may1').disabled = true;
    document.getElementById('may2').disabled = true;
    document.getElementById('may3').disabled = true;
    document.getElementById('may4').disabled = true;
    document.getElementById('may5').disabled = true;
    document.getElementById('may6').disabled = true;
    document.getElementById('may7').disabled = true;
    document.getElementById('may8').disabled = true;
    document.getElementById('may9').disabled = true;
    document.getElementById('may10').disabled = true;
    document.getElementById('may11').disabled = true;
    document.getElementById('may12').disabled = true;
    document.getElementById('may13').disabled = true;
    document.getElementById('may14').disabled = true;
    document.getElementById('may15').disabled = true;
    document.getElementById('may16').disabled = true;
  }
  if(dd == 18){
    document.getElementById('may1').disabled = true;
    document.getElementById('may2').disabled = true;
    document.getElementById('may3').disabled = true;
    document.getElementById('may4').disabled = true;
    document.getElementById('may5').disabled = true;
    document.getElementById('may6').disabled = true;
    document.getElementById('may7').disabled = true;
    document.getElementById('may8').disabled = true;
    document.getElementById('may9').disabled = true;
    document.getElementById('may10').disabled = true;
    document.getElementById('may11').disabled = true;
    document.getElementById('may12').disabled = true;
    document.getElementById('may13').disabled = true;
    document.getElementById('may14').disabled = true;
    document.getElementById('may15').disabled = true;
    document.getElementById('may16').disabled = true;
    document.getElementById('may17').disabled = true;
  }
  if(dd == 19){
    document.getElementById('may1').disabled = true;
    document.getElementById('may2').disabled = true;
    document.getElementById('may3').disabled = true;
    document.getElementById('may4').disabled = true;
    document.getElementById('may5').disabled = true;
    document.getElementById('may6').disabled = true;
    document.getElementById('may7').disabled = true;
    document.getElementById('may8').disabled = true;
    document.getElementById('may9').disabled = true;
    document.getElementById('may10').disabled = true;
    document.getElementById('may11').disabled = true;
    document.getElementById('may12').disabled = true;
    document.getElementById('may13').disabled = true;
    document.getElementById('may14').disabled = true;
    document.getElementById('may15').disabled = true;
    document.getElementById('may16').disabled = true;
    document.getElementById('may17').disabled = true;
    document.getElementById('may18').disabled = true;
  }
  if(dd == 20){
    document.getElementById('may1').disabled = true;
    document.getElementById('may2').disabled = true;
    document.getElementById('may3').disabled = true;
    document.getElementById('may4').disabled = true;
    document.getElementById('may5').disabled = true;
    document.getElementById('may6').disabled = true;
    document.getElementById('may7').disabled = true;
    document.getElementById('may8').disabled = true;
    document.getElementById('may9').disabled = true;
    document.getElementById('may10').disabled = true;
    document.getElementById('may11').disabled = true;
    document.getElementById('may12').disabled = true;
    document.getElementById('may13').disabled = true;
    document.getElementById('may14').disabled = true;
    document.getElementById('may15').disabled = true;
    document.getElementById('may16').disabled = true;
    document.getElementById('may17').disabled = true;
    document.getElementById('may18').disabled = true;
    document.getElementById('may19').disabled = true;
  }
  if(dd == 21){
    document.getElementById('may1').disabled = true;
    document.getElementById('may2').disabled = true;
    document.getElementById('may3').disabled = true;
    document.getElementById('may4').disabled = true;
    document.getElementById('may5').disabled = true;
    document.getElementById('may6').disabled = true;
    document.getElementById('may7').disabled = true;
    document.getElementById('may8').disabled = true;
    document.getElementById('may9').disabled = true;
    document.getElementById('may10').disabled = true;
    document.getElementById('may11').disabled = true;
    document.getElementById('may12').disabled = true;
    document.getElementById('may13').disabled = true;
    document.getElementById('may14').disabled = true;
    document.getElementById('may15').disabled = true;
    document.getElementById('may16').disabled = true;
    document.getElementById('may17').disabled = true;
    document.getElementById('may18').disabled = true;
    document.getElementById('may19').disabled = true;
    document.getElementById('may20').disabled = true;
  }
  if(dd == 22){
    document.getElementById('may1').disabled = true;
    document.getElementById('may2').disabled = true;
    document.getElementById('may3').disabled = true;
    document.getElementById('may4').disabled = true;
    document.getElementById('may5').disabled = true;
    document.getElementById('may6').disabled = true;
    document.getElementById('may7').disabled = true;
    document.getElementById('may8').disabled = true;
    document.getElementById('may9').disabled = true;
    document.getElementById('may10').disabled = true;
    document.getElementById('may11').disabled = true;
    document.getElementById('may12').disabled = true;
    document.getElementById('may13').disabled = true;
    document.getElementById('may14').disabled = true;
    document.getElementById('may15').disabled = true;
    document.getElementById('may16').disabled = true;
    document.getElementById('may17').disabled = true;
    document.getElementById('may18').disabled = true;
    document.getElementById('may19').disabled = true;
    document.getElementById('may20').disabled = true;
    document.getElementById('may21').disabled = true;
  }
  if(dd == 23){
    document.getElementById('may1').disabled = true;
    document.getElementById('may2').disabled = true;
    document.getElementById('may3').disabled = true;
    document.getElementById('may4').disabled = true;
    document.getElementById('may5').disabled = true;
    document.getElementById('may6').disabled = true;
    document.getElementById('may7').disabled = true;
    document.getElementById('may8').disabled = true;
    document.getElementById('may9').disabled = true;
    document.getElementById('may10').disabled = true;
    document.getElementById('may11').disabled = true;
    document.getElementById('may12').disabled = true;
    document.getElementById('may13').disabled = true;
    document.getElementById('may14').disabled = true;
    document.getElementById('may15').disabled = true;
    document.getElementById('may16').disabled = true;
    document.getElementById('may17').disabled = true;
    document.getElementById('may18').disabled = true;
    document.getElementById('may19').disabled = true;
    document.getElementById('may20').disabled = true;
    document.getElementById('may21').disabled = true;
    document.getElementById('may22').disabled = true;
  }
  if(dd == 24){
    document.getElementById('may1').disabled = true;
    document.getElementById('may2').disabled = true;
    document.getElementById('may3').disabled = true;
    document.getElementById('may4').disabled = true;
    document.getElementById('may5').disabled = true;
    document.getElementById('may6').disabled = true;
    document.getElementById('may7').disabled = true;
    document.getElementById('may8').disabled = true;
    document.getElementById('may9').disabled = true;
    document.getElementById('may10').disabled = true;
    document.getElementById('may11').disabled = true;
    document.getElementById('may12').disabled = true;
    document.getElementById('may13').disabled = true;
    document.getElementById('may14').disabled = true;
    document.getElementById('may15').disabled = true;
    document.getElementById('may16').disabled = true;
    document.getElementById('may17').disabled = true;
    document.getElementById('may18').disabled = true;
    document.getElementById('may19').disabled = true;
    document.getElementById('may20').disabled = true;
    document.getElementById('may21').disabled = true;
    document.getElementById('may22').disabled = true;
    document.getElementById('may23').disabled = true;
  }
  if(dd == 25){
    document.getElementById('may1').disabled = true;
    document.getElementById('may2').disabled = true;
    document.getElementById('may3').disabled = true;
    document.getElementById('may4').disabled = true;
    document.getElementById('may5').disabled = true;
    document.getElementById('may6').disabled = true;
    document.getElementById('may7').disabled = true;
    document.getElementById('may8').disabled = true;
    document.getElementById('may9').disabled = true;
    document.getElementById('may10').disabled = true;
    document.getElementById('may11').disabled = true;
    document.getElementById('may12').disabled = true;
    document.getElementById('may13').disabled = true;
    document.getElementById('may14').disabled = true;
    document.getElementById('may15').disabled = true;
    document.getElementById('may16').disabled = true;
    document.getElementById('may17').disabled = true;
    document.getElementById('may18').disabled = true;
    document.getElementById('may19').disabled = true;
    document.getElementById('may20').disabled = true;
    document.getElementById('may21').disabled = true;
    document.getElementById('may22').disabled = true;
    document.getElementById('may23').disabled = true;
    document.getElementById('may24').disabled = true;
  }
  if(dd == 26){
    document.getElementById('may1').disabled = true;
    document.getElementById('may2').disabled = true;
    document.getElementById('may3').disabled = true;
    document.getElementById('may4').disabled = true;
    document.getElementById('may5').disabled = true;
    document.getElementById('may6').disabled = true;
    document.getElementById('may7').disabled = true;
    document.getElementById('may8').disabled = true;
    document.getElementById('may9').disabled = true;
    document.getElementById('may10').disabled = true;
    document.getElementById('may11').disabled = true;
    document.getElementById('may12').disabled = true;
    document.getElementById('may13').disabled = true;
    document.getElementById('may14').disabled = true;
    document.getElementById('may15').disabled = true;
    document.getElementById('may16').disabled = true;
    document.getElementById('may17').disabled = true;
    document.getElementById('may18').disabled = true;
    document.getElementById('may19').disabled = true;
    document.getElementById('may20').disabled = true;
    document.getElementById('may21').disabled = true;
    document.getElementById('may22').disabled = true;
    document.getElementById('may23').disabled = true;
    document.getElementById('may24').disabled = true;
    document.getElementById('may25').disabled = true;
  }
  if(dd == 27){
    document.getElementById('may1').disabled = true;
    document.getElementById('may2').disabled = true;
    document.getElementById('may3').disabled = true;
    document.getElementById('may4').disabled = true;
    document.getElementById('may5').disabled = true;
    document.getElementById('may6').disabled = true;
    document.getElementById('may7').disabled = true;
    document.getElementById('may8').disabled = true;
    document.getElementById('may9').disabled = true;
    document.getElementById('may10').disabled = true;
    document.getElementById('may11').disabled = true;
    document.getElementById('may12').disabled = true;
    document.getElementById('may13').disabled = true;
    document.getElementById('may14').disabled = true;
    document.getElementById('may15').disabled = true;
    document.getElementById('may16').disabled = true;
    document.getElementById('may17').disabled = true;
    document.getElementById('may18').disabled = true;
    document.getElementById('may19').disabled = true;
    document.getElementById('may20').disabled = true;
    document.getElementById('may21').disabled = true;
    document.getElementById('may22').disabled = true;
    document.getElementById('may23').disabled = true;
    document.getElementById('may24').disabled = true;
    document.getElementById('may25').disabled = true;
    document.getElementById('may26').disabled = true;
  }
  if(dd == 28){
    document.getElementById('may1').disabled = true;
    document.getElementById('may2').disabled = true;
    document.getElementById('may3').disabled = true;
    document.getElementById('may4').disabled = true;
    document.getElementById('may5').disabled = true;
    document.getElementById('may6').disabled = true;
    document.getElementById('may7').disabled = true;
    document.getElementById('may8').disabled = true;
    document.getElementById('may9').disabled = true;
    document.getElementById('may10').disabled = true;
    document.getElementById('may11').disabled = true;
    document.getElementById('may12').disabled = true;
    document.getElementById('may13').disabled = true;
    document.getElementById('may14').disabled = true;
    document.getElementById('may15').disabled = true;
    document.getElementById('may16').disabled = true;
    document.getElementById('may17').disabled = true;
    document.getElementById('may18').disabled = true;
    document.getElementById('may19').disabled = true;
    document.getElementById('may20').disabled = true;
    document.getElementById('may21').disabled = true;
    document.getElementById('may22').disabled = true;
    document.getElementById('may23').disabled = true;
    document.getElementById('may24').disabled = true;
    document.getElementById('may25').disabled = true;
    document.getElementById('may26').disabled = true;
    document.getElementById('may27').disabled = true;
  }
  if(dd == 29){
    document.getElementById('may1').disabled = true;
    document.getElementById('may2').disabled = true;
    document.getElementById('may3').disabled = true;
    document.getElementById('may4').disabled = true;
    document.getElementById('may5').disabled = true;
    document.getElementById('may6').disabled = true;
    document.getElementById('may7').disabled = true;
    document.getElementById('may8').disabled = true;
    document.getElementById('may9').disabled = true;
    document.getElementById('may10').disabled = true;
    document.getElementById('may11').disabled = true;
    document.getElementById('may12').disabled = true;
    document.getElementById('may13').disabled = true;
    document.getElementById('may14').disabled = true;
    document.getElementById('may15').disabled = true;
    document.getElementById('may16').disabled = true;
    document.getElementById('may17').disabled = true;
    document.getElementById('may18').disabled = true;
    document.getElementById('may19').disabled = true;
    document.getElementById('may20').disabled = true;
    document.getElementById('may21').disabled = true;
    document.getElementById('may22').disabled = true;
    document.getElementById('may23').disabled = true;
    document.getElementById('may24').disabled = true;
    document.getElementById('may25').disabled = true;
    document.getElementById('may26').disabled = true;
    document.getElementById('may27').disabled = true;
    document.getElementById('may28').disabled = true;
  }
  if(dd == 30){
    document.getElementById('may1').disabled = true;
    document.getElementById('may2').disabled = true;
    document.getElementById('may3').disabled = true;
    document.getElementById('may4').disabled = true;
    document.getElementById('may5').disabled = true;
    document.getElementById('may6').disabled = true;
    document.getElementById('may7').disabled = true;
    document.getElementById('may8').disabled = true;
    document.getElementById('may9').disabled = true;
    document.getElementById('may10').disabled = true;
    document.getElementById('may11').disabled = true;
    document.getElementById('may12').disabled = true;
    document.getElementById('may13').disabled = true;
    document.getElementById('may14').disabled = true;
    document.getElementById('may15').disabled = true;
    document.getElementById('may16').disabled = true;
    document.getElementById('may17').disabled = true;
    document.getElementById('may18').disabled = true;
    document.getElementById('may19').disabled = true;
    document.getElementById('may20').disabled = true;
    document.getElementById('may21').disabled = true;
    document.getElementById('may22').disabled = true;
    document.getElementById('may23').disabled = true;
    document.getElementById('may24').disabled = true;
    document.getElementById('may25').disabled = true;
    document.getElementById('may26').disabled = true;
    document.getElementById('may27').disabled = true;
    document.getElementById('may28').disabled = true;
    document.getElementById('may30').disabled = true;
  }
  if(dd == 31){
    document.getElementById('may1').disabled = true;
    document.getElementById('may2').disabled = true;
    document.getElementById('may3').disabled = true;
    document.getElementById('may4').disabled = true;
    document.getElementById('may5').disabled = true;
    document.getElementById('may6').disabled = true;
    document.getElementById('may7').disabled = true;
    document.getElementById('may8').disabled = true;
    document.getElementById('may9').disabled = true;
    document.getElementById('may10').disabled = true;
    document.getElementById('may11').disabled = true;
    document.getElementById('may12').disabled = true;
    document.getElementById('may13').disabled = true;
    document.getElementById('may14').disabled = true;
    document.getElementById('may15').disabled = true;
    document.getElementById('may16').disabled = true;
    document.getElementById('may17').disabled = true;
    document.getElementById('may18').disabled = true;
    document.getElementById('may19').disabled = true;
    document.getElementById('may20').disabled = true;
    document.getElementById('may21').disabled = true;
    document.getElementById('may22').disabled = true;
    document.getElementById('may23').disabled = true;
    document.getElementById('may24').disabled = true;
    document.getElementById('may25').disabled = true;
    document.getElementById('may26').disabled = true;
    document.getElementById('may27').disabled = true;
    document.getElementById('may28').disabled = true;
    document.getElementById('may30').disabled = true;
    document.getElementById('may31').disabled = true;
  }

}

jannext.addEventListener('click',jannextclick);
function jannextclick(){
    document.getElementById("May").style.display = "none";
  document.getElementById("March").style.display = "block";
  document.getElementById("April").style.display = "none";
document.getElementById("january").style.display = "none";
document.getElementById("February").style.display = "block";
}


febprev.addEventListener('click',febprevclick);
function febprevclick(){
      document.getElementById("May").style.display = "none";
  document.getElementById("March").style.display = "block";
  document.getElementById("April").style.display = "none";
document.getElementById("january").style.display = "block";
document.getElementById("February").style.display = "none";
}
febnext.addEventListener('click',febnextclick);
function febnextclick(){
    document.getElementById("May").style.display = "none";
  document.getElementById("january").style.display = "none";
  document.getElementById("April").style.display = "none";
document.getElementById("March").style.display = "block";
document.getElementById("February").style.display = "none";
}
marchprev.addEventListener('click',marchprevclick);
function marchprevclick(){
    document.getElementById("May").style.display = "none";
document.getElementById("February").style.display = "block";
document.getElementById("March").style.display = "none";
document.getElementById("january").style.display = "none";
document.getElementById("April").style.display = "none";
}
marchnext.addEventListener('click',marchnextclick);
function marchnextclick(){
    document.getElementById("May").style.display = "none";
  document.getElementById("january").style.display = "none";
  document.getElementById("April").style.display = "block";
document.getElementById("March").style.display = "none";
document.getElementById("February").style.display = "none";
}
aprilnext.addEventListener('click',aprilnextclick);
function aprilnextclick(){
document.getElementById("May").style.display = "block";
document.getElementById("April").style.display = "none";
document.getElementById("February").style.display = "none";
document.getElementById("March").style.display = "none";
document.getElementById("january").style.display = "none";
}
aprilprev.addEventListener('click',aprilprevclick);
function aprilprevclick(){
document.getElementById("May").style.display = "none";
document.getElementById("March").style.display = "block";
document.getElementById("February").style.display = "none";
document.getElementById("january").style.display = "none";
document.getElementById("April").style.display = "none";

}
maynext.addEventListener('click',maynextclick);
function maynextclick(){
document.getElementById("May").style.display = "none";
document.getElementById("April").style.display = "none";
document.getElementById("February").style.display = "none";
document.getElementById("March").style.display = "none";
document.getElementById("january").style.display = "none";
}
mayprev.addEventListener('click',mayprevclick);
function mayprevclick(){
document.getElementById("May").style.display = "none";
document.getElementById("March").style.display = "none";
document.getElementById("February").style.display = "none";
document.getElementById("january").style.display = "none";
document.getElementById("April").style.display = "block";

}




//days January
var jan1 = document.getElementById('jan1');
var jan2 = document.getElementById('jan2');
var jan3 = document.getElementById('jan3');
var jan4 = document.getElementById('jan4');
var jan5 = document.getElementById('jan5');
var jan6 = document.getElementById('jan6');
var jan7 = document.getElementById('jan7');
var jan8 = document.getElementById('jan8');
var jan9 = document.getElementById('jan9');
var jan10 = document.getElementById('jan10');
var jan11 = document.getElementById('jan11');
var jan12 = document.getElementById('jan12');
var jan13 = document.getElementById('jan13');
var jan14 = document.getElementById('jan14');
var jan15 = document.getElementById('jan15');
var jan16 = document.getElementById('jan16');
var jan17 = document.getElementById('jan17');
var jan18 = document.getElementById('jan18');
var jan19 = document.getElementById('jan19');
var jan20 = document.getElementById('jan20');
var jan21 = document.getElementById('jan21');
var jan22 = document.getElementById('jan22');
var jan23 = document.getElementById('jan23');
var jan24 = document.getElementById('jan24');
var jan25 = document.getElementById('jan25');
var jan26 = document.getElementById('jan26');
var jan27 = document.getElementById('jan27');
var jan28 = document.getElementById('jan28');
var jan29 = document.getElementById('jan29');
var jan30 = document.getElementById('jan30');
var jan31 = document.getElementById('jan31');





jan1.addEventListener('click',openjan1);
function openjan1(){
  localStorage.setItem("tod", "Mon");
  localStorage.setItem("yr", "2018");
  localStorage.setItem("month", "1");
  localStorage.setItem("day", "01");

  window.location = "Appointment.html"
}
jan2.addEventListener('click',openjan2);
function openjan2(){
  localStorage.setItem("tod", "Tue");
  localStorage.setItem("yr", "2018");
  localStorage.setItem("month", "1");
  localStorage.setItem("day", "02");

  window.location = "Appointment.html"
}
jan3.addEventListener('click',openjan3);
function openjan3(){
  localStorage.setItem("tod", "Wed");
  localStorage.setItem("yr", "2018");
  localStorage.setItem("month", "1");
  localStorage.setItem("day", "03");

  window.location = "Appointment.html"
}
jan4.addEventListener('click',openjan4);
function openjan4(){
  localStorage.setItem("tod", "Thu");
  localStorage.setItem("yr", "2018");
  localStorage.setItem("month", "1");
  localStorage.setItem("day", "04");

  window.location = "Appointment.html"
}
jan5.addEventListener('click',openjan5);
function openjan5(){
  localStorage.setItem("tod", "Fri");
  localStorage.setItem("yr", "2018");
  localStorage.setItem("month", "1");
  localStorage.setItem("day", "05");

  window.location = "Appointment.html"
}
jan6.addEventListener('click',openjan6);
function openjan6(){
  localStorage.setItem("tod", "Sat");
  localStorage.setItem("yr", "2018");
  localStorage.setItem("month", "1");
  localStorage.setItem("day", "06");

  window.location = "Appointment.html"
}
jan7.addEventListener('click',openjan7);
function openjan7(){
  localStorage.setItem("tod", "Sun");
  localStorage.setItem("yr", "2018");
  localStorage.setItem("month", "1");
  localStorage.setItem("day", "07");

  window.location = "Appointment.html"
}
jan8.addEventListener('click',openjan8);
function openjan8(){
  localStorage.setItem("tod", "Mon");
  localStorage.setItem("yr", "2018");
  localStorage.setItem("month", "1");
  localStorage.setItem("day", "08");

  window.location = "Appointment.html"
}
jan9.addEventListener('click',openjan9);
function openjan9(){
  localStorage.setItem("tod", "Tue");
  localStorage.setItem("yr", "2018");
  localStorage.setItem("month", "1");
  localStorage.setItem("day", "09");

  window.location = "Appointment.html"
}
jan10.addEventListener('click',openjan10);
function openjan10(){
  localStorage.setItem("tod", "Wed");
  localStorage.setItem("yr", "2018");
  localStorage.setItem("month", "1");
  localStorage.setItem("day", "10");

  window.location = "Appointment.html"
}
jan11.addEventListener('click',openjan11);
function openjan11(){
  localStorage.setItem("tod", "Thu");
  localStorage.setItem("yr", "2018");
  localStorage.setItem("month", "1");
  localStorage.setItem("day", "11");

  window.location = "Appointment.html"
}
jan12.addEventListener('click',openjan12);
function openjan12(){
  localStorage.setItem("tod", "Fri");
  localStorage.setItem("yr", "2018");
  localStorage.setItem("month", "1");
  localStorage.setItem("day", "12");

  window.location = "Appointment.html"
}
jan13.addEventListener('click',openjan13);
function openjan13(){
  localStorage.setItem("tod", "Sat");
  localStorage.setItem("yr", "2018");
  localStorage.setItem("month", "1");
  localStorage.setItem("day", "13");

  window.location = "Appointment.html"
}
jan14.addEventListener('click',openjan14);
function openjan14(){
  localStorage.setItem("tod", "Sun");
  localStorage.setItem("yr", "2018");
  localStorage.setItem("month", "1");
  localStorage.setItem("day", "14");

  window.location = "Appointment.html"
}
jan15.addEventListener('click',openjan15);
function openjan15(){
  localStorage.setItem("tod", "Mon");
  localStorage.setItem("yr", "2018");
  localStorage.setItem("month", "1");
  localStorage.setItem("day", "15");

  window.location = "Appointment.html"
}
jan16.addEventListener('click',openjan16);
function openjan16(){
  localStorage.setItem("tod", "Tue");
  localStorage.setItem("yr", "2018");
  localStorage.setItem("month", "1");
  localStorage.setItem("day", "16");

  window.location = "Appointment.html"
}
jan17.addEventListener('click',openjan17);
function openjan17(){
  localStorage.setItem("tod", "Wed");
  localStorage.setItem("yr", "2018");
  localStorage.setItem("month", "1");
  localStorage.setItem("day", "17");

  window.location = "Appointment.html"
}
jan18.addEventListener('click',openjan18);
function openjan18(){
  localStorage.setItem("tod", "Thu");
  localStorage.setItem("yr", "2018");
  localStorage.setItem("month", "1");
  localStorage.setItem("day", "18");

  window.location = "Appointment.html"
}
jan19.addEventListener('click',openjan19);
function openjan19(){
  localStorage.setItem("tod", "Fri");
  localStorage.setItem("yr", "2018");
  localStorage.setItem("month", "1");
  localStorage.setItem("day", "19");

  window.location = "Appointment.html"
}
jan20.addEventListener('click',openjan20);
function openjan20(){
  localStorage.setItem("tod", "Sat");
  localStorage.setItem("yr", "2018");
  localStorage.setItem("month", "1");
  localStorage.setItem("day", "20");

  window.location = "Appointment.html"
}
jan21.addEventListener('click',openjan21);
function openjan21(){
  localStorage.setItem("tod", "Sun");
  localStorage.setItem("yr", "2018");
  localStorage.setItem("month", "1");
  localStorage.setItem("day", "21");

  window.location = "Appointment.html"
}
jan22.addEventListener('click',openjan22);
function openjan22(){
  localStorage.setItem("tod", "Mon");
  localStorage.setItem("yr", "2018");
  localStorage.setItem("month", "1");
  localStorage.setItem("day", "22");

  window.location = "Appointment.html"
}
jan23.addEventListener('click',openjan23);
function openjan23(){
  localStorage.setItem("tod", "Tue");
  localStorage.setItem("yr", "2018");
  localStorage.setItem("month", "1");
  localStorage.setItem("day", "23");

  window.location = "Appointment.html"
}
jan24.addEventListener('click',openjan24);
function openjan24(){
  localStorage.setItem("tod", "Wed");
  localStorage.setItem("yr", "2018");
  localStorage.setItem("month", "1");
  localStorage.setItem("day", "24");

  window.location = "Appointment.html"
}
jan25.addEventListener('click',openjan25);
function openjan25(){
  localStorage.setItem("tod", "Thu");
  localStorage.setItem("yr", "2018");
  localStorage.setItem("month", "1");
  localStorage.setItem("day", "25");

  window.location = "Appointment.html"
}
jan26.addEventListener('click',openjan26);
function openjan26(){
  localStorage.setItem("tod", "Fri");
  localStorage.setItem("yr", "2018");
  localStorage.setItem("month", "1");
  localStorage.setItem("day", "26");

  window.location = "Appointment.html"
}
jan27.addEventListener('click',openjan27);
function openjan27(){
  localStorage.setItem("tod", "Sat");
  localStorage.setItem("yr", "2018");
  localStorage.setItem("month", "1");
  localStorage.setItem("day", "27");

  window.location = "Appointment.html"
}
jan28.addEventListener('click',openjan28);
function openjan28(){
  localStorage.setItem("tod", "Sun");
  localStorage.setItem("yr", "2018");
  localStorage.setItem("month", "1");
  localStorage.setItem("day", "28");

  window.location = "Appointment.html"
}
jan29.addEventListener('click',openjan29);
function openjan29(){
  localStorage.setItem("tod", "Mon");
  localStorage.setItem("yr", "2018");
  localStorage.setItem("month", "1");
  localStorage.setItem("day", "29");

  window.location = "Appointment.html"
}
jan30.addEventListener('click',openjan30);
function openjan30(){
  localStorage.setItem("tod", "Tue");
  localStorage.setItem("yr", "2018");
  localStorage.setItem("month", "1");
  localStorage.setItem("day", "30");

  window.location = "Appointment.html"
}
jan31.addEventListener('click',openjan31);
function openjan31(){
  localStorage.setItem("tod", "Wed");
  localStorage.setItem("yr", "2018");
  localStorage.setItem("month", "1");
  localStorage.setItem("day", "31");

  window.location = "Appointment.html"
}

//days February
var feb1 = document.getElementById('feb1');
var feb2 = document.getElementById('feb2');
var feb3 = document.getElementById('feb3');
var feb4 = document.getElementById('feb4');
var feb5 = document.getElementById('feb5');
var feb6 = document.getElementById('feb6');
var feb7 = document.getElementById('feb7');
var feb8 = document.getElementById('feb8');
var feb9 = document.getElementById('feb9');
var feb10 = document.getElementById('feb10');
var feb11 = document.getElementById('feb11');
var feb12 = document.getElementById('feb12');
var feb13 = document.getElementById('feb13');
var feb14 = document.getElementById('feb14');
var feb15 = document.getElementById('feb15');
var feb16 = document.getElementById('feb16');
var feb17 = document.getElementById('feb17');
var feb18 = document.getElementById('feb18');
var feb19 = document.getElementById('feb19');
var feb20 = document.getElementById('feb20');
var feb21 = document.getElementById('feb21');
var feb22 = document.getElementById('feb22');
var feb23 = document.getElementById('feb23');
var feb24 = document.getElementById('feb24');
var feb25 = document.getElementById('feb25');
var feb26 = document.getElementById('feb26');
var feb27 = document.getElementById('feb27');
var feb28 = document.getElementById('feb28');





feb1.addEventListener('click',openfeb1);
function openfeb1(){
  localStorage.setItem("tod", "Thu");
  localStorage.setItem("yr", "2018");
  localStorage.setItem("month", "2");
  localStorage.setItem("day", "01");

  window.location = "Appointment.html"
}
feb2.addEventListener('click',openfeb2);
function openfeb2(){
  localStorage.setItem("tod", "Fri");
  localStorage.setItem("yr", "2018");
  localStorage.setItem("month", "2");
  localStorage.setItem("day", "02");

  window.location = "Appointment.html"
}
feb3.addEventListener('click',openfeb3);
function openfeb3(){
  localStorage.setItem("tod", "Sat");
  localStorage.setItem("yr", "2018");
  localStorage.setItem("month", "2");
  localStorage.setItem("day", "03");

  window.location = "Appointment.html"
}
feb4.addEventListener('click',openfeb4);
function openfeb4(){
  localStorage.setItem("tod", "Sun");
  localStorage.setItem("yr", "2018");
  localStorage.setItem("month", "2");
  localStorage.setItem("day", "04");

  window.location = "Appointment.html"
}
feb5.addEventListener('click',openfeb5);
function openfeb5(){
  localStorage.setItem("tod", "Mon");
  localStorage.setItem("yr", "2018");
  localStorage.setItem("month", "2");
  localStorage.setItem("day", "05");

  window.location = "Appointment.html"
}
feb6.addEventListener('click',openfeb6);
function openfeb6(){
  localStorage.setItem("tod", "Tue");
  localStorage.setItem("yr", "2018");
  localStorage.setItem("month", "2");
  localStorage.setItem("day", "06");

  window.location = "Appointment.html"
}
feb7.addEventListener('click',openfeb7);
function openfeb7(){
  localStorage.setItem("tod", "Wed");
  localStorage.setItem("yr", "2018");
  localStorage.setItem("month", "2");
  localStorage.setItem("day", "07");

  window.location = "Appointment.html"
}
feb8.addEventListener('click',openfeb8);
function openfeb8(){
  localStorage.setItem("tod", "Thu");
  localStorage.setItem("yr", "2018");
  localStorage.setItem("month", "2");
  localStorage.setItem("day", "08");

  window.location = "Appointment.html"
}
feb9.addEventListener('click',openfeb9);
function openfeb9(){
  localStorage.setItem("tod", "Fri");
  localStorage.setItem("yr", "2018");
  localStorage.setItem("month", "2");
  localStorage.setItem("day", "09");

  window.location = "Appointment.html"
}
feb10.addEventListener('click',openfeb10);
function openfeb10(){
  localStorage.setItem("tod", "Sat");
  localStorage.setItem("yr", "2018");
  localStorage.setItem("month", "2");
  localStorage.setItem("day", "10");

  window.location = "Appointment.html"
}
feb11.addEventListener('click',openfeb11);
function openfeb11(){
  localStorage.setItem("tod", "Sun");
  localStorage.setItem("yr", "2018");
  localStorage.setItem("month", "2");
  localStorage.setItem("day", "11");

  window.location = "Appointment.html"
}
feb12.addEventListener('click',openfeb12);
function openfeb12(){
  localStorage.setItem("tod", "Mon");
  localStorage.setItem("yr", "2018");
  localStorage.setItem("month", "2");
  localStorage.setItem("day", "12");

  window.location = "Appointment.html"
}
feb13.addEventListener('click',openfeb13);
function openfeb13(){
  localStorage.setItem("tod", "Tue");
  localStorage.setItem("yr", "2018");
  localStorage.setItem("month", "2");
  localStorage.setItem("day", "13");

  window.location = "Appointment.html"
}
feb14.addEventListener('click',openfeb14);
function openfeb14(){
  localStorage.setItem("tod", "Wed");
  localStorage.setItem("yr", "2018");
  localStorage.setItem("month", "2");
  localStorage.setItem("day", "14");

  window.location = "Appointment.html"
}
feb15.addEventListener('click',openfeb15);
function openfeb15(){
  localStorage.setItem("tod", "Thu");
  localStorage.setItem("yr", "2018");
  localStorage.setItem("month", "2");
  localStorage.setItem("day", "15");

  window.location = "Appointment.html"
}
feb16.addEventListener('click',openfeb16);
function openfeb16(){
  localStorage.setItem("tod", "Fri");
  localStorage.setItem("yr", "2018");
  localStorage.setItem("month", "2");
  localStorage.setItem("day", "16");

  window.location = "Appointment.html"
}
feb17.addEventListener('click',openfeb17);
function openfeb17(){
  localStorage.setItem("tod", "Sat");
  localStorage.setItem("yr", "2018");
  localStorage.setItem("month", "2");
  localStorage.setItem("day", "17");

  window.location = "Appointment.html"
}
feb18.addEventListener('click',openfeb18);
function openfeb18(){
  localStorage.setItem("tod", "Sun");
  localStorage.setItem("yr", "2018");
  localStorage.setItem("month", "2");
  localStorage.setItem("day", "18");

  window.location = "Appointment.html"
}
feb19.addEventListener('click',openfeb19);
function openfeb19(){
  localStorage.setItem("tod", "Mon");
  localStorage.setItem("yr", "2018");
  localStorage.setItem("month", "2");
  localStorage.setItem("day", "19");

  window.location = "Appointment.html"
}
feb20.addEventListener('click',openfeb20);
function openfeb20(){
  localStorage.setItem("tod", "Tue");
  localStorage.setItem("yr", "2018");
  localStorage.setItem("month", "2");
  localStorage.setItem("day", "20");

  window.location = "Appointment.html"
}
feb21.addEventListener('click',openfeb21);
function openfeb21(){
  localStorage.setItem("tod", "Wed");
  localStorage.setItem("yr", "2018");
  localStorage.setItem("month", "2");
  localStorage.setItem("day", "21");

  window.location = "Appointment.html"
}
feb22.addEventListener('click',openfeb22);
function openfeb22(){
  localStorage.setItem("tod", "Thu");
  localStorage.setItem("yr", "2018");
  localStorage.setItem("month", "2");
  localStorage.setItem("day", "22");

  window.location = "Appointment.html"
}
feb23.addEventListener('click',openfeb23);
function openfeb23(){
  localStorage.setItem("tod", "Fri");
  localStorage.setItem("yr", "2018");
  localStorage.setItem("month", "2");
  localStorage.setItem("day", "23");

  window.location = "Appointment.html"
}
feb24.addEventListener('click',openfeb24);
function openfeb24(){
  localStorage.setItem("tod", "Sat");
  localStorage.setItem("yr", "2018");
  localStorage.setItem("month", "2");
  localStorage.setItem("day", "24");

  window.location = "Appointment.html"
}
feb25.addEventListener('click',openfeb25);
function openfeb25(){
  localStorage.setItem("tod", "Sun");
  localStorage.setItem("yr", "2018");
  localStorage.setItem("month", "2");
  localStorage.setItem("day", "25");

  window.location = "Appointment.html"
}
feb26.addEventListener('click',openfeb26);
function openfeb26(){
  localStorage.setItem("tod", "Mon");
  localStorage.setItem("yr", "2018");
  localStorage.setItem("month", "2");
  localStorage.setItem("day", "26");

  window.location = "Appointment.html"
}
feb27.addEventListener('click',openfeb27);
function openfeb27(){
  localStorage.setItem("tod", "Tue");
  localStorage.setItem("yr", "2018");
  localStorage.setItem("month", "2");
  localStorage.setItem("day", "27");

  window.location = "Appointment.html"
}
feb28.addEventListener('click',openfeb28);
function openfeb28(){
  localStorage.setItem("tod", "Wed");
  localStorage.setItem("yr", "2018");
  localStorage.setItem("month", "2");
  localStorage.setItem("day", "28");

  window.location = "Appointment.html"
}

//days March
var march1 = document.getElementById('march1');
var march2 = document.getElementById('march2');
var march3 = document.getElementById('march3');
var march4 = document.getElementById('march4');
var march5 = document.getElementById('march5');
var march6 = document.getElementById('march6');
var march7 = document.getElementById('march7');
var march8 = document.getElementById('march8');
var march9 = document.getElementById('march9');
var march10 = document.getElementById('march10');
var march11 = document.getElementById('march11');
var march12 = document.getElementById('march12');
var march13 = document.getElementById('march13');
var march14 = document.getElementById('march14');
var march15 = document.getElementById('march15');
var march16 = document.getElementById('march16');
var march17 = document.getElementById('march17');
var march18 = document.getElementById('march18');
var march19 = document.getElementById('march19');
var march20 = document.getElementById('march20');
var march21 = document.getElementById('march21');
var march22 = document.getElementById('march22');
var march23 = document.getElementById('march23');
var march24 = document.getElementById('march24');
var march25 = document.getElementById('march25');
var march26 = document.getElementById('march26');
var march27 = document.getElementById('march27');
var march28 = document.getElementById('march28');
var march29 = document.getElementById('march29');
var march30 = document.getElementById('march30');
var march31 = document.getElementById('march31');





march1.addEventListener('click',openmarch1);
function openmarch1(){
  localStorage.setItem("tod", "Thu");
  localStorage.setItem("yr", "2018");
  localStorage.setItem("month", "3");
  localStorage.setItem("day", "01");

  window.location = "Appointment.html"
}
march2.addEventListener('click',openmarch2);
function openmarch2(){
  localStorage.setItem("tod", "Fri");
  localStorage.setItem("yr", "2018");
  localStorage.setItem("month", "3");
  localStorage.setItem("day", "02");

  window.location = "Appointment.html"
}
march3.addEventListener('click',openmarch3);
function openmarch3(){
  localStorage.setItem("tod", "Sat");
  localStorage.setItem("yr", "2018");
  localStorage.setItem("month", "3");
  localStorage.setItem("day", "03");

  window.location = "Appointment.html"
}
march4.addEventListener('click',openmarch4);
function openmarch4(){
  localStorage.setItem("tod", "Sun");
  localStorage.setItem("yr", "2018");
  localStorage.setItem("month", "3");
  localStorage.setItem("day", "04");

  window.location = "Appointment.html"
}
march5.addEventListener('click',openmarch5);
function openmarch5(){
  localStorage.setItem("tod", "Mon");
  localStorage.setItem("yr", "2018");
  localStorage.setItem("month", "3");
  localStorage.setItem("day", "05");

  window.location = "Appointment.html"
}
march6.addEventListener('click',openmarch6);
function openmarch6(){
  localStorage.setItem("tod", "Tue");
  localStorage.setItem("yr", "2018");
  localStorage.setItem("month", "3");
  localStorage.setItem("day", "06");

  window.location = "Appointment.html"
}
march7.addEventListener('click',openmarch7);
function openmarch7(){
  localStorage.setItem("tod", "Wed");
  localStorage.setItem("yr", "2018");
  localStorage.setItem("month", "3");
  localStorage.setItem("day", "07");

  window.location = "Appointment.html"
}
march8.addEventListener('click',openmarch8);
function openmarch8(){
  localStorage.setItem("tod", "Thu");
  localStorage.setItem("yr", "2018");
  localStorage.setItem("month", "3");
  localStorage.setItem("day", "08");

  window.location = "Appointment.html"
}
march9.addEventListener('click',openmarch9);
function openmarch9(){
  localStorage.setItem("tod", "Fri");
  localStorage.setItem("yr", "2018");
  localStorage.setItem("month", "3");
  localStorage.setItem("day", "09");

  window.location = "Appointment.html"
}
march10.addEventListener('click',openmarch10);
function openmarch10(){
  localStorage.setItem("tod", "Sat");
  localStorage.setItem("yr", "2018");
  localStorage.setItem("month", "3");
  localStorage.setItem("day", "10");

  window.location = "Appointment.html"
}
march11.addEventListener('click',openmarch11);
function openmarch11(){
  localStorage.setItem("tod", "Sun");
  localStorage.setItem("yr", "2018");
  localStorage.setItem("month", "3");
  localStorage.setItem("day", "11");

  window.location = "Appointment.html"
}
march12.addEventListener('click',openmarch12);
function openmarch12(){
  localStorage.setItem("tod", "Mon");
  localStorage.setItem("yr", "2018");
  localStorage.setItem("month", "3");
  localStorage.setItem("day", "12");

  window.location = "Appointment.html"
}
march13.addEventListener('click',openmarch13);
function openmarch13(){
  localStorage.setItem("tod", "Tue");
  localStorage.setItem("yr", "2018");
  localStorage.setItem("month", "3");
  localStorage.setItem("day", "13");

  window.location = "Appointment.html"
}
march14.addEventListener('click',openmarch14);
function openmarch14(){
  localStorage.setItem("tod", "Wed");
  localStorage.setItem("yr", "2018");
  localStorage.setItem("month", "3");
  localStorage.setItem("day", "14");

  window.location = "Appointment.html"
}
march15.addEventListener('click',openmarch15);
function openmarch15(){
  localStorage.setItem("tod", "Thu");
  localStorage.setItem("yr", "2018");
  localStorage.setItem("month", "3");
  localStorage.setItem("day", "15");

  window.location = "Appointment.html"
}
march16.addEventListener('click',openmarch16);
function openmarch16(){
  localStorage.setItem("tod", "Fri");
  localStorage.setItem("yr", "2018");
  localStorage.setItem("month", "3");
  localStorage.setItem("day", "16");

  window.location = "Appointment.html"
}
march17.addEventListener('click',openmarch17);
function openmarch17(){
  localStorage.setItem("tod", "Sat");
  localStorage.setItem("yr", "2018");
  localStorage.setItem("month", "3");
  localStorage.setItem("day", "17");

  window.location = "Appointment.html"
}
march18.addEventListener('click',openmarch18);
function openmarch18(){
  localStorage.setItem("tod", "Sun");
  localStorage.setItem("yr", "2018");
  localStorage.setItem("month", "3");
  localStorage.setItem("day", "18");

  window.location = "Appointment.html"
}
march19.addEventListener('click',openmarch19);
function openmarch19(){
  localStorage.setItem("tod", "Mon");
  localStorage.setItem("yr", "2018");
  localStorage.setItem("month", "3");
  localStorage.setItem("day", "19");

  window.location = "Appointment.html"
}
march20.addEventListener('click',openmarch20);
function openmarch20(){
  localStorage.setItem("tod", "Tue");
  localStorage.setItem("yr", "2018");
  localStorage.setItem("month", "3");
  localStorage.setItem("day", "20");

  window.location = "Appointment.html"
}
march21.addEventListener('click',openmarch21);
function openmarch21(){
  localStorage.setItem("tod", "Wed");
  localStorage.setItem("yr", "2018");
  localStorage.setItem("month", "3");
  localStorage.setItem("day", "21");

  window.location = "Appointment.html"
}
march22.addEventListener('click',openmarch22);
function openmarch22(){
  localStorage.setItem("tod", "Thu");
  localStorage.setItem("yr", "2018");
  localStorage.setItem("month", "3");
  localStorage.setItem("day", "22");

  window.location = "Appointment.html"
}
march23.addEventListener('click',openmarch23);
function openmarch23(){
  localStorage.setItem("tod", "Fri");
  localStorage.setItem("yr", "2018");
  localStorage.setItem("month", "3");
  localStorage.setItem("day", "23");

  window.location = "Appointment.html"
}
march24.addEventListener('click',openmarch24);
function openmarch24(){
  localStorage.setItem("tod", "Sat");
  localStorage.setItem("yr", "2018");
  localStorage.setItem("month", "3");
  localStorage.setItem("day", "24");

  window.location = "Appointment.html"
}
march25.addEventListener('click',openmarch25);
function openmarch25(){
  localStorage.setItem("tod", "Sun");
  localStorage.setItem("yr", "2018");
  localStorage.setItem("month", "3");
  localStorage.setItem("day", "25");

  window.location = "Appointment.html"
}
march26.addEventListener('click',openmarch26);
function openmarch26(){
  localStorage.setItem("tod", "Mon");
  localStorage.setItem("yr", "2018");
  localStorage.setItem("month", "3");
  localStorage.setItem("day", "26");

  window.location = "Appointment.html"
}
march27.addEventListener('click',openmarch27);
function openmarch27(){
  localStorage.setItem("tod", "Tue");
  localStorage.setItem("yr", "2018");
  localStorage.setItem("month", "3");
  localStorage.setItem("day", "27");

  window.location = "Appointment.html"
}
march28.addEventListener('click',openmarch28);
function openmarch28(){
  localStorage.setItem("tod", "Wed");
  localStorage.setItem("yr", "2018");
  localStorage.setItem("month", "3");
  localStorage.setItem("day", "28");

  window.location = "Appointment.html"
}
march29.addEventListener('click',openmarch29);
function openmarch29(){
  localStorage.setItem("tod", "Thu");
  localStorage.setItem("yr", "2018");
  localStorage.setItem("month", "3");
  localStorage.setItem("day", "29");

  window.location = "Appointment.html"
}
march30.addEventListener('click',openmarch30);
function openmarch30(){
  localStorage.setItem("tod", "Fri");
  localStorage.setItem("yr", "2018");
  localStorage.setItem("month", "3");
  localStorage.setItem("day", "30");

  window.location = "Appointment.html"
}
march31.addEventListener('click',openmarch31);
function openmarch31(){
  localStorage.setItem("tod", "Sat");
  localStorage.setItem("yr", "2018");
  localStorage.setItem("month", "3");
  localStorage.setItem("day", "31");

  window.location = "Appointment.html"
}

var april1 = document.getElementById('april1');
var april2 = document.getElementById('april2');
var april3 = document.getElementById('april3');
var april4 = document.getElementById('april4');
var april5 = document.getElementById('april5');
var april6 = document.getElementById('april6');
var april7 = document.getElementById('april7');
var april8 = document.getElementById('april8');
var april9 = document.getElementById('april9');
var april10 = document.getElementById('april10');
var april11 = document.getElementById('april11');
var april12 = document.getElementById('april12');
var april13 = document.getElementById('april13');
var april14 = document.getElementById('april14');
var april15 = document.getElementById('april15');
var april16 = document.getElementById('april16');
var april17 = document.getElementById('april17');
var april18 = document.getElementById('april18');
var april19 = document.getElementById('april19');
var april20 = document.getElementById('april20');
var april21 = document.getElementById('april21');
var april22 = document.getElementById('april22');
var april24 = document.getElementById('april24');
var april25 = document.getElementById('april25');
var april26 = document.getElementById('april26');
var april27 = document.getElementById('april27');
var april28 = document.getElementById('april28');
var april29 = document.getElementById('april29');
var april30 = document.getElementById('april30');

april1.addEventListener('click',openapril1);
function openapril1(){
  localStorage.setItem("tod", "Sun");
  localStorage.setItem("yr", "2018");
  localStorage.setItem("month", "4");
  localStorage.setItem("day", "01");

  window.location = "Appointment.html"
}
april2.addEventListener('click',openapril2);
function openapril2(){
  localStorage.setItem("tod", "Mon");
  localStorage.setItem("yr", "2018");
  localStorage.setItem("month", "4");
  localStorage.setItem("day", "02");

  window.location = "Appointment.html"
}
april3.addEventListener('click',openapril3);
function openapril3(){
  localStorage.setItem("tod", "Tue");
  localStorage.setItem("yr", "2018");
  localStorage.setItem("month", "4");
  localStorage.setItem("day", "03");

  window.location = "Appointment.html"
}
april4.addEventListener('click',openapril4);
function openapril4(){
  localStorage.setItem("tod", "Wed");
  localStorage.setItem("yr", "2018");
  localStorage.setItem("month", "4");
  localStorage.setItem("day", "04");

  window.location = "Appointment.html"
}
april5.addEventListener('click',openapril5);
function openapril5(){
  localStorage.setItem("tod", "Thu");
  localStorage.setItem("yr", "2018");
  localStorage.setItem("month", "4");
  localStorage.setItem("day", "05");

  window.location = "Appointment.html"
}
april6.addEventListener('click',openapril6);
function openapril6(){
  localStorage.setItem("tod", "Fri");
  localStorage.setItem("yr", "2018");
  localStorage.setItem("month", "4");
  localStorage.setItem("day", "06");

  window.location = "Appointment.html"
}
april7.addEventListener('click',openapril7);
function openapril7(){
  localStorage.setItem("tod", "Sat");
  localStorage.setItem("yr", "2018");
  localStorage.setItem("month", "4");
  localStorage.setItem("day", "07");

  window.location = "Appointment.html"
}
april8.addEventListener('click',openapril8);
function openapril8(){
  localStorage.setItem("tod", "Sun");
  localStorage.setItem("yr", "2018");
  localStorage.setItem("month", "4");
  localStorage.setItem("day", "08");

  window.location = "Appointment.html"
}
april9.addEventListener('click',openapril9);
function openapril9(){
  localStorage.setItem("tod", "Mon");
  localStorage.setItem("yr", "2018");
  localStorage.setItem("month", "4");
  localStorage.setItem("day", "09");

  window.location = "Appointment.html"
}
april10.addEventListener('click',openapril10);
function openapril10(){
  localStorage.setItem("tod", "Tue");
  localStorage.setItem("yr", "2018");
  localStorage.setItem("month", "4");
  localStorage.setItem("day", "10");

  window.location = "Appointment.html"
}
april11.addEventListener('click',openapril11);
function openapril11(){
  localStorage.setItem("tod", "Wed");
  localStorage.setItem("yr", "2018");
  localStorage.setItem("month", "4");
  localStorage.setItem("day", "11");

  window.location = "Appointment.html"
}
april12.addEventListener('click',openapril12);
function openapril12(){
  localStorage.setItem("tod", "Thu");
  localStorage.setItem("yr", "2018");
  localStorage.setItem("month", "4");
  localStorage.setItem("day", "12");

  window.location = "Appointment.html"
}
april13.addEventListener('click',openapril13);
function openapril13(){
  localStorage.setItem("tod", "Fri");
  localStorage.setItem("yr", "2018");
  localStorage.setItem("month", "4");
  localStorage.setItem("day", "13");

  window.location = "Appointment.html"
}
april14.addEventListener('click',openapril14);
function openapril14(){
  localStorage.setItem("tod", "Sat");
  localStorage.setItem("yr", "2018");
  localStorage.setItem("month", "4");
  localStorage.setItem("day", "14");

  window.location = "Appointment.html"
}
april15.addEventListener('click',openapril15);
function openapril15(){
  localStorage.setItem("tod", "Sun");
  localStorage.setItem("yr", "2018");
  localStorage.setItem("month", "4");
  localStorage.setItem("day", "15");

  window.location = "Appointment.html"
}
april16.addEventListener('click',openapril16);
function openapril16(){
  localStorage.setItem("tod", "Mon");
  localStorage.setItem("yr", "2018");
  localStorage.setItem("month", "4");
  localStorage.setItem("day", "16");

  window.location = "Appointment.html"
}
april17.addEventListener('click',openapril17);
function openapril17(){
  localStorage.setItem("tod", "Tue");
  localStorage.setItem("yr", "2018");
  localStorage.setItem("month", "4");
  localStorage.setItem("day", "17");

  window.location = "Appointment.html"
}
april18.addEventListener('click',openapril18);
function openapril18(){
  localStorage.setItem("tod", "Wed");
  localStorage.setItem("yr", "2018");
  localStorage.setItem("month", "4");
  localStorage.setItem("day", "18");

  window.location = "Appointment.html"
}
april19.addEventListener('click',openapril19);
function openapril19(){
  localStorage.setItem("tod", "Thu");
  localStorage.setItem("yr", "2018");
  localStorage.setItem("month", "4");
  localStorage.setItem("day", "19");

  window.location = "Appointment.html"
}
april20.addEventListener('click',openapril20);
function openapril20(){
  localStorage.setItem("tod", "Fri");
  localStorage.setItem("yr", "2018");
  localStorage.setItem("month", "4");
  localStorage.setItem("day", "20");

  window.location = "Appointment.html"
}
april21.addEventListener('click',openapril21);
function openapril21(){
  localStorage.setItem("tod", "Sat");
  localStorage.setItem("yr", "2018");
  localStorage.setItem("month", "4");
  localStorage.setItem("day", "21");

  window.location = "Appointment.html"
}
april22.addEventListener('click',openapril22);
function openapril22(){
  localStorage.setItem("tod", "Sun");
  localStorage.setItem("yr", "2018");
  localStorage.setItem("month", "4");
  localStorage.setItem("day", "22");

  window.location = "Appointment.html"
}
april23.addEventListener('click',openapril23);
function openapril23(){
  localStorage.setItem("tod", "Mon");
  localStorage.setItem("yr", "2018");
  localStorage.setItem("month", "4");
  localStorage.setItem("day", "23");

  window.location = "Appointment.html"
}
april24.addEventListener('click',openapril24);
function openapril24(){
  localStorage.setItem("tod", "Tue");
  localStorage.setItem("yr", "2018");
  localStorage.setItem("month", "4");
  localStorage.setItem("day", "24");

  window.location = "Appointment.html"
}
april25.addEventListener('click',openapril25);
function openapril25(){
  localStorage.setItem("tod", "Wed");
  localStorage.setItem("yr", "2018");
  localStorage.setItem("month", "4");
  localStorage.setItem("day", "25");

  window.location = "Appointment.html"
}
april26.addEventListener('click',openapril26);
function openapril26(){
  localStorage.setItem("tod", "Thu");
  localStorage.setItem("yr", "2018");
  localStorage.setItem("month", "4");
  localStorage.setItem("day", "26");

  window.location = "Appointment.html"
}
april27.addEventListener('click',openapril27);
function openapril27(){
  localStorage.setItem("tod", "Fri");
  localStorage.setItem("yr", "2018");
  localStorage.setItem("month", "4");
  localStorage.setItem("day", "27");

  window.location = "Appointment.html"
}
april28.addEventListener('click',openapril28);
function openapril28(){
  localStorage.setItem("tod", "Sat");
  localStorage.setItem("yr", "2018");
  localStorage.setItem("month", "4");
  localStorage.setItem("day", "28");

  window.location = "Appointment.html"
}
april29.addEventListener('click',openapril29);
function openapril29(){
  localStorage.setItem("tod", "Sun");
  localStorage.setItem("yr", "2018");
  localStorage.setItem("month", "4");
  localStorage.setItem("day", "29");

  window.location = "Appointment.html"
}
april30.addEventListener('click',openapril30);
function openapril30(){
  localStorage.setItem("tod", "Mon");
  localStorage.setItem("yr", "2018");
  localStorage.setItem("month", "4");
  localStorage.setItem("day", "30");

  window.location = "Appointment.html"
}
//days January
var may1 = document.getElementById('may1');
var may2 = document.getElementById('may2');
var may3 = document.getElementById('may3');
var may4 = document.getElementById('may4');
var may5 = document.getElementById('may5');
var may6 = document.getElementById('may6');
var may7 = document.getElementById('may7');
var may8 = document.getElementById('may8');
var may9 = document.getElementById('may9');
var may10 = document.getElementById('may10');
var may11 = document.getElementById('may11');
var may12 = document.getElementById('may12');
var may13 = document.getElementById('may13');
var may14 = document.getElementById('may14');
var may15 = document.getElementById('may15');
var may16 = document.getElementById('may16');
var may17 = document.getElementById('may17');
var may18 = document.getElementById('may18');
var may19 = document.getElementById('may19');
var may20 = document.getElementById('may20');
var may21 = document.getElementById('may21');
var may22 = document.getElementById('may22');
var may23 = document.getElementById('may23');
var may24 = document.getElementById('may24');
var may25 = document.getElementById('may25');
var may26 = document.getElementById('may26');
var may27 = document.getElementById('may27');
var may28 = document.getElementById('may28');
var may29 = document.getElementById('may29');
var may30 = document.getElementById('may30');
var may31 = document.getElementById('may31');

may1.addEventListener('click',openmay1);
function openmay1(){
  localStorage.setItem("tod", "Tue");
  localStorage.setItem("yr", "2018");
  localStorage.setItem("month", "5");
  localStorage.setItem("day", "01");

  window.location = "Appointment.html"
}
may2.addEventListener('click',openmay2);
function openmay2(){
  localStorage.setItem("tod", "Wed");
  localStorage.setItem("yr", "2018");
  localStorage.setItem("month", "5");
  localStorage.setItem("day", "02");

  window.location = "Appointment.html"
}
may3.addEventListener('click',openmay3);
function openmay3(){
  localStorage.setItem("tod", "Thu");
  localStorage.setItem("yr", "2018");
  localStorage.setItem("month", "5");
  localStorage.setItem("day", "03");

  window.location = "Appointment.html"
}
may4.addEventListener('click',openmay4);
function openmay4(){
  localStorage.setItem("tod", "Fri");
  localStorage.setItem("yr", "2018");
  localStorage.setItem("month", "5");
  localStorage.setItem("day", "04");

  window.location = "Appointment.html"
}
may5.addEventListener('click',openmay5);
function openmay5(){
  localStorage.setItem("tod", "Sat");
  localStorage.setItem("yr", "2018");
  localStorage.setItem("month", "5");
  localStorage.setItem("day", "05");

  window.location = "Appointment.html"
}
may6.addEventListener('click',openmay6);
function openmay6(){
  localStorage.setItem("tod", "Sun");
  localStorage.setItem("yr", "2018");
  localStorage.setItem("month", "5");
  localStorage.setItem("day", "06");

  window.location = "Appointment.html"
}
may7.addEventListener('click',openmay7);
function openmay7(){
  localStorage.setItem("tod", "Mon");
  localStorage.setItem("yr", "2018");
  localStorage.setItem("month", "5");
  localStorage.setItem("day", "07");

  window.location = "Appointment.html"
}
may8.addEventListener('click',openmay8);
function openmay8(){
  localStorage.setItem("tod", "Tue");
  localStorage.setItem("yr", "2018");
  localStorage.setItem("month", "5");
  localStorage.setItem("day", "08");

  window.location = "Appointment.html"
}
may9.addEventListener('click',openmay9);
function openmay9(){
  localStorage.setItem("tod", "Wed");
  localStorage.setItem("yr", "2018");
  localStorage.setItem("month", "5");
  localStorage.setItem("day", "09");

  window.location = "Appointment.html"
}
may10.addEventListener('click',openmay10);
function openmay10(){
  localStorage.setItem("tod", "Thu");
  localStorage.setItem("yr", "2018");
  localStorage.setItem("month", "5");
  localStorage.setItem("day", "10");

  window.location = "Appointment.html"
}
may11.addEventListener('click',openmay11);
function openmay11(){
  localStorage.setItem("tod", "Fri");
  localStorage.setItem("yr", "2018");
  localStorage.setItem("month", "5");
  localStorage.setItem("day", "11");

  window.location = "Appointment.html"
}
may12.addEventListener('click',openmay12);
function openmay12(){
  localStorage.setItem("tod", "Sat");
  localStorage.setItem("yr", "2018");
  localStorage.setItem("month", "5");
  localStorage.setItem("day", "12");

  window.location = "Appointment.html"
}
may13.addEventListener('click',openmay13);
function openmay13(){
  localStorage.setItem("tod", "Sun");
  localStorage.setItem("yr", "2018");
  localStorage.setItem("month", "5");
  localStorage.setItem("day", "13");

  window.location = "Appointment.html"
}
may14.addEventListener('click',openmay14);
function openmay14(){
  localStorage.setItem("tod", "Mon");
  localStorage.setItem("yr", "2018");
  localStorage.setItem("month", "5");
  localStorage.setItem("day", "14");

  window.location = "Appointment.html"
}
may15.addEventListener('click',openmay15);
function openmay15(){
  localStorage.setItem("tod", "Tue");
  localStorage.setItem("yr", "2018");
  localStorage.setItem("month", "5");
  localStorage.setItem("day", "15");

  window.location = "Appointment.html"
}
may16.addEventListener('click',openmay16);
function openmay16(){
  localStorage.setItem("tod", "Wed");
  localStorage.setItem("yr", "2018");
  localStorage.setItem("month", "5");
  localStorage.setItem("day", "16");

  window.location = "Appointment.html"
}
may17.addEventListener('click',openmay17);
function openmay17(){
  localStorage.setItem("tod", "Thu");
  localStorage.setItem("yr", "2018");
  localStorage.setItem("month", "5");
  localStorage.setItem("day", "17");

  window.location = "Appointment.html"
}
may18.addEventListener('click',openmay18);
function openmay18(){
  localStorage.setItem("tod", "Fri");
  localStorage.setItem("yr", "2018");
  localStorage.setItem("month", "5");
  localStorage.setItem("day", "18");

  window.location = "Appointment.html"
}
may19.addEventListener('click',openmay19);
function openmay19(){
  localStorage.setItem("tod", "Sat");
  localStorage.setItem("yr", "2018");
  localStorage.setItem("month", "5");
  localStorage.setItem("day", "19");

  window.location = "Appointment.html"
}
may20.addEventListener('click',openmay20);
function openmay20(){
  localStorage.setItem("tod", "Sun");
  localStorage.setItem("yr", "2018");
  localStorage.setItem("month", "5");
  localStorage.setItem("day", "20");

  window.location = "Appointment.html"
}
may21.addEventListener('click',openmay21);
function openmay21(){
  localStorage.setItem("tod", "Mon");
  localStorage.setItem("yr", "2018");
  localStorage.setItem("month", "5");
  localStorage.setItem("day", "21");

  window.location = "Appointment.html"
}
may22.addEventListener('click',openmay22);
function openmay22(){
  localStorage.setItem("tod", "Tue");
  localStorage.setItem("yr", "2018");
  localStorage.setItem("month", "5");
  localStorage.setItem("day", "22");

  window.location = "Appointment.html"
}
may23.addEventListener('click',openmay23);
function openmay23(){
  localStorage.setItem("tod", "Wed");
  localStorage.setItem("yr", "2018");
  localStorage.setItem("month", "5");
  localStorage.setItem("day", "23");

  window.location = "Appointment.html"
}
may24.addEventListener('click',openmay24);
function openmay24(){
  localStorage.setItem("tod", "Thu");
  localStorage.setItem("yr", "2018");
  localStorage.setItem("month", "5");
  localStorage.setItem("day", "24");

  window.location = "Appointment.html"
}
may25.addEventListener('click',openmay25);
function openmay25(){
  localStorage.setItem("tod", "Fri");
  localStorage.setItem("yr", "2018");
  localStorage.setItem("month", "5");
  localStorage.setItem("day", "25");

  window.location = "Appointment.html"
}
may26.addEventListener('click',openmay26);
function openmay26(){
  localStorage.setItem("tod", "Sat");
  localStorage.setItem("yr", "2018");
  localStorage.setItem("month", "5");
  localStorage.setItem("day", "26");

  window.location = "Appointment.html"
}
may27.addEventListener('click',openmay27);
function openmay27(){
  localStorage.setItem("tod", "Sun");
  localStorage.setItem("yr", "2018");
  localStorage.setItem("month", "5");
  localStorage.setItem("day", "27");

  window.location = "Appointment.html"
}
may28.addEventListener('click',openmay28);
function openmay28(){
  localStorage.setItem("tod", "Mon");
  localStorage.setItem("yr", "2018");
  localStorage.setItem("month", "5");
  localStorage.setItem("day", "28");

  window.location = "Appointment.html"
}
may29.addEventListener('click',openmay29);
function openmay29(){
  localStorage.setItem("tod", "Tue");
  localStorage.setItem("yr", "2018");
  localStorage.setItem("month", "5");
  localStorage.setItem("day", "29");

  window.location = "Appointment.html"
}
may30.addEventListener('click',openmay30);
function openmay30(){
  localStorage.setItem("tod", "Wed");
  localStorage.setItem("yr", "2018");
  localStorage.setItem("month", "5");
  localStorage.setItem("day", "30");

  window.location = "Appointment.html"
}
may31.addEventListener('click',openmay31);
function openmay31(){
  localStorage.setItem("tod", "Thu");
  localStorage.setItem("yr", "2018");
  localStorage.setItem("month", "5");
  localStorage.setItem("day", "31");

  window.location = "Appointment.html"
}
// Get the modal
var modal = document.getElementById('simpleModal');
var editmodal = document.getElementById('editmodal');

// Get the button that opens the modal

// Get the <span> element that closes the modal
var span = document.getElementById("closeBtn");
var editclose = document.getElementById("editcloseBtn");

editclose.addEventListener('click',editClosed);
function editClosed(){
  editmodal.style.display = "none";
}

// When the user clicks the button, open the modal

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
    location.reload();
}
