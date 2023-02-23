// Edit only the hoursCompleted
var hoursCompleted	= 1400; 

var maxColumn		= 40;
var maxRow			= 25;
var completeChart = 1000;

function loadPicture() {
	var rate			= 1;
	
	$('#hoursTotal').text(hoursCompleted);

	var currHours = hoursCompleted%completeChart;

	var chartCompleted = Math.floor(hoursCompleted/completeChart);
	console.log("Completed chart: ",chartCompleted);
	var tilesCompleted	= Math.floor(currHours/rate);
	$('#hoursCurrent').text(currHours);

	$('#chartCompletion').text(chartCompleted);

	// Display completed image

	rowloop:
	for(i = 1; i<=chartCompleted; i++){
		
	}

	rowloop:
	for (i = 1; i <=maxRow; i++) {
		$('#chart').append(`<div class="picture" id="row-${i}"></div>`)
		for (j = 1; j <= maxColumn; j++) {
			if (tilesCompleted > 0) {
				$(`#row-${i}`).append(`<img src="img/row-${i}-column-${j}.jpg" class="tile" id="row-${i}-col-${j}"/>`);
				tilesCompleted--;
			}
			else {
				$(`#row-${i}`).append(`<img src="img/bnw/row-${i}-column-${j}.jpg" class="tile" id="row-${i}-col-${j}"/>`);
			}
		}
	}
}

$(document).ready(function() {
	loadPicture();
});