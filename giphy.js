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
}

// create new plant buttons
function renderButtons() {

    // empty button list
    $("#buttons-view").empty();

// create a for loop to pull from array
for (var i = 0; i < plants.length; i++) {
      
          // create the button start and end tag. (<button></button>)
          var a = $("<button>");
          // Adding a class
          a.addClass("plant");
          // Adding a data-attribute with a value of the movie at index i
          a.attr("data-name", plants[i]);
          // Providing the button's text with a value of the plant at index i
          a.text(plants[i]);
          // Adding the button to the HTML
          $("#buttons-view").append(a);
        }
};
// add plant button function
    $("#add-movie").on("click", function(event) {

// event.preventDefault() prevents the form from trying to submit itself.
    event.preventDefault();

// This line will grab the text from the input box
var plant = $("#plant-input").val().trim();

// The plant name from the textbox is then added to our array
plants.push(plant);

// calling renderButtons which handles the processing of our movie array
renderButtons();
});

// Calling the renderButtons function at least once to display the initial list of plants
renderButtons();


// ajax pull request
$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response){



});


