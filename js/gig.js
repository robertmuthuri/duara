function gig(startDate, finishDate, location, type){
  this.startDate= startDate;
  this.finishDate= finishDate;
  this.location= location;
  this.type= type;
}

$(document).ready(function(){
  $("form#gig").submit(function(e){
    event.preventDefault();
    var date1= $("#start-date").val();
    var date2= $("#finish-date").val();
    var eLocation=$("#location").val();
    var eType=$("#gig-type option:selected").val();

    var newGig = new gig(date1, date2, eLocation, eType);
    alert(eType);
  });
});
