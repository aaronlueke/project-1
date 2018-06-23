var quotes = [
	{
		quote: "Saying nice things is easy. The hard part is not sounding sarcastic.",
	 	source: "Jessica Walter as Lucille Bluth",
		citation: "Arrested Development",
	 	year: 2018
	},
	{
		quote: "Sometimes you gotta work a little so you can ball a lot.",
		source: "Aziz Ansari as Tom Haverford",
		citation: "Parks and Recreation",
		year: 2012
	},
	{
		quote: "You guys, the bathroom here is nuts.",
	 	source: "Bill Hader as Dave",
		citation: "Hot Rod",
	 	year: 2007
	},
	{
		quote: "Dwight, you ignorant slut.",
	 	source: "Steve Carell as Michael Scott",
		citation: "The Office",
	 	year: 2007
	},
	{
		quote: "But where did the lighter fluid come from?",
	 	source: "Will Arnett as Gob Bluth",
		citation: "Arrested Development",
	},
	{
		quote: "There's a lot of attitudes going on around here... don't let me catch one.",
	 	source: "Jason Schwartzman as Ash",
		citation: "Fantastic Mr. Fox",
	 	year: 2009
	},
	{
		quote: "Well, well, well, how the turntables...",
	 	source: "Steve Carell as Michael Scott",
		ciation: "The Office",
	 	year: 2009
	}
];

var quote = quotes.quote;
var source = quotes.source;
var citation = quotes.citation;
var year = quotes.year;

function getRandomQuote() {
	var randQuote = quotes[Math.floor(Math.random() * quotes.length)];
	return randQuote;
}

function printQuote() {
	var message = getRandomQuote();
	message = "<h1 class='quote'>" + quote + "</h1>";
	message += "<p class='source'>" + source + "<p>";
	message += "<span class='citation'>" + citation + "</span>";
	
	if (year !== undefined) {
      message += "<span class='year'>" + year + "</span>";
    } else {
      message.getElementByClassName(".year").hide();
    }
	 
	document.getElementById("quote-box").innerHTML = message;
}

document.getElementById('loadQuote').addEventListener("click", printQuote, false);