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

