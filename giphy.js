// api key + userInput "&q="
var apiKey = "DEnzkZJKkCehMUYpZJBk93I8JrMrXOpp&q=";
// what the user can choose to add
var plantInput = "";


// plant array
var plants = ["monstera", "cactus", "snake plant", "daisy flower", "oak tree", "willow tree", "passion flower"];

// create new plant buttons
function renderButtons() {
    console.log(this);

    // empty button list
    $("#buttons-view").empty();

    // create a for loop to pull from array
    for (var i = 0; i < plants.length; i++) {
        
        // create the button start and end tag. (<button></button>)
        var a = $("<button>");
        // Adding a class
        a.addClass("plant-btn");
        // Adding a data-attribute with a value of the plant at index i
        a.attr("data-name", plants[i]);
        // Providing the button's text with a value of the plant at index i
        a.text(plants[i]);
        // Adding the button to the HTML
        $("#buttons-view").append(a);
        };
};

// function to incorporate array and added plants
function plantPics(){

// formula to build api request
plant = $(this).attr("data-type");
var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=" + apiKey + plantInput + "&limit=10&offset=0&rating=G&lang=en";


// ajax pull request
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        console.log(queryURL);
        console.log(response);

        // storing the data from the AJAX request in the results variable
        var results = response.data;
        
        // Looping through each result item
        for(let i=0; i <= results.lenght; i++){
            
             // Creating and storing a div tag
             var plantDiv = $("<div>");
             rating = results[i].rating;

             // Creating a paragraph tag with the result item's rating
             var p = $("<p>").text("Rating: " + results[i].rating);
 
             // Creating and storing an image tag
             var plantGif = $("<img>");

             // Setting the src attribute of the image to a property pulled off the result item
             plantGif.attr("src", results[i].images.ixed_height_still.url);
 
             // Appending the paragraph and image tag to the plantDiv
             plantDiv.append(p);
             plantDiv.append(plantGif);
            
            // Prependng the plantDiv to the HTML page in the "#planplant" div
            $("#plant-view").prepend(plantDiv);
        }
    });

}
// add plant button function
    $("#add-plant").on("click", function(event) {

    // event.preventDefault() prevents the form from trying to submit itself.
        event.preventDefault();

    // This line will grab the text from the input box
        var plant = $("#plant-input").val().trim();

    // The plant name from the textbox is then added to our array
        plants.push(plant);

    // calling renderButtons which handles the processing of our plant array
       renderButtons();
       response();
    });

// Calling the renderButtons function at least once to display the initial list of plants
renderButtons();

