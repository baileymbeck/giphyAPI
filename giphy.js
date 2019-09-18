// full request for plant gifs
var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=DEnzkZJKkCehMUYpZJBk93I8JrMrXOpp&q=plants&limit=25&offset=0&rating=G&lang=en";

// api key + userInput "&q="
var apiKey = "DEnzkZJKkCehMUYpZJBk93I8JrMrXOpp&q=";
// what the user can choose to add
var plantInput = "";


// plant array
var plants = ["monstera", "cactus", "snake+plant", "daisy+flower", "oak+tree", "willow+tree", "passion+flower"];

// function to incorporate array and added plants
function plantPics(){
// formula to build api request
var queryUrl = "https://api.giphy.com/v1/gifs/search?api_key=" + apiKey + plantInput + "&limit=10&offset=0&rating=G&lang=en";
var plant = $(this).attr("data-type");

// ajax pull request
$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response){



});
}

