  document.getElementById("imgbtn").style.display = "none";

var selectedfile = "";
var id = localStorage.idtext;
  var browse = document.getElementById('imageupload');

  function browseClick(){
  document.getElementById("imgbtn").style.display = "block";
  document.getElementById("imageupload").style.display = "none";

  selectedfile = event.target.files[0];

  }

  function uploadfile(){
  document.getElementById("imageupload").style.display = "block";

  var filename = selectedfile.name;

  var bases = firebase.storage().ref("/image/" + filename);
  var uploadTask = bases.put(selectedfile);

      // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on('state_changed', function(snapshot){
      // Observe state change events such as progress, pause, and resume
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log('Upload is ' + progress + '% done');
      switch (snapshot.state) {
        case firebase.storage.TaskState.PAUSED: // or 'paused'
          console.log('Upload is paused');
          break;
        case firebase.storage.TaskState.RUNNING: // or 'running'
          console.log('Upload is running');
          break;
      }
    }, function(error) {
      // Handle unsuccessful uploads
    }, function() {
      // Handle successful uploads on complete
      // For instance, get the download URL: https://firebasestorage.googleapis.com/...
      var downloadURL = uploadTask.snapshot.downloadURL;
      var bases = firebase.database().ref();
      var newbase = bases.child("patient");
      var firebaseRef = newbase.child(id);
        firebaseRef.child("imageUrl").set(downloadURL);
    });

      }
