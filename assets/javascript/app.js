//Declaring initial Topics array

var topics = [
	"Devil Wears Prada",
	"Mean Girls",
	"Pitch Perfect",
	"Bridesmaids",
	"Frozen",
	"Anchorman",
	]

//Function for actually displaying the resulted giphys

function displayGiphys() {
	var movie = $(this).attr("data-name");
	var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + movie + "&api_key=dc6zaTOxFJmzC";

	//Ajax call for specific button
	$.ajax({
		url: queryURL,
		method: "GET"
	}).done(function(response) {
		var results = response.data;
		for (var i = 0; i < results.length; i++) {
			var gifDiv = $("<div class='item'>");
            var rating = results[i].rating;
            var p = $("<p>").text("Rating: " + rating);
		};
	});
};


//Function for displaying the buttons on the page

function renderButtons() {
	$("#buttons-view").empty();
	$.each(topics, function(x, y) {
		var a = $("<button>");
		a.addClass("movie");
		a.attr("data-name", y);
		a.text(y);
		$("#buttons-view").append(a);
	});
};

//Event listener for when add button is clicked, new button is created and all buttons are rendered over again

$("#add-button").on("click", function(event) {
	event.preventDefault();
	var newButton = $("#button-input").val().trim();
	topics.push(newButton);
	renderButtons();
})

// Adding click event listeners to all elements with a class of "movie"
$(document).on("click", ".movie", displayGiphys);

//Calling the renderButtons function to display the initial buttons from the array

renderButtons();