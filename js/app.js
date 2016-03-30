$(document).foundation();

$(document).ready(function() {

	var toggleDescription = function() {
		var current = $(this);
		var closestTr = current.closest("tr");
		var nextTr = closestTr.next("tr");
		var foundDesc = nextTr.find(".desc");

		var currentDisplay = foundDesc[0].style.display;

		if(currentDisplay === ""  || currentDisplay === "none") {
			foundDesc[0].style.display = "block";
		} 
		else if (currentDisplay === "block") {
			foundDesc[0].style.display = "none";
		}

	}

	$("#schedule tr").on("click", toggleDescription);

});