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
		 var fs = require('fs'); 

		// This block of code will create a file called "movies.txt".
		// It will then print "Inception, Die Hard" in the file
		fs.appendFile("movies.txt", movieName + "  ", function(err) {
		    
			// If the code experiences any errors it will log the error to the console. 
		    if(err) {
		        return console.log(err);
		    }

		    // Otherwise, it will print: "movies.txt was updated!"
		    console.log("movies.txt was updated!");
		}); 

	}
});
}

if (process.argv[2] == "spotify"){
	var spotify = require('spotify');
 	var movieName = []
// Then run a request to the OMDB API with the movie specified 
	for (x=3;x<process.argv.length;x++)
	{	var movieWord = process.argv[x]
		movieName.push(movieWord)
	}
spotify.search({ type: 'track', query: movieName }, function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    }
 	
    console.log("That is a song by " + data.tracks.items[0].artists[0].name)
    console.log("called " + data.tracks.items[0].name)
    console.log("You can find a preview here " + data.tracks.items[0].preview_url)
    console.log("And it's on the album " + data.tracks.items[0].album.name)

    var fs = require('fs'); 

// This block of code will create a file called "movies.txt".
// It will then print "Inception, Die Hard" in the file
fs.appendFile("spotify.txt", movieName + "  ", function(err) {
    
	// If the code experiences any errors it will log the error to the console. 
    if(err) {
        return console.log(err);
    }

    // Otherwise, it will print: "movies.txt was updated!"
    console.log("spotify.txt was updated!");
}); 
});
}

if (process.argv[2] == "twitter"){
var Twitter = require('twitter');
var keys = require("./keys.js") 

var client = new Twitter({
  consumer_key: keys.twitterKeys.consumer_key,
  consumer_secret: keys.twitterKeys.consumer_secret,
  access_token_key: keys.twitterKeys.access_token_key,
  access_token_secret: keys.twitterKeys.access_token_secret
});
 // console.log (keys)
var screen_name = process.argv[3];
var params = {screen_name: screen_name};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
  	for (x=0;x<20;x++)
    console.log(tweets[x].text);
	  var fs = require('fs'); 

	// This block of code will create a file called "movies.txt".
	// It will then print "Inception, Die Hard" in the file
	fs.appendFile("twitter.txt", screen_name + "  ", function(err) {
	    
		// If the code experiences any errors it will log the error to the console. 
	    if(err) {
	        return console.log(err);
	    }

	    // Otherwise, it will print: "movies.txt was updated!"
	    console.log("twitter.txt was updated!");
	}); 
  }
});
}

if (process.argv[2] == "do-what-it-says"){
	var fs = require('fs');
	var spotify = require('spotify');
	fs.readFile("random.txt", "utf8", function(error, data){
		console.log(data);

	var dataArr = data.split(' ');

	// console.log(dataArr);
	var movieName = []
	for (x=1;x<dataArr.length;x++)
	{	var movieWord = dataArr[x]
		movieName.push(movieWord)
	}
	// console.log(movieName)
	spotify.search({ type: 'track', query: movieName }, function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    }
 	
    console.log("That is a song by " + data.tracks.items[0].artists[0].name)
    console.log("called " + data.tracks.items[0].name)
    console.log("You can find a preview here " + data.tracks.items[0].preview_url)
    console.log("And it's on the album " + data.tracks.items[0].album.name)


// This block of code will create a file called "movies.txt".
// It will then print "Inception, Die Hard" in the file
fs.appendFile("do-what-it-says.txt", movieName + "  ", function(err) {
    
	// If the code experiences any errors it will log the error to the console. 
    if(err) {
        return console.log(err);
    }

    // Otherwise, it will print: "movies.txt was updated!"
    console.log("do-what-it-says.txt was updated!");
}); 
});
});
}