$.getJSON("https://api.myjson.com/bins/jpv7k", function showInfo(add) {


    towerone= add.info[0].nameTowers;
	addone= add.info[0].address;
	cityone= add.info[0].city;

	towertwo= add.info[1].nameTowers;
	addtwo= add.info[1].address;
	citytwo= add.info[1].city;

	towerthree= add.info[2].nameTowers;
	addthree= add.info[2].address;
	citythree= add.info[2].city;

	

var favorite = {
	"towers": [
		{
			"name": towerone,
			"photo": "eneldrive",
			"address": addone,
			"city": cityone,
		},
		{
			"name": towertwo,
			"photo": "enelx",
			"address": addtwo,
			"city": citytwo
		},
		{
			"name": towerthree,
			"photo": "teslat",
			"address": addthree,
			"city": citythree,
		},
		
	]
}

$(document).ready(function(){

	var towersTemplate = $("#towers-template").html();

	var compiledtowersTemplate = Handlebars.compile(towersTemplate);
	$(".towers-list-container").html(compiledtowersTemplate(favorite));
});


})
