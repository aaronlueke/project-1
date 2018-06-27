/*jshint esversion: 6 */

//array of quotes
var quotes = [
	{
		quote: "Saying nice things is easy. The hard part is not sounding sarcastic.",
	 	source: "Jessica Walter as Lucille Bluth",
		citation: "Arrested Development",
	 	year: 2018,
		category: "TV"
	},
	{
		quote: "Sometimes you gotta work a little so you can ball a lot.",
		source: "Aziz Ansari as Tom Haverford",
		citation: "Parks and Recreation",
		year: 2012,
		category: "TV"
	},
	{
		quote: "You guys, the bathroom here is nuts.",
	 	source: "Bill Hader as Dave",
		citation: "Hot Rod",
	 	year: 2007,
		category: "Film"
	},
	{
		quote: "Dwight, you ignorant slut.",
	 	source: "Steve Carell as Michael Scott",
		citation: "The Office",
	 	year: 2007,
		category: "TV"
	},
	{
		quote: "I've made a huge mistake.",
	 	source: "Bluth Family",
		citation: "Arrested Development",
		category: "TV"
	},
	{
		quote: "There's a lot of attitudes going on around here... don't let me catch one.",
	 	source: "Jason Schwartzman as Ash",
		citation: "Fantastic Mr. Fox",
	 	year: 2009,
		category: "Film"
	},
	{
		quote: "Well, well, well, how the turntables...",
	 	source: "Steve Carell as Michael Scott",
		citation: "The Office",
	 	year: 2009,
		category: "TV"
	}
];

//function to randomly select a quote
function getRandomQuote() {
  var randQuote = quotes[Math.floor(Math.random() * quotes.length)];
  return randQuote;
}

//function to pull information from the random quote
function printQuote() {
  var newQuote = getRandomQuote();	
  var message = "<p class='quote'>" + newQuote.quote + "</p>";
  message += "<p><span class='source'>" + newQuote.source + "</span>";
  message += "<span class='citation'>" + newQuote.citation + "</span></p>";
	
  //checks if there is a 'year' property
  if (newQuote.year !== undefined) {
  message += "<span class='year'>" + newQuote.year + "</span>";
  } 
	
  message += "<span>, " + newQuote.category + "</span>";
	
  //pushes quote to the document
  document.getElementById("quote-box").innerHTML = message;
}

//listens for button to be clicked to load new quote
document.getElementById('loadQuote').addEventListener('click', printQuote, false);


//function to get a random background color
function getBgColor() {
  var newColor1 = parseInt(Math.floor(Math.random() * 255));
  var newColor2 = parseInt(Math.floor(Math.random() * 255));
  var newColor3 = parseInt(Math.floor(Math.random() * 255));
  var bgColor = "rgb(" + newColor1 + "," + newColor2 + "," + newColor3 + ")";

  document.getElementsByTagName('body')[0].style.backgroundColor = bgColor;
	
  //targets button to match changing background color
  document.getElementById('loadQuote').style.backgroundColor = bgColor;
}

//listens for button to be click to change background color
document.getElementById('loadQuote').addEventListener('click', getBgColor, false);


//function to automatically load next quote
function autoClick() {
  document.getElementById('loadQuote').click();
}

window.setInterval(autoClick, 5000);