let currentIndex = 'META';
let selectedIndex = 'META';

// Button click handler.
$("button").on('click', function(event) {
	event.preventDefault();
	let target = "BUTTON" === event.target.tagName ? Array.from(event.target.childNodes).find(node => node.tagName === "IMG" || node.tagName === "I") : event.target;
	selectedIndex = 'refresh' !== target.id ? target.id : currentIndex;
	getNewIndexPlot(target, selectedIndex);
});

// Retrieve new plot. Load spinner while waiting response.
function getNewIndexPlot(target, selectedIndex) {
	$("div.spanner").addClass("show");
	$("div.overlay").addClass("show");
	$.getJSON("/refresh",
		{
			index: selectedIndex,
			width: document.getElementById('container').clientWidth,
			height: document.getElementById('container').clientHeight
		},
		function(data) {
			document.getElementById("plot").src = "data:image/png;base64," + data;
	})
	.done(function (){
		if (undefined !== target && 'refresh' !== target.id){
			selectNewButton(target);
			currentIndex = selectedIndex;
		}
		console.log( "Successfully loaded the " + selectedIndex + " index");
	})
	.fail(function ( textStatus, error ){
		var err = textStatus + ", " + error;
		console.log( "Request Failed: " + err );
	})
	.always(function (){
		$("div.spanner").removeClass("show");
		$("div.overlay").removeClass("show");
	});
}

// Set the clicked button as selected.
function selectNewButton(newSelectedButton) {
	let oldSelectedButton = document.getElementById(currentIndex).parentNode;
	oldSelectedButton.className = oldSelectedButton.className.replace(" selected", "");
	newSelectedButton.parentNode.className += " selected";
}

// Perform an action every 60 seconds.
function fn60sec() {
	getNewIndexPlot(undefined, selectedIndex);
}
fn60sec();
// Comment this line in order to avoid callout spam in a online web site
setInterval(fn60sec, 60*1000);