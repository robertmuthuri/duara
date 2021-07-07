function promoter(name, email, number, budget, aob){
  this.name=name;
  this.email=email;
  this.number=number;
  this.budget=budget;
  this.aob=aob;
}
$(document).ready(function(){
  $("form#promoter").submit(function(e){
    event.preventDefault();
    var pName=$("#name").val();
    var pEmail=$("#mail").val();
    var pNumber=$("#phone-number").val();
    var pBudget=$("#budget").val();
    var aOB=$("#aob").val();

    var newpromoter = new promoter(pName, pEmail, pNumber, pBudget, aOB);
    alert(pEmail);
  });
});
