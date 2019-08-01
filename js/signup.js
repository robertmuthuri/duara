function artist(name, password, confirm, email, gender, dob){
  this.name=name;
  this.password=password;
  this.confirm=confirm;
  this.email=email;
  this.gender=gender;
  this.dob=dob;
}

$(document).ready(function(){
  $("form#sign-up").submit(function(e){
    event.preventDefault();
    var aName=$("input#name").val();
    var pWord=$("input#password").val();
    var cPWord=$("input#confirm-password").val();
    var mail=$("input#email").val();
    var gender=$("input#gender").val();
    var bDay=$("input#birthday").val();

    var newArtist= new artist(aName, pWord, cPWord, mail, gender, bDay);
    if($("#password").val() !== $("#confirm-password").val()){
      alert("passwords dont match!!");
    }

  });
});
