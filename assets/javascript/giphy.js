// 3. List additional metadata (title, tags, etc) for each gif in a clean and readable format.


// api key + userInput "&q="
var apiKey = "DEnzkZJKkCehMUYpZJBk93I8JrMrXOpp&q=";
// what the user can choose to add
var plantInput = "";


// plant array
var plants = ["monstera", "cactus", "snake plant", "daisy flower", "oak tree", "willow tree", "passion flower"];

// create new plant buttons
function renderButtons() {

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

// api buttons
$(document).on("click", ".plant-btn", function() {
    var btnName = $(this).attr("data-name");
    console.log(btnName);

    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=" + apiKey + btnName + "&limit=10&offset=0&rating=G&lang=en";
    console.log(queryURL)

    // ajax pull request
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);

        // storing the data from the AJAX request in the results variable
        var results = response.data;

        // Looping through each result item
        for (let i = 0; i < results.length; i++) {
            // rating
            var giphyRating = results[i].rating
            
            // Creating and storing a div tag
            var plantDiv = $("<div>");
            // add class for css
            plantDiv.addClass(plantDiv);

            // Creating a paragraph tag with the result item's rating
            var ratingP = $("<p>").text("Rating: " + giphyRating);
            // group gifs
            var title = $("<p>").text(btnName);

            // Creating and storing an image tag
            var plantGif = $("<img>");
            // adding a class for btn function
            plantGif.addClass("plantGif");

            // Setting the src attribute of the image to a property pulled off the result item
            plantGif.attr("src", results[i].images.fixed_height.url);

            plantGif.attr("data-still", results[i].images.fixed_height_still.url);
            // <img src="giphy.com/still" data-still="giphy.com/still"/>

            plantGif.attr("data-animate", results[i].images.fixed_height.url);
            // <img src="giphy.com/animate" data-animate="giphy.com/animate"/>

            // Appending the paragraph and image tag to the plantDiv
            plantDiv.append(title)
            plantDiv.append(ratingP);
            plantDiv.append(plantGif);

            // Prependng the plantDiv to the HTML page in the "#planplant" div
            $("#plant-view").prepend(plantDiv);
        }
        // funtion to start/stop gif cycle
        $(".plantGif").on("click", function() {
            // check value on click
            console.log(this);
            // set variable to alternate
            var state = ["data-still" || "data-animate"];
            // If the clicked image's state is still, update its src attribute to what its data-animate value is.
            // Then, set the image's data-state to animate
            // Else set src to the data-still value
            if (state === "data-still") {
              $(this).attr("src", $(this).attr("data-animate"));
                $(this).attr("animate");
            } else {
              $(this).attr("src", $(this).attr("data-still"));
                $(this).attr("still");
            }
          });
    });
});
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
    // clear input field
    $("form").trigger("reset");
    });
        



// Calling the renderButtons function at least once to display the initial list of plants
renderButtons();

