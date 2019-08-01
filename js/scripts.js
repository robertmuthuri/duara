filterSelection("all")
function filterSelection(c) {
 var x, i;
 x = document.getElementsByClassName("column");
 if (c == "all") c = "";
 for (i = 0; i < x.length; i++) {
   w3RemoveClass(x[i], "show");
   if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
 }
}

function w3AddClass(element, name) {
 var i, arr1, arr2;
 arr1 = element.className.split(" ");
 arr2 = name.split(" ");
 for (i = 0; i < arr2.length; i++) {
   if (arr1.indexOf(arr2[i]) == -1) { element.className += " " + arr2[i]; }
 }
}

function w3RemoveClass(element, name) {
 var i, arr1, arr2;
 arr1 = element.className.split(" ");
 arr2 = name.split(" ");
 for (i = 0; i < arr2.length; i++) {
   while (arr1.indexOf(arr2[i]) > -1) {
     arr1.splice(arr1.indexOf(arr2[i]), 1);
   }
 }
 element.className = arr1.join(" ");
}


//Add active class to the current button(highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
 btns[i].addEventListener("click", function () {
   var current = document.getElementsByClassName("active");
   current[0].className = current[0].className.replace(" active", "");
   this.className += " active";
 });
}
$(document).ready(function() {
	$(window).scroll(function() {
  	if($(document).scrollTop() > 10) {
    	$('#nav').addClass('change');
    }
    else {
    $('#nav').removeClass('change');
    }
  });
});
//Business logic
const rates = {
	"low": 10,000,
	"medium": 20000,
	"high": 30000
};

//booking
function Booking() {
	this.artist = {
		"name": false,
		"stageName": false,
		"rateCard": false,
		"specialization": false,
	};
	this.date = false;
	this.venue = false;
	this.type = false;
	this.budget = 0;
	this.contact = {
		"phone": false,
		"email": false,
		"street": false,
		"city": false,
		"county": false,
	};
	this.totalPrice = 0;
}

//Prototype to set rate card
Booking.prototype.setRate = function(rate) {
		this.rate = rate;
		this.totalPrice += rates[rate];
};

// Booking Order
function BookingOrder() {
	this.bookings = [];
	this.finalPrice = 0;
}

//Create method for tallying final bookings price
BookingOrder.prototype.calculateFinalPrice = function () {
	this.finalPrice = this.bookings.reduce(function (booking1, booking2) {
		return booking1.totalPrice + booking2.totalPrice;
	});
	return this.finalPrice;
};

//Interface logic
$(function () {
 var myBooking = new BookingOrder();
	
 $("form#")
});

