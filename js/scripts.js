//Business logic
//global variable declarations


<!--Constructors: artist, event, promoter, contact, event-type-->
<!--Artist-->
function Artist(name, stageName,rateCard, specialization, availability,) {
	this.name = name;
	this.stageName = stageName;
	this.rateCard = rateCard;
	this.specialization = specialization;
}
<!--event-->
function Event(name, startDate, endDate, Type) {
	this.name = name;
	this.startDate = startDate;
	this.endDate = endDate;
	this.type = function Type(concert,club,wedding,graduation,birthday,newYear,){
		this.converters = concert;
		this.club = club;
		this.wedding = wedding;
		this.graduation = graduation;
		this.birthday = birthday;
		this.newYear = newYear;
	}
}
<!--promote-->
function Promoter(name, contact,budget,notes )  {
	this.name = name;
	this.contact = contact;
	this.budget = budget;
	this.notes = notes;
}

<!--Methods-->
<!--Artist availability-->


