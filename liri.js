// 

// var spotify = require("spotify")


if (process.argv[2] == "movie"){
var request = require('request');
var movieName = []
// Then run a request to the OMDB API with the movie specified 
for (x=3;x<process.argv.length;x++)
{	var movieWord = process.argv[x]
	movieName.push(movieWord)
}



var queryUrl = 'http://www.omdbapi.com/?t=' + movieName +'&y=&plot=short&r=json';

// This line is just to help us debug against the actual URL.  
// 

request(queryUrl, function (error, response, body) {

	if (!error && response.statusCode == 200) {

		// Parse the body of the site and recover just the imdbRating
		// (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it). 
		console.log(JSON.parse(body)["Title"]);
		console.log(JSON.parse(body)["Year"]);
		console.log("The movie's IMDB rating is: " + JSON.parse(body)["imdbRating"])
		console.log("It was made in " + JSON.parse(body)["Country"]);
		console.log("And is in " + JSON.parse(body)["Language"]);
		console.log(JSON.parse(body)["Year"]);
		console.log("Plot: " + JSON.parse(body)["Plot"]);
		console.log("Starring: " + JSON.parse(body)["Actors"]);

	}
});
}

if (process.argv[2] == "spotify"){
	var spotify = require('spotify');
 
spotify.search({ type: 'track', query: 'dancing in the moonlight' }, function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    }
 	
    // Do something with 'data'
    console.log(data)
});
}

// if (process.argv[2] == "twitter"){
// 	var Twitter = require('twitter');
//  	var keys = require("./keys.js")
// 	var client = new Twitter({
// 	  consumer_key: keys.consumer_key,
// 	  consumer_secret: keys.consumer_secret,
// 	  access_token_key: keys.access_token_key,
// 	  access_token_secret: keys.access_token_secret
// 	});
// 	console.log(client)
// 	var params = {screen_name: 'nodejs'};
// 	client.get('statuses/user_timeline', params, function(error, tweets, response) {
// 	  if (!error) {
// 	    console.log(tweets);
// 	  }
// 	});