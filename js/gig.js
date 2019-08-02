function gig(startDate, finishDate, location, type, name, email, number, budget, aob){
  this.startDate= startDate;
  this.finishDate= finishDate;
  this.location= location;
  this.type= type;
  this.name=name;
  this.email=email;
  this.number=number;
  this.budget=budget;
  this.aob=aob;
}

$(document).ready(function(){
  $("form#gig").submit(function(e){
    event.preventDefault();
    var date1= $("#gig-date").val();
    var eLocation=$("#location").val();
    var eType=$("#gig-type option:selected").val();
    var pName=$("#name").val();
    var pEmail=$("#mail").val();
    var pNumber=$("#phone-number").val();
    var pBudget=$("#budget").val();
    var aOB=$("#aob").val();

    var newGig = new gig(date1, date2, eLocation, eType, pName, pEmail, pNumber, pBudget, aOB);
    
    $("#bookings").append(date1 +"<br>"+ eType);
  });
});
